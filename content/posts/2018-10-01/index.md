---
title: "Golden rules of code refactoring"
cover: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=377e356cce015c363d123504857f8137&auto=format&fit=crop&w=2511&q=80"
date: "2018-10-01"
author: "alex"
category: "tech"
tags:
    - javascript
    - IT
    - tech
    - code
    - refactoring
    - programming
---

When working on any project you'll eventually end up having legacy code which needs to be refactored, dependencies updated, or you'd like to migrate to a new hot framework.

Below are some rules which I found helpful to follow while doing refactoring.

## 1. Make it work then make it better

Perhaps you moved files, you renamed methods/functions, encapsulate logic in helper utility, now you want to fix tests, fix types, now you start changing logic using a functional approach, then using functions from `lodash`. Wait, stop, breathe, don't rush. 

The first thing to remember after refactoring your application/functionality/component should behave the same way it was before. So first make it work after refactoring then think how to make it better.

## 2. Do one thing at a time

The focus is the key here, define the refactoring scope beforehand and stick to it. No multitasking, no switching to other "quick things" to check. Start with leaves, small and independent parts of your application and then move to more sophisticated stuff.

## 3. Avoid premature optimization

Do not try to optimize what is not written yet. Do not spend much time thinking about optimization on the fly. See rule #1 above. Otherwise, you'll lose a lot of time not being able to complete anything.

## 4. Know when to stop refactoring. Keep balance

Related to the previous rule. Knowing when to stop is very important as well as keeping balance. 

Often in code refactoring process, you'll find so many code imperfections that could be improved and it's hard to resist the temptation to improve it right away. You'll need to resist and only refactor what is necessary within your scope. Don't make big code changes even bigger. Stop, separate, split for smaller modules and refactor them separately.
