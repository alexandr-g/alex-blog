---
title: 'Setting Apollo GraphQL API with MongoDB connection for a NextJS app'
date: '2020-06-08'
author: 'alex'
category: 'tech'
tags:
  - coding
  - es6
  - javascript
  - dev
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

Recently, I got an interest in working with a [Next.js](https://nextjs.org/) [React](https://reactjs.org/) Framework for server-side-rendered (SSR)applications (not only). I'm using Next more and more for my pet projects. I was surprised by how intuitive, easy, and enjoyable working with NextJS is.

In this article we're going to setup [GraphQL](https://graphql.org/) API with [MongoDB](https://www.mongodb.com/) connection for a NextJS app. I surprised that both [NextJS](https://nextjs.org/) and Apollo GraphQL examples were lacking such a common use case with MongoDB. There were examples with [PostgreSQL](https://www.postgresql.org/) but I wanted to use a non-SQL database. After spending some time learning and reading I put together this step-by-step guide on how to connect your Apollo Server GraphQL API to MongoDB and read/write data to Mongo database in your GraphQL resolvers.

## Initialize a NextJS default app

There are multiple ways to initialize a project with Next via [create-next-app](https://nextjs.org/docs/getting-started#setup) similar to `create-react-app` or [manually](https://nextjs.org/docs/getting-started#setup).

I'm going to use `create-next-app` with Yarn (alternatively, you could use NPM) for this example:

```bash
yarn create next-app graphql-apollo-mongodb
```

Pick a template › Default starter app

After dependencies installed:

```bash
cd graphql-apollo-mongodb
yarn dev
```

Cool! Our NextJS app is running on `http://localhost:3000`.

## Setting up MongoDB Atlas

> MongoDB Atlas is the global cloud database service for modern applications. Deploy fully managed MongoDB across AWS, Azure, or GCP. Best-in-class automation and proven practices guarantee availability, scalability, and compliance with the most demanding data security and privacy standards. Use MongoDB's robust ecosystem of drivers, integrations, and tools to build faster and spend less time managing your database.

I'm going to be using an instance of the cloud Mongo database.

1. Navigate to the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) page
2. Click "Start Free" and sign up for the MongoDB account
3. On the "Projects" page click on "New Project" give it a name and create
4. Add Members. For the test case, it's you
5. Build Cluster -> Select Free Tier
6. Select Cloud Provider & Region and Create Cluster
7. After the cluster was initialized click on "connect"

- Whitelist a connection IP address -> Add a Different IP Address -> Enter `0.0.0.0/0` to the IP Address in order to access this DB from anywhere.

- Create a MongoDB User -> Enter Username and Password

- You'll be using this user in order to connect to the DB instance. Finally hit Create MongoDB User

8. Choose a connection method -> Select Connect Your Application and select Node.js

- Add your connection string into your application code
- Copy and save your application string

```bash
"mongodb+srv://test:<password>@cluster0-yvwjx.mongodb.net/<dbname>?retryWrites=true&w=majority"
```

Nice. We have a URL to the cloud DB instance to which we can connect from our code but we don't have a DB yet. Let's go and create a new DB.

9. Navigate to the Collections tab and click Add my Own Data

- Give DATABASE NAME/COLLECTION NAME and hit Create

// image here

After the setup you should see your cluster running:

// image of a cluster with DB here

We can insert some document/data into our database manually or via code execution. We are done here.

## Setting up a GraphQL API with Apollo Server

Right now we don't have any graphql setup in our application. When we navigate to the `http://localhost:3000/api/hello` we'll see

```js
{"name":"John Doe"}
```

the output which is served from the `pages/api/hello.js` file.

What we need is to create a new endpoint under `pages/api/graphql.js` that's where our Apollo Server GraphQL setup will be located. Call to GraphQL API will be served from `http://localhost:3000/api/graphql`.

### Install apollo-server-micro graphql mongodb

Let's install packaged required for the Apollo Server setup

```bash
yarn add apollo-server-micro graphql mongodb
```

### Create a basic GraphQL server

Add `graphql.js` file under `pages/api/`.

```js
// pages/api/graphql.js
import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`

const resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return 'Hello World!'
    },
  },
}

export const config = {
  api: {
    bodyParser: false,
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })
export default apolloServer.createHandler({ path: '/api/graphql' })
```

We created a new instance of the ApolloServer, passing our type definitions and resolvers to it and serving this graphql on `/api/graphql` path.

When you navigate to the `http://localhost:3000/api/graphql` you should see a GraphQL Playground where you could execute mutation/queries.

// image of the GraphQL Playground here

That's great but our API doesn't do much for the moment. It was just for testing. Let's add a MongoDB connection.

### Adding MongoDB connection to our Apollo Server

Before adding a MongoDB connection let's talk about data. For the example purpose our application will be displaying a list of users from MongoDB.

Here's my data representation. I'll insert it manually into our MongoDB:

```json
{
  "users": [
    {
      "id": 1,
      "firstName": "Alexander",
      "lastName": "Grischuk",
      "blog": "https://grischuk.de/",
      "stars": 5
    },
    {
      "id": 2,
      "firstName": "Max",
      "lastName": "Mustermann",
      "blog": "mustermann.de",
      "stars": 3
    }
  ]
}
```

## Creating executable schema and connecting mongo client to DB

Graphql schema is a combination of `typeDefs` and resolvers.

To make schema executable we need to install `graphql-tools`

```bash
yarn add graphql-tools
```

Let's describe a data query in our `typeDefs` and `resolvers`. We want to query a list of users from the MongoDB.

```js
// pages/api/graphql.js
import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient } from 'mongodb'

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
        const dbClient = new MongoClient(
          'mongodb+srv://test:qwerty123@cluster0-yvwjx.mongodb.net/next-graphql?retryWrites=true&w=majority',
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )

        if (!dbClient.isConnected()) await dbClient.connect()
        db = dbClient.db('MCT') // database name
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

### Configuring .env variables

It's not recommended checking in your MongoDB URI directly to git for security and deployment convenience. We will make Mongodb URI accessible vie environment variables and pull it from there.

First, install `dotenv` npm package

```bash
yarn add dotenv
```

Create `.env` file at the project root with your `MONGO_DB_URI`

```bash
MONGO_DB_URI=mongodb+srv://test:qwerty123@cluster0-yvwjx.mongodb.net/next-graphql?retryWrites=true&w=majority
```

```js
// pages/api/graphql.js
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
        db = dbClient.db('next-graphql') // database name
      } catch (e) {
        console.log('--->error while connecting via graphql context (db)', e)
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

### Testing MongoDB connection in GraphQL Playground

Navigate to `http://localhost:3000/api/graphql` and make a query

```js
{
  users {
    id
    firstName
    lastName
  }
}
```

// GraphQL Playground image

It works!

In our MongoClient set up, we initialize a new database connection using `new MongoClient()` with MongoDB cloud URL read from our `.env` file. We return db object `{ db }` from our context function to be accessible via `_context` in our resolvers. That's it! As soon as you have access to the database in your resolvers, you can perform read/write operations there for your queries and mutations.
