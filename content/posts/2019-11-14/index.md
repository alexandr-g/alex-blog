---
title: 'How to delete GitHub branches automatically after merge by default'
date: '2019-11-14'
author: 'alex'
category: 'tech'
tags:
  - coding
  - open source
  - code
  - dev
  - github
  - dev tools
  - git
---

I saw a lot of big projects/repositories with hundreds or even thousands of stale branches where nothing really happens.
Usually, no one cares to clean up all this mess. There is a nice simple GitHub tweak where you can prevent this.

## Automatically delete merged branches

Github branches can be automatically deleted after press on the merge button.

You need to be a **repository admin**:

1.  Navigate to repository **Settings**

<img src="https://i.imgur.com/gICbc6V.png" width="710" />

2.  Scroll down to the **"Merge button"** section
3.  Activate **Automatically delete head branches** checkbox
    [img]https://i.imgur.com/Tek0MBm.png[/img]

<img src="https://i.imgur.com/Tek0MBm.png" width="710" />

If you’re merged something accidentally and want your branch back? Don't worry, you'll be able to restore deleted branched.
