---
title: 'Extend your end-to-end Cypress tests with visual tests using AI and Applitools'
date: '2019-12-20'
author: 'alex'
category: 'tech'
tags:
  - coding
  - e2e
  - e2e tests
  - javascript
  - dev
  - end-to-end tests
  - applitools
  - visual tests
  - devtools
  - Cypress
  - cypress
---

## [Applitools](https://applitools.com/) cloud integration

Applitools - is a 3rd party cloud provider to run end-to-end visual tests. It is taking DOM snapshots and transfer them via SDK to Applitools cloud, them spin up a new browser instance and re-creates taken snapshot in the cloud. AI is used to determine visual differences between screenshots.

### Install Eyes-Cypress SDK as dev dependency to your existing project to enable Applitools

```bash
yarn -D @applitools/eyes-cypress
```

### Create `applitools.config.js` config file

```javascript
// applitools.config.js
module.exports = {
  appName: 'helloapp',
  browser: { width: 1024, height: 768, name: 'chrome' }
}
```

### Configure custom commands

```javascript
// cypress/support/index.js
import '@applitools/eyes-cypress/commands'
```

### Configure Eyes-Cypress plugin

```javascript
// cypress/plugins/index.js
require('@applitools/eyes-cypress')(module)
```

## Useful Applitools commands

- Whenever you use `cy.eyesOpen({})` that "opens" connection to the Applitools cloud.

- Is is recommended to close the connection with `cy.eyesClose()` each time you use `cy.eyesOpen({})`.

- In between open and close you can take screenshots of each page using `cy.eyesCheckWindow('screenshot name')` command - that will send screenshot to the cloud.

### How to get the `APPLITOOLS_API_KEY` token

Depends on your setup you could have a shared user to generate an Applitools token and run the tests.

1. Login to GitHub with your user (if you haven't already)
2. In separate tab navigate to the [Applitools](https://applitools.com/)
3. Click 'Sign in' and 'Sign in with GitHub'
4. Click on user icon in the top right corner
5. Click on `My API Key` - that's the `APPLITOOLS_API_KEY` token

### Running e2e **locally** with Applitools

In order to run e2e tests locally with Applitools integration you'll need to **export** `APPLITOOLS_API_KEY` to your bash.

```bash
export APPLITOOLS_API_KEY=token_value
```

Then you can run e2e tests as usually with `yarn cypress:run`.

### How to access Applitools dashboard

1. Login to GitHub with your user
2. In separate tab navigate to the [Applitools](https://applitools.com/)
3. Click 'Sign in' and 'Sign in with GitHub'
4. You should be able to see the dashboard

### Writing tests or modifying existing to include cloud command

In order to start visual test open connection using `cy.eyesOpen({})` command, make snapshots with `cy.eyesCheckWindow()` and close connection with `cy.eyesClose()`.

```javascript
describe('Hello world', () => {
  it('works', () => {
    cy.visit('https://applitools.com/helloworld')

    // to establish connection with cloud and start a visual test
    cy.eyesOpen({})

    // take snapshot for the main page
    cy.eyesCheckWindow('Main Page')

    cy.get('button').click()

    // take snapshot of the main page after click
    cy.eyesCheckWindow('Main Page after button click')

    // close connection
    cy.eyesClose()
  })
})
```
