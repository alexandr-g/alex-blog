---
title: 'Switching from the GitHub Pages to Zeit Now deployment for this blog'
date: '2019-11-16'
author: 'alex'
category: 'tech'
tags:
  - coding
  - deployments
  - code
  - dev
  - github
  - dev tools
  - git
---

I'm switching from the [GitHub Pages](https://pages.github.com/) to [Zeit Now](https://zeit.co/) static deployments for this blog. Here's my blog source code https://github.com/alexandr-g/alex-blog so you can look it up if you're curious.

## My GitHub Pages config:

<a href="https://imgur.com/17sWgT8"><img src="https://i.imgur.com/17sWgT8l.png" title="source: imgur.com" /></a>

[GitHub Pages](https://pages.github.com/) - is a well-known way to host your static websites and it's working well, it supports custom domains.

My blog is running on it with Gatsby right now. Configuring some DNS magic with [Cloudflare](https://www.cloudflare.com/) I have support for the **https://** on it which is nice.

<a href="https://imgur.com/AsQ1xcr"><img src="https://i.imgur.com/AsQ1xcrl.png" title="source: imgur.com" /></a>

## Release workflow

However, **the pain** is that whenever I need to deploy/release a new article I'm going through the same actions:

1. Create a branch, write a blog post
2. Commit and push to the GitHub
3. Even if I push to the `master` branch nothing happens until I manually run the npm script
4. **To release** a new version I need to run a special npm script locally, which creates a production bundle, prefixes paths for articles and publishes the update to the GitHub Pages.

```javascript
yarn build:gh
```

<a href="https://imgur.com/ZXUKTfA"><img src="https://i.imgur.com/ZXUKTfAl.png" title="source: imgur.com" /></a>

Only then, after some time, the new blog post appears on the website.

What I want instead is that every change that merged to the `master` branch be deployed to production automatically leveraging the continues delivery so step #4 becomes completely automated and obsolete.

That's what [Zeit Now](https://zeit.co/) is doing. In the previous article, I showed how to configure **Now** to deploy every commit and branch in your repository.
