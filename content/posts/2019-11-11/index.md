---
title: "🤖 How to configure Renovate - automated dependency updates for your project"
cover: ""
date: "2019-11-11"
author: "alex"
category: "tech"
tags: 
    - coding
    - open source
    - react
    - code
    - javascript
    - dev
    - dependencies updates
    - renovate
    - github
---

[Renovate](https://github.com/renovatebot/renovate) - is a tool that does automated dependency updates for your project and the nicest thing is that it's **free** for **public repositories**.

It will analyze your project dependencies and will create a new Pull Request (PR) with the individual dependency update. It is completely controllable so you wouldn't update something by accident that you don't want to update.

## Step 1. Install Renovate from GitHub Marketplace

Go to https://github.com/apps/renovate and click on _Install Now_ at the bottom of the page, select **"Open Source"** plan and you're done.

This will add **Renovate** to the list of installed applications on GitHub:

<img src="https://i.imgur.com/v0qMWVzl.png" title="source: imgur.com" />

## Step 2. Add Renovate to the specific repository

On the **Applications** page find **Renovate** and click on the **Configure** button at the right. When the new page opens scroll down to the bottom. Here you can see an overview of the permissions and **repository access** section.

There are two options configure **Renovate** for **All repositories** and for **Only selected repositories**. Select **Only selected repositories** and find your repository for which you want to configure automated updates from the dropdown. Mine is called `alex-blog` in this case.

<img src="https://i.imgur.com/GFW4789l.png" title="source: imgur.com" />

## Step 3. Configure Renovate inside your repository

After all the steps above you'll shortly receive a first pull request from Renovate bot which walks you through the configuration process.

<img src="https://i.imgur.com/cDLbiDTl.png" title="source: imgur.com" />

That PR will add `renovate.json` to your repository extending basic configuration for renovate. You can add custom configurations to this file later if you need them.

## Step 4. Carefully read and review the first renovate PR

After merging first renovate PR **Configure Renovate** you will start to receive **a lot of** automatic dependencies updates via pull requests. That's it, you’re done 🙂 Sit back relax, review and merge. Don't forget to do a functional test for your application with the new updates 😉
