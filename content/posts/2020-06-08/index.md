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
