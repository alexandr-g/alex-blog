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

When working on any project you'll eventually ended up having legacy code which needs to be refactored, dependencies updated, or you'd like to migrate to a new hot framework.

Below are some rules from my experience I found helpful to follow while refactoring old code.

## Make it work then make it better

## Do one thing at a time

## Premature optimization is evil

## Know when to stop (keep balance) refactoring

Related to the previous rule. Knowing when to stop is very important as well as keeping balance. Often in code refactoring process you'll find so many code that could be improvement and it's hard to resist to this tension. You need to resist and only refactor what is necessarily and withing your scope. Don't make big code changes even bigger. Stop, separate, split for smaller modules and refactor them separately.
