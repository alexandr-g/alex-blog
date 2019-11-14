---
title: "How to configure automated deployments for every branch/commit with Zeit now"
date: "2019-11-15"
author: "alex"
category: "tech"
tags:
    - coding
    - infrastructure
    - code
    - dev
    - github
    - dev tools
    - git
    - automated deployments
    - deploy
    - zeit now
    - continuous delivery
---

You know the drill. A colleague asks you for review and functional testing, of course, is a part of it, you go to the PR, grab branch name, checkout that branch locally, build client again (hopefully, you're using webpack HMR).

You need to spin up backend as well because your frontend doesn’t work without it. Okay, what about the review? You spend already some time just preparing for the review.
Imagine all the possible build errors, database misconfigurations and waiting for `yarn install` or `npm i` to complete on the way 🙈

Why should it be so painful and time-consuming?

Imagine, being able effortlessly to do functional testing/review just by visiting some URL automatically posted on the PR, without checking out branch locally, starting a server, etc. Well, it is possible with Zeit Now.

> Our [Now](https://zeit.co/home) platform enables you to deploy modern websites and applications without needing any complicated server configuration. Not only do we automatically configure DNS records for your domain, we also instantly issue and renew free wildcard SSL certificates, completely hands-free.

## How to configure automated deployments for your repo?

**Prerequisites:** You should have a GitHub account.

## Step 1. Install Zeit Now from the GitHub Marketplace

Go to https://github.com/apps/now GitHub App and click on _Install Now_ or _Configure_ if you have already added it to your account.

<a href="https://imgur.com/IFRGsJ8"><img src="https://i.imgur.com/IFRGsJ8.png" title="source: imgur.com" /></a>

**Select an account** for which you want to configure. You can install GitHub apps for the whole organization's scope.

<a href="https://imgur.com/xrZ1wJ7"><img src="https://i.imgur.com/xrZ1wJ7.png" title="source: imgur.com" /></a>

You will be redirected to **Now** configuration page:

<a href="https://imgur.com/She0YBQ"><img src="https://i.imgur.com/She0YBQ.png" title="source: imgur.com" /></a>

## Step 2. Activate Zeit Now for a specific repository

_If you haven't been redirected automatically in the step 1_
Go the **Personal settings** on GitHub find **Applications** tab where you can find the **Now** application and click on the **Configure** button at the right.

When the new page loads scroll down to the bottom. Here you can see an overview of the permissions and **repository access**.

There are two options configure **Now** for **All repositories** and for **Only selected repositories**. Select **Only selected repositories** and find your repository for which you want to configure automated updates from the dropdown. Mine is called `alex-blog` in my case.

## Step 3. That's it!

From now on **Now** is activated on your repository and you'll start seeing each comments from the `now` bot on the PR with deployed URLs:

<a href="https://imgur.com/fhcqON0"><img src="https://i.imgur.com/fhcqON0.png" title="source: imgur.com" /></a>

To open your current app deployment click on the **Preview** link from `now` bot comment.

<a href="https://imgur.com/62j2qhQ"><img src="https://i.imgur.com/62j2qhQ.png" title="source: imgur.com" /></a>

## Investigate Now deployments

Another thing you'll notice is automatic GitHub checks from **Commits** tab on `master` for example.

<a href="https://imgur.com/vXJKkGN"><img src="https://i.imgur.com/vXJKkGN.png" title="source: imgur.com" /></a>

You can click on **Details** next to _Deployment has completed_ message and investigate deployment details on the Now dashboard.

<a href="https://imgur.com/POPRJzC"><img src="https://i.imgur.com/POPRJzC.png" title="source: imgur.com" /></a>

**Note:** you might need to sign up with your GitHub user to the Now service if you haven't done this before.

## Advantages

* Free automatic deployments
* Push to deploy- it's that easy
* **GitHub** and **GitLab** integrations
* Easy to set up - Zero config
* HTTPS and SSL out of the box
* Deploy anything really
* Enabling developers
* Support for custom domains
