---
title: 'Provide common context to your nested React components with useContext() hook'
date: '2019-11-30'
author: 'alex'
category: 'tech'
tags:
  - js
  - javascript
  - react
  - react hooks
  - react custom hooks
---

Imagine having a two deeply nested React components down in the three which should know about the same state.

There are multiple ways to solve this problem. You can use Redux store or a relatively new `useContext()` React hook for this. Real world example would be when you have a component that is responsible for controlling a side panel/bar. Your side bar is located inside two different components which don't know about each other. You can open/close side bar and you want to remember its "state".

In this article we've going to use `useContext()` hook from the React to achieve this.

## The goal is to create a custom context for panel switch

Let's say I have a component with side bar or panel and what I want to do with it is to control opening and closing this panel and keep the sate of the panel.

At the end I'm going to expect the following API for the usage of custom context:

```javascript
const { sidebar, onSidebarChange } = useContext(SidebarContext)
```

`SidebarContext` will give us an access to the `panel` prop and `onSidebarChange` handler.

## Creating a custom context

In order to create a custom context we'll need to import `createContext` from React.

```javascript
import { createContext } from 'react'
```

Let's create and name our context with initial state and the handler.

```javascript
const SidebarContext = createContext({
  sidebar: null,
  onSidebarChange: () => {
    invariant(
      false,
      'You are trying to access the context outside of the provider.'
    )
  }
})
```

If you're using Flow we can add a type for our context for type safety reasons. There is `Context` type in React:

```javascript
import React, { type Context, createContext } from 'react'

type SidebarT = 'comments' | 'information' | 'history'

type SidebarContextT = {|
  sidebar: ?SidebarT,
  onSidebarChange: (sidebar: ?SidebarT) => void
|}

const SidebarContext: Context<SidebarContextT> = createContext({
  sidebar: null,
  onSidebarChange: () => {
    invariant(
      false,
      'You tried to change a panel but you have not wrapped your component with SidebarContextProvider.'
    )
  }
})
```

## Component context Provider

In order to provide context to our components we'll to create context provider for it and wrap our high-level component in it:

```javascript
const SidebarContextProvider = children => {
  return (
    <SidebarContext.Provider value={{ sidebar, onSidebarChange }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider
```

## Export context itself for further usage

```javascript
export const usePanel = (): [
    sidebar: ?SidebarT,
    (sidebar: ?SidebarT) => void
] => {
  const { sidebar, onSidebarChange } = useContext(SidebarContext)

  return [sidebar, onSidebarChange]
}
```

## Wrap Main.js file with the SidebarContextProvider

Let's say you have `Main.js` file with routing inside. This is your top level component. We need to wrap or "provide" context globally to our components. Add `SidebarContextProvider` before the switch.

```javascript
import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import { SidebarContextProvider } from './components'

export default function Main({ match }) {
  return (
    <SidebarContextProvider>
      <Switch>
        <Route path={`${match.url}/component-one`} component={ComponentOne} />
        <Route
          exact
          path={`${match.url}/component-two`}
          component={ComponentTwo}
        />
        <Route
          path={`${match.url}/component-one/:id`}
          component={ComponentThree}
        />

        <Redirect to={`${match.url}/home`} />
      </Switch>
    </SidebarContextProvider>
  )
}
```
