---
title: 'Migrating tasks and notes from Wunderlist to Joplin'
date: '2020-04-09'
author: 'alex'
category: 'tech'
tags:
  - coding
  - es6
  - javascript
  - dev
  - devtools
  - react
  - todo
  - todo app
  - notes
  - wunderlist
  - microsoft
  - microsoft to do
  - list app
  - productivity
  - migration
  - joplin
---

As a software developer living in Berlin, I like to support awesome apps, companies, and products developed here. I was an early adopter of N26(until they canceled my account), [Blinkist](https://grischuk.de/overview-of-one-year-using-blinkist-premium-reading-app) and Wunderlist. Until recent.

For those of you who don't know [Wunderlist](https://www.wunderlist.com/) is a **To-do list**, Reminders, Errands app with the support of multiple platforms, from the web to mobile.

[Wundeslist](https://www.wunderlist.com/) was an awesome product, fast and simple. It becomes essential for me on day-to-day use. It was working perfectly for me.

## Backstory

As it happens to many awesome products Microsoft Corporation bought the Wunderlist app. And they decided to use the Wunderlist team to build their own [Microsoft To Do](https://todo.microsoft.com/tasks/) app.

What's is sad about that? Well, _two things_:

- Wunderlist will be shut down on May 6, 2020
- MS killed another awesome product

<img src="https://i.imgur.com/l4EdzjE.png" width="710" />

## Okay, what to do

In this article, I'll describe how to gain control of your data back and not feeding big-name corporations with it. More precisely, exporting your data(tasks) from Wunderlist and setting up a free, open-source and self-hosted solution for your notes and todos.

A lot of people might switch directly to the "new" Microsoft To Do app and that's completely fine. In my opinion, Microsoft To Do is not even close to Wunderlist and they even made some things worse with it. It's doesn't look like an app I would love to use daily for multiple reasons. You need MS account, you don't own or control your data and you don't know how it's been used or handled.

If you're like me read further.

As an engineer, I always was interested in the _open source_, _cloud_ and **security**.

There is a solution to this.

## Introducing [Joplin](https://joplinapp.org/)

> **[Joplin](https://joplinapp.org/)** is a **free**, **open source note taking and to-do application**, which can handle a large number of notes organised into notebooks. The notes are **searchable**, can be copied, tagged and modified either from the applications directly or from your own text editor. The notes are in **Markdown** format.

<img src="https://i.imgur.com/hHDLhYv.png" width="710" />

When I found that it exists I couldn't believe it. THIS IS SO AMAZING!

Before jumping in and setting up Joplin, let's export out existing data from Wunderlist.

## Step 1. Export your data from Wunderlist

Navigate to the https://export.wunderlist.com and export all your
data. Log in with your Wunderlist account and wait for the download to complete. You will get a **zip-file**.

## Step 2. Convert the Wunderlist export to a Joplin import format

I used this [Wunderlist2Joplin](https://github.com/eschlot/Wunderlist2Joplin) Python script to convert Wunderlist export to a Joplin import format. Follow instructions from the above-mentioned repository. They're pretty clear.

- Make sure to have _Python 3_ on your machine
- I had to install `dateutil` library before the script could work

You can install `dateutil` by running in the terminal:

```py
pip install python-dateutil

# or if your default version of python is <= 2.x.x

pip3 install python-dateutil
```

If you installed Python with `brew` you can check which version do you have by running

```bash
brew info python
```

## Step 3. Import converted raw data to Joplin

Import the output in Joplin via ‘File’ > ‘Import’ > ‘Raw Joplin Export Directory’. The result is a notebook Wunderlist Import with the same tree structure as your Wunderlist data, with the tasks as leaves, i.e. notes of the type to-do.

Rearrange the material as you wish. Tidy up the data.

One thing to mention it will export also all of your completed tasks.

## Step 4. Enable End-to-end encryption for your notes

A nice thing is that Joplin supports End-to-end encryption of your notes so it will be transmitted in the encrypted state over the internet. It is encrypted with the password you choose, so-called Master Password and only you can decrypt the notes using and knowing the Master Password.

You need to activate End-to-end encryption in the Joplin. Navigate to "Preferences" => "Encryption". Activate it and give your password.

## Step 5. Synchronize notes

Now, the final step. Your data will be synchronized to the cloud encrypted with your master password.

With Joplin, you can choose multiple synchronization options for your data.

> The notes can be synchronised with various cloud services including [Nextcloud](https://nextcloud.com/), Dropbox, OneDrive, WebDAV or the file system (for example with a network directory)

I will use the default **DropBox folder** option.

Click on the "Synchronise" button at the bottom left of the Joplin Desktop application to initialize the sync process. Authorize Joplin on your dropbox following the instructions. I'd recommend initializing the sync process from the desktop app.

Sync process might take a while, it depends on how many items do you have in your lists. I'd recommend waiting and try do not interrupt it.

## Step 6. Accessing notes from multiple devices on mobile and different machines

I'd recommend to **start sync** on the following devices **only after** the initial sync from your desktop app is done. This way you'll avoid conflicts. Do not rush and create on each new device its master password. Wait until initial sync is done, only then start to sync the second device and on the second device do not create **any** new master passwords! You have one already. That's enough.

If your notes **are encrypted** you'll need to wait until **initial** data sync is done and on a second device you will see a message "Press to set the decryption password. Click on that message and enter your master password to decrypt the notes.

<img src="https://i.imgur.com/9hRbZJ8.jpg" width="250" />

This is how the Joplin app folder looks on the dropbox

<img src="https://i.imgur.com/9wzaJ45.png" width="710" />

This is how encrypted note stored in the dropbox (.md file)

<img src="https://i.imgur.com/yK4C1jm.png" width="710" />

### Joplin Advantages

- Fee
- Open source
- Fast
- Sync capabilities to your own cloud (or services like DropBox)
- Accessible anywhere. Desktop, mobile, cross-platform support
- End-to-end encryption for your notes
- Supports Markdown

Enjoy the control of your data :)
