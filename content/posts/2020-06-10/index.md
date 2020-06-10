---
title: 'How to setup Apollo Client in order to perform GraphQL queries with NextJS'
date: '2020-06-10'
author: 'alex'
category: 'tech'
tags:
  - coding
  - es6
  - javascript
  - dev
  - devtools
  - react
  - graphql
  - apollo client
  - apollo server
  - ssr
  - next
  - nextjs
  - code
  - api
  - API
  - mongodb
---

In the previous article [Setting up GraphQL API with MongoDB and Apollo Server for a NextJS app](https://grischuk.de/setting-up-graph-ql-api-with-mongo-db-and-apollo-server-for-a-next-js-app) we've created a GraphQL API with Apollo Server setup and connection to the MongoDB. We worked mainly on the **server side** of the application.

It's recommended to read and follow along the first part if you haven't.

In this article, we're moving to the **client side** of the application and we'll learn how to consume an API that we've created in the first part. Meaning, performing queries from our NextJS application to the GraphQL API.

## An idea

In order to perform queries to our GraphQL API from the client-side (and not only from the GraphQL Playground) we'll need to setup [Apollo Client](https://www.apollographql.com/docs/react/).

Using a custom implementation of the `withApollo()` high-order component we are going to wrap index file with it and make queries to the API.

## Installing Apollo Client and related dependencies

```bash
yarn add apollo-client @apollo/react-hooks @apollo/react-ssr apollo-cache-inmemory apollo-link-http apollo-link-schema graphql-tag
```

## Setting up an Apollo Client

At the project root let's create a folder called `apollo/` with a `client.js` file inside.

```js
// apollo/client.js
import React from 'react'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

let globalApolloClient = null

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
export function withApollo(PageComponent, { ssr = true } = {}) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState)
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    )
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component'

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.')
    }

    WithApollo.displayName = `withApollo(${displayName})`
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx) => {
      const { AppTree } = ctx

      // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.
      const apolloClient = (ctx.apolloClient = initApolloClient())

      // Run wrapped getInitialProps methods
      let pageProps = {}
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx)
      }

      // Only on the server:
      if (typeof window === 'undefined') {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps
        }

        // Only if ssr is enabled
        if (ssr) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import('@apollo/react-ssr')
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient,
                }}
              />
            )
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error)
          }

          // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually
          Head.rewind()
        }
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract()

      return {
        ...pageProps,
        apolloState,
      }
    }
  }

  return WithApollo
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
function initApolloClient(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return createApolloClient(initialState)
  }

  // Reuse client on the client-side
  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(initialState)
  }

  return globalApolloClient
}

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */
function createApolloClient(initialState = {}) {
  const ssrMode = typeof window === 'undefined'
  const cache = new InMemoryCache().restore(initialState)

  // Check out https://github.com/vercel/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    ssrMode,
    link: createIsomorphLink(),
    cache,
  })
}

function createIsomorphLink() {
  if (typeof window === 'undefined') {
    const { SchemaLink } = require('apollo-link-schema')
    const { schema } = require('./schema')
    return new SchemaLink({ schema })
  } else {
    const { HttpLink } = require('apollo-link-http')
    return new HttpLink({
      uri: '/api/graphql',
      credentials: 'same-origin',
    })
  }
}
```

## Sharing schema for Apollo Client and Server

Our GraphQL schema is located now under the `pages/api/graphql.js` alongside with our Apollo Server setup.

Before we had all the setup in on file on the server, like so:

```js
import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient } from 'mongodb'

require('dotenv').config()

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    blog: String
    stars: Int
  }

  type Query {
    users: [User]!
  }
`

const resolvers = {
  Query: {
    users(_parent, _args, _context, _info) {
      return _context.db
        .collection('users')
        .findOne()
        .then((data) => {
          return data.users
        })
    },
  },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

let db

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(process.env.MONGO_DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })

        if (!dbClient.isConnected()) await dbClient.connect()
        db = dbClient.db('next-graphql')
      } catch (e) {
        console.log('--->error while connecting with graphql context (db)', e)
      }
    }

    return { db }
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
```

However we need to access schema on the client side as well so let's move `typeDefs`, `resolvers` and `schema` setup to the `apollo` folder on the client and just import it on the server.

Inside the `apollo/` folder let's create `type-defs.js`, `resolvers.js` and `schema.js` files and move respective parts in there so you would have a file structure like this:

<img src="https://i.imgur.com/xe1YHRl.png" width="710" />

```js
// apollo/type-defs.js
import gql from 'graphql-tag'

export const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    blog: String
    stars: Int
  }

  type Query {
    users: [User]!
  }
`
```

```js
// apollo/revolvers.js
export const resolvers = {
  Query: {
    users(_parent, _args, _context, _info) {
      return _context.db
        .collection('users')
        .findOne()
        .then((data) => {
          return data.users
        })
    },
  },
}
```

```js
// apollo/schema.js
import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs } from './type-defs'
import { resolvers } from './resolvers'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
```

After moving files to the client our Apollo Server setup looks nice and clean:

```js
// pages/api/graphql.js
import { ApolloServer } from 'apollo-server-micro'
import { MongoClient } from 'mongodb'
import { schema } from '../../apollo/schema'

require('dotenv').config()

let db

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(process.env.MONGO_DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })

        if (!dbClient.isConnected()) await dbClient.connect()
        db = dbClient.db('next-graphql')
      } catch (e) {
        console.log('--->error while connecting with graphql context (db)', e)
      }
    }

    return { db }
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
```

After the refactoring our API still works as expected:

<img src="https://i.imgur.com/edutfC9.png" width="710" />

## Create Users component and perform queries to the GraphQL API

Create `components/Users.js` component which will display a list of users:

```js
// components/Users.js
import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const UsersQuery = gql`
  query Users {
    users {
      id
      firstName
    }
  }
`

const Users = () => {
  const { loading, error, data } = useQuery(UsersQuery)

  if (loading) return 'loading users...'
  if (error) return 'error while loading users'

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users
```

## Wrap Index file `withApollo()` HOC

In order for GraphQL Queries to work we need to wrap our Index page `withApollo()` HOC.

Let's refactor our Index page to display the Users component and import `withApollo()`.

```js
// pages/index.js
import Head from 'next/head'
import Users from '../components/Users'
import { withApollo } from '../apollo/client'

const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Users />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .logo {
          height: 1em;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default withApollo(Index)
```

That's it! We can perform queries to our GraphQL API with Apollo Client and fetch data from the MongoDB.

## [graphql-apollo-mongodb-example](https://github.com/alexandr-g/graphql-apollo-mongodb-example)

I created supporting [repository](https://github.com/alexandr-g/graphql-apollo-mongodb-example) for this article so you can follow along commit-by-commit.
