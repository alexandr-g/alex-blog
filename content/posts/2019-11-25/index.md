---
title: 'Write custom React hook to change background color of the page'
date: '2019-11-25'
author: 'alex'
category: 'tech'
tags:
  - js
  - javascript
  - react
  - react hooks
  - react custom hooks
---

In this article, we will be writing a simple custom React hook which will be based on React `useEffect` hook from `react` and allow us to **control** background page color. For example, to enable dark mode.

## First, let's create a new React project

```bash
yarn create react-app dark-background
cd dark-background
```

## Modify existing CSS

By default create-react-app project background is dark already so we need to disable it.

Navigate to the `App.css` and comment line with `background-color` of the `.App-header` CSS class.

```css
/*  src/App.css */
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
}

.App-header {
  /* background-color: #282c34; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #09d3ac;
}
```

Do the `yarn start` and verify that the starting page loads with the white background color.

## Create a simple custom hook which switches the color

I'm going to create a `hooks` folder under `src` with `index.js` and `useDarkBody.js` files.

```js
// hooks/useDarkBody.js
import { useEffect } from 'react'

function useGreyBody() {
  useEffect(() => {
    document.body.style.backgroundColor = '#282c34'

    return () => {
      document.body.style.backgroundColor = '#fff'
    }
  })
}

export default useGreyBody
```

When used `useGreyBody()` will set a page background color to `#282c34` otherwise color will be `#fff`.

## Export our hook from the index file

In order to use our custom hook whatever we want from the `hooks/` folder let's our hook as default export from `hooks/index.js`:

```js
// hooks/index.js
export { default as useDarkBody } from './useDarkBody'
```

## Use a custom hook in App.js

Navigate to the `App.js` and invoke `useDarkBody()` before render function:

```js
// src/App.js
import React from 'react'
import logo from './logo.svg'
import './App.css'

import { useDarkBody } from './hooks'

function App() {
  useDarkBody()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
```

`yarn start` do start the app an verify that color is now changed to dark. You can use this hook whenever need in other components as you wish.

Congrats! We've created a custom re-usable hook which does one simple thing :)
