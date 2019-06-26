---
title: "How to avoid circular dependencies in your JavaScript monorepo"
cover: "https://images.unsplash.com/photo-1478754117940-f5bc84311001?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80%20750w"
date: "2019-06-26"
author: "alex"
category: "tech"
tags:
    - javascript
    - IT
    - tech
    - code
    - programming
---

Circular or cyclic dependencies could easily cause bugs in your application. When your modules reference each other you create circular dependency.

### Introducing Madge

[Madge](https://www.npmjs.com/package/madge) is a great npm package to check for circular dependencies

> Madge is a developer tool for generating a visual graph of your module dependencies, finding circular dependencies, and give you other useful info. Joel Kemp's awesome dependency-tree is used for extracting the dependency tree.

> * Works for JavaScript (AMD, CommonJS, and ES6 modules)
> * Also works for CSS preprocessors (Sass, Stylus, and Less)
> * NPM installed dependencies are excluded by default (can be enabled)
> * All core Node.js modules (assert, path, fs, etc) are excluded
> * ill traverse child dependencies automatically

#### Global installation

```bash
npm -g i madge

or

yarn global add madge
```

#### Check for circular dependencies locally

```bash
madge . -c --no-spinner
```

<img width="344" alt="Screen Shot 2019-06-26 at 12 14 52" src="https://user-images.githubusercontent.com/9251327/60172085-3bb11000-980c-11e9-820f-21c0bd368a52.png">

### Automate circular dependency check with CI pipeline

I would recommend to include circular dependency check as a part of your CI pipeline and make it required so you can be sure that with new changes to the codebase you do not introduce circular dependencies.

Just add the madge command to your `package.json`:

```json
{
  "scripts": {
    "find-circular-dependencies":
      "madge --webpackConfig=./packages/main webpack.config.js --circular --warning --no-spinner src packages"
  }
}
```

Include `madge` in your dev dependencies

```bash
npm i --only=dev madge

or

yarn add -D madge
```

```json
{
  "devDependencies": {
    "madge": "3.4.4"
  }
}
```

![Screen Shot 2019-06-25 at 17 33 56](https://user-images.githubusercontent.com/9251327/60172092-3fdd2d80-980c-11e9-8faf-cdeaef51d4a1.png)
