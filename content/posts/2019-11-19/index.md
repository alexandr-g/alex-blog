---
title: 'More readable Jest + Enzyme tests assertions with jest-enzyme'
date: '2019-11-19'
author: 'alex'
category: 'tech'
tags:
  - js
  - javascript
  - jest
  - enzyme
  - react
  - unit tests
  - test assertions
  - tests
  - jest-enzyme
  - Jest
  - JavaScript Testing utilities for React
---

When you're using [Jest](https://jestjs.io/) as a JavaScript Testing Framework for your React projects there is a high chance that you're using Jest in conjunction with [Enzyme](https://github.com/airbnb/enzyme).

[Enzyme](https://github.com/airbnb/enzyme) is a popular JavaScript Testing utilities for React from Airbnb and de facto is a standard testing library withing the React community. Of course, there are some alternatives like [react-testing-library](https://github.com/testing-library/react-testing-library) but Enzyme us more popular.

If Jest + Enzyme works very well already, why bother and installing something else additionally?

# Welcome [Enzyme-matchers](https://github.com/FormidableLabs/enzyme-matchers)

[Enzyme-matchers](https://github.com/FormidableLabs/enzyme-matchers) - is a set of Jest assertions for the enzyme to simplify your tests and make them more readable.

It has a package called [jest-enzyme](https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md). That's what we need.

## Reasons to use jest-enzyme

- better tests readability
- more comfortable (Enzyme doesn’t have all the handy assertions)
- shorter (less code to write)
- more specific **error** output (not general)

## Assertions I use the most from the jest-enzyme

> Not all assertions work with every rendering strategy.
> If you are wondering what rendering mechanism to use when, refer to [enzyme's documentation](https://github.com/airbnb/enzyme).

I'm using full `mount` for most of my unit tests so these assertions work with it.

- [toBeChecked()](https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md#tobechecked)
- [toBeDisabled()](https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md#tobedisabled)
- [toBeEmptyRender()](https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md#tobeemptyrender)
- [toExist()](https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md#toexist)
- [toHaveProp()](https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md#tohaveprop)
- [toHaveText()](https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md#tohavetext)
- [toIncludeText()](https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md#toincludetext)
- [toHaveValue()](https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md#tohavevalue)

## How to setup jest-enzyme?

### Step 1. Install jest-enzyme package to your `package.json`

**Note:** there is a [Setup](https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md#setup) documentation in the docs but I'm doing setup differently.

Depends which package manager you use Yarn or NPM from the project root execute add `jest-enzyme` to your `devDependencies`:

```bash
yarn add -D jest-enzyme # install with Yarn

npm i jest-enzyme --save-dev # install with NPM
```

### Step 2. Configure jest-enzyme

In your `jest.config.js` file add property:

```javascript
// jest.config.js
module.exports = {
  setupFilesAfterEnv: ['./jest/setupTestFramework.js']
}

// or in the package.json
{
  "jest": {
     "setupFilesAfterEnv": ['./jest/setupTestFramework.js'],
  }
}
```

### Step 3. Create setupTestFramework file

In the project root create a folder called `jest` with a file inside called `setupTestFramework.js` so you'll have a file structure like `./jest/setupTestFramework.js`.

### Step 4. Import jest-enzyme in the setupTestFramework file

Your `setupTestFramework` might look like that. Please include `import 'jest-enzyme'` line in it.

```javascript
// ./jest/setupTestFramework.js
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'

configure({ adapter: new Adapter() })
```

That's it! Now you can use better assertions form the est-enzyme 🙂

[jest-enzyme](https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md) is a great addition to your React testing toolkit. It is not necessarily aiming at replacing Enzyme but a nice addition to it.
