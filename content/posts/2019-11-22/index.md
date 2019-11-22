---
title: 'Start using Yarn v2 codename berry today'
date: '2019-11-22'
author: 'alex'
category: 'tech'
tags:
  - js
  - javascript
  - yarn
  - yarn v2
  - yarn berry
  - typescript
  - node modules
  - packages installation
---

If you're using `yarn` version 1 already for your dependencies installations you might consider to migrate your project client dependencies installation to the **Yarn v2**.

[Yarn 2](https://github.com/yarnpkg/berry) (codename `berry`) is still under active development which results in poor documentation and lack of exact instructions. `Yarn v1` is not in an active developing anymore and it's clear that we need to migrate to the v2 in the near future.

## Start using Yarn 2 today

You can find initial instructions on the [Yarn 2 official installation page](https://next.yarnpkg.com/getting-started/install). They are working on a new documentation portal under `https://next.yarnpkg.com/`.

1. Set yarn version to the `v2` executing in your project folder:

```bash
yarn policies set-version v2
```

2. Verify that yarn version was switched to the v2

```bash
yarn --version
v2.0.0
```

## Working with private NPM packages

If you use any private packages in your project consider the following options:

### Login to NPM

Login to NPM using your GitHub username and generated **access token** (or any other auth method you might be using).

```bash
yarn npm login --scope npm_org_scope
```

### Check under which user you are currently logged in

```bash
yarn npm whoami
```

## Yarn generated files purpose and their meaning

**Yarn 2** generates the following new files:

- `.yarn` - (folder): keeps your modules in a zip file, you want to keep this in git
- `pnp.js` - helps tools to understand where modules are
- `yarnrc.yml` - the config for yarn v2 (write using YML)
- `.yarnrc` - the config for yarn v1 to tell it to use v2

## Yarn versions

### To list all the versions of Yarn you have installed

```bash
brew list --versions yarn
```

### How to set Yarn version back to the "old" version

To roll back, from the home `~` directory remove `.yarn` folder with the berry release that will make it possible to use your `yarn` installed with `brew`.

```bash
cd ~
rm -rf .yarn/
```

## Failures

Keep in mind that Yarn v2 is in a kind of "beta" state so failures and bugs are likely to occur. I myself experience errors when using **Yarn v2** while installing private npm packages from the GitHub Package Registry.

## How successful install with Yarn 2 looks like

Let's use [Create React App](https://github.com/facebook/create-react-app) CLI tool to generate an example project and then install modules with **Yarn 2**. To do so step-by-step execute from a terminal:

```bash
yarn create react-app my-app
cd my-app
yarn start # app running on http://localhost:3000/
rm -rf node_modules # remove dependencies(node_modules) installed with yarn v1
yarn policies set-version v2 # use yarn v2
yarn install # install dependencies using yarn v2
yarn start # app is running on http://localhost:3000/ with deps installed with Yarn 2
```

![Screen Shot 2019-11-22 at 15 57 22](https://user-images.githubusercontent.com/9251327/69436603-f6085d00-0d41-11ea-94bf-6fab7c790f6d.png)

Successful installation

![Screen Shot 2019-11-22 at 15 59 56](https://user-images.githubusercontent.com/9251327/69436674-1c2dfd00-0d42-11ea-8236-41b8ecd22293.png)

## Yarn 2 FAQ

### Should I delete node_modules folder?

Yes. Remove your `node_modules` with `rm -rf */node_modules` (or whatever it takes to recursively delete).

> Yup - we print a warning during linking if we notice that there's a lingering `node_modules`. The warning error code points to [here](https://next.yarnpkg.com/advanced/error-codes#yn0031---dangerous_node_modules), which I should edit to include a command to remove them in one go!

### Should I delete my yarn.lock file?

> Nope - Yarn will automatically migrate the lockfile and reuse the versions that are already stored inside. We'll still need to make network requests to retrieve the necessary information that weren't part of the v1 format, but apart from that keeping the lockfile is advised.

### What is stored inside `.yarn/cache` folder?

All the downloaded dependencies (modules) in the `.zip` format.

```bash
ls .yarn/cache
```

![Screen Shot 2019-11-22 at 16 04 10](https://user-images.githubusercontent.com/9251327/69436785-5a2b2100-0d42-11ea-8491-7f7826bd8a0e.png)

### Conclusion

You can start using and experiment with yarn v2 today, no need to wait for its official release. It's quite stable already, it was re-written on TypeScript to leverage type system. Have some fun and hopefully it works for your project 🙂🙏🏻
