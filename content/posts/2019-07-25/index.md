---
title: "How to test React component wrapped in withRouter HOC"
cover: "https://images.unsplash.com/photo-1561736778-92e52a7769ef"
date: "2019-07-25"
author: "alex"
category: "tech"
tags:
    - javascript
    - IT
    - tech
    - code
    - programming
---

`withRouter` is a handy high-order component from `react-router` package which gives you access to `match` and `history` props which you can use for performing navigation inside your React application. If you want to test React components wrapped in `withRouter` you'll need the following.

Let's say you have some component:

```js
// PollDetails.js
import React, { Fragment } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const PollDetails = ({ match, history }) => {
  return (
    <Fragment>
      <header>Question Detail</header>
      <div>No question found</div>
      <Link to={`/`}>
        <button>Go back</button>
      </Link>
    </Fragment>
  )
}

export default withRouter(PollDetails)
```

### Trying to render `withRouter` component with the enzyme `mount` will result in an error

```js
// PollDetails.spec.js
import React from 'react'
import { mount } from 'enzyme'

import PollDetails from './PollDetails'

let component

beforeEach(() => {
  component = mount(<PollDetails />)
})

it('should render page heading.', () => {
  expect(component.text()).toContain('Question Detail')
})

it('should render "no question found" message if question is not present.', () => {
  expect(component.text()).toContain('No question found')
})
```

will lead to Invariant and a very common error that you might see working `withRouter` HOC

```bash
Invariant failed: You should not use <withRouter(PollDetails) /> outside a <Router>
```

<img width="700" alt="Screen Shot 2019-07-25 at 18 32 34" src="https://user-images.githubusercontent.com/9251327/61891791-c586f280-af0a-11e9-9b51-344bd4a29fec.png">

### Using `shallow` rendering

```js
// PollDetails.spec.js
import React from 'react'
import { shallow } from 'enzyme'

import PollDetails from './PollDetails'

let component

beforeEach(() => {
  component = shallow(<PollDetails />)
})

it('should render page heading.', () => {
  expect(component.text()).toContain('Question Detail')
})

it('should render "no question found" message if question is not present.', () => {
  expect(component.text()).toContain('No question found')
})
```

The error would to away but you asserting against the wrong component and all the assertions will fail:

<img width="700" alt="Screen Shot 2019-07-25 at 18 33 10" src="https://user-images.githubusercontent.com/9251327/61891795-c7e94c80-af0a-11e9-89a5-2a0ab3464d7c.png">

### Fixing the error by accessing `WrappedComponent`

By using `PollDetails.WrappedComponent` we skip our `withRouter` HOC and access directly component that we want to be rendered so that we can run our assertions on it.

```js
// PollDetails.spec.js
import React from 'react'
import { shallow } from 'enzyme'

import PollDetails from './PollDetails'

let component

beforeEach(() => {
  component = shallow(<PollDetails.WrappedComponent />)
})

it('should render page heading.', () => {
  expect(component.text()).toContain('Question Detail')
})

it('should render "no question found" message if question is not present.', () => {
  expect(component.text()).toContain('No question found')
})
```

<img width="700" alt="Screen Shot 2019-07-25 at 18 30 58" src="https://user-images.githubusercontent.com/9251327/61891785-c3249880-af0a-11e9-8d6f-563a026d9cef.png">

### Enzyme full component rendering using mount with MemoryRouter

What if you still want to use full rendering with enzyme `mount`?

You still can do that by wrapping your component in `<MemoryRouter></MemoryRouter`.

```js
// PollDetails.spec.js
import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import PollDetails from './PollDetails'

let component

beforeEach(() => {
  component = mount(
    <MemoryRouter>
      <PollDetails />
    </MemoryRouter>
  )
})

it('should render page heading.', () => {
  expect(component.text()).toContain('Question Detail')
})

it('should render "no question found" message if question is not present.', () => {
  expect(component.text()).toContain('No question found')
})
```
