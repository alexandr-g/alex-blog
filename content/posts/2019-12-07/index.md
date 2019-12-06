---
title: 'Measure performance of the app on every push with Lighthouse CI GitHub Action'
date: '2019-12-07'
author: 'alex'
category: 'tech'
tags:
  - js
  - javascript
  - lighthouse
  - lighthouse ci
  - page performance
  - lighthouse audit
---

In this article we're going to create GitHub Action witch is generating Lighthouse on every push. The goal is to measure, analyze and improve your page performance (initial load, accessibility, usage of best practices, SEO and PWA).

# Lighthouse

> Lighthouse is an open-source, automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO and more.

Lighthouse been here for a while and now it is even built-in Google Chrome Dev Tools under "Audits" tab:

<img src="https://i.imgur.com/0yawYK3.png" width='710' />

you can do performance audits using Google Chrome Dev Tools on `https://localhost:<port>` but that's not what we are really interested.

We want to measure performance development after each push and commit to remote repository.

## Lighthouse CI Action

[GitHub Actions](https://github.com/features/actions) is a powerful way to automate different sort of tasks and they live close to your source if you're using GitHub which is super handy.

> We're going to create the most basic example: run Lighthouse on each push to the repo and save results as action artifacts.

Create `.github/workflows/lighthouse.yml` with the list of URLs to audit using Lighthouse. The results will be stored as a build artifact:

```yml
name: Lighthouse
on: push
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - name: Audit URLs using Lighthouse
        uses: treosh/lighthouse-ci-action@v2
        with:
          urls: |
            https://<your_web_site>/
            https://<your_web_site>/page2
      - name: Save results
        uses: actions/upload-artifact@v1
        with:
          name: lighthouse-results
          path: '.lighthouseci' # This will save the Lighthouse results as .json files
```

Create PR with your changes.

<img src="https://i.imgur.com/yafYT0U.png" width="710" />

## Lighthouse CI Action overview

<img src="https://i.imgur.com/GapcacI.png" width="710" />

You will see a new check on your PR created from action click on the "Details" link.

<img src='https://i.imgur.com/YvDy1DU.png' width="710" />

That will open "Actions" tab with your action details. Here you can see the steps name that you specified in the `.yml` config and some log/debug data.

<img src="https://i.imgur.com/szd6uq7.png" width="710" />

In the right corner you'll find "Artifacts". This is the output from your GitHub Action which is generated Lighthouse report in `report_name.json` format. Download it.

## Lighthouse Report Viewer

All we left to do is upload downloaded `report_name.json` file to the Lighthouse Report Viewer.

Github Action output is a `report_name.json` file as a build artifact, we can download produced artifact and analyze it with [Lighthouse Report Viewer](https://googlechrome.github.io/lighthouse/viewer/).

Navigate to the [Lighthouse Report Viewer](https://googlechrome.github.io/lighthouse/viewer/) and upload it to view it (similar to WEBPACK VISUALIZER).

Here's how the report will look like:

<img src="https://i.imgur.com/O0jSeM4.png" width="710" />

You can advance even further and analyze on every now deployment and not only against static `url` definitions. I'm describing [How to configure automated deployments for every branch/commit with Zeit now.](https://grischuk.de/how-to-configure-automated-deployments-for-every-branch-commit-with-zeit-now)

## References

- [Learning Lighthouse CI from scratch with a minimal template web app (quickstart)](https://github.com/hchiam/learning-lighthouse-ci)

- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/getting-started.md#the-lighthouse-ci-server)
