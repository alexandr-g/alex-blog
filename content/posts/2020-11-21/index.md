---
title: 'AWS CLI fatal error: An error occurred (SignatureDoesNotMatch) when calling the ListObjectsV2 operation'
date: '2020-11-21'
author: 'alex'
category: 'tech'
tags:
  - coding
  - dev
  - devtools
  - react
  - devops
  - itops
  - aws
  - cloud
  - cloud computing
  - aws cli
  - amazon
  - ci
  - gitlab ci
  - ci pipelines
  - docker
  - aws-cli s3 sync
  - aws s3
---

Cna you ever imagine that having `+` or `/` in your **private** AWS keys will cause an issue for you? Read on.

## Working with AWS CLI v2

That happened to me on CI when I was implementing upload of the config files (you might think of some `.json` files) to the S3 bucket using official AWS CLI in Docker.

> `amazon/aws-cli` is an identifier of the official amazon image from Docker Hub with the most updated version of AWS CLI installed. Find out more about available command of the CLI here [amazon/aws-cli](https://github.com/aws/aws-cli).

Everything was working well **locally**, well, you know "works on my machine"™ until on CI. I used `amazon/aws-cli s3 sync` command and checked uploaded files via [Cyberduck](https://cyberduck.io/).

```bash
amazon/aws-cli s3 sync --delete /app/some-app s3://my-bucket-some-app
```

When [I created GitLab CI/CD pipeline](https://grischuk.de/how-to-upload-files-to-aws-s-3-bucket-using-official-docker-image-and-amazon-aws-cli-s-3-sync-with-git-lab-ci) to do the same on the CI the job is suddenly failed.

## fatal error: An error occurred (SignatureDoesNotMatch) when calling the ListObjectsV2 operation

You might think huh… what? Having `+` or `/` characters in your AWS credentials might break your interaction with AWS CLI

Yeah, I know... so stupid but this issue exists for _6 years_ already. Read more about it on the official `amazon/aws-cli` Github repo: [SignatureDoesNotMatch error #602](https://github.com/aws/aws-cli/issues/602).

It took me some time **to convince Lead DevOps** that this is a **real issue with secret keys...**

> fatal error: An error occurred (SignatureDoesNotMatch) when calling the ListObjectsV2 operation: The request signature we calculated does not match the signature you provided. Check your key and signing method.

From what I read in the issue it usually fails on CI (CircleCI and so on). From the issue description:

> This has to be one of the most frustrating bugs I have encountered and it’s nuts that it hasn’t been fixed. Getting a cred without a “+” worked for me in CircleCI.

## Solution

Re-generating **secret keys** worked like a charm and the job became green. So, be patient and check your secret keys first if you'll see this error around 😉

## Conclusion

You might have a logical question why would AWS continue to generate secret keys with `+` or `/` knowing that this might potentially cause some issues? I don't know. I could imagine that AWS has so many tools and services that it is hard to follow and fix everything.
