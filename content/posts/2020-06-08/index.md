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
