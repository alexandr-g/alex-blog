---
title: 'How to upload files to AWS S3 bucket using official Docker image and Amazon AWS CLI s3 sync with GitLab CI'
date: '2020-10-18'
author: 'alex'
category: 'tech'
tags:
  - coding
  - es6
  - javascript
  - dev
  - devtools
  - react
  - devops
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

One thing I really enjoy doing when I get a chance is to work on "DevOps-related" tasks at work or pet-projects. For example, building CI pipelines configurations from scratch(say 'hi' to YAML) using different Docker images, running apps in the [Docker](https://www.docker.com/) or [Kubernetes](https://kubernetes.io/).

I know a lot of developers hate these types of tasks but not me. For me, it's really refreshing and I'm always completing them with extra interest.

Getting something running in the cloud brings joy to me. I knew some developers who don't even understand where End-to-End(E2E) Cypress tests are running, or what is ESLint job and workers on CI or Flow checks. CI server is just a "magical" black box for them from where they get "green" light (checks) to merge pull requests. That's fine, I guess.

It could be even something simple, like uploading configuration files via the official AWS CLI using `amazon/aws-cli s3 sync` command to GitLab ...or any CI. It doesn't really matter what you're using, CircleCI or some other. I have experience of different sorts: from custom CI/Jenkins to fine-tuned CircleCI plans, GitHub Actions, GitLab CI, and so on.

## How to upload files to AWS S3 using amazon/aws-cli s3 sync command with GitLab CI

Today, we're going to take a look at how can we upload files(any files) using official AWS CLI from CI to an S3 bucket.

One of the real-world use cases that I'm working on right now that you might face in practical web development is consuming these files from your application **at a runtime**. Benefits from this method could be avoiding release cycle, in case of NPM JavaScript package - publishing these updates to NPM but rather consuming them directly after update, without need to reload. This technic is pretty popular when developing mobile apps and getting updates there without the need to re-publish application to the App Store (kinda React Native way of doing things).

## Create .gitlab-ci.yml

Everything that runs on the GitLab CI start configuration in the `.gitlab-ci.yml` file. Let's create it and configure it to run different jobs.

```yml
# .gitlab-ci.yml

stages:
  - verify
  - deploy

variables:
  BASE_REGISTRY_URL: '0123456.dkr.ecr.aws-region.amazonaws.com'
  DEPLOY_IMAGE_URL: 'amazon/aws-cli'

.auth: &auth
  before_script:
    - echo /custom-host/repository/npm-packages/:_authToken=${NPM_TOKEN} >> .npmrc

verify:
  <<: *auth
  stage: verify
  image: node:12
  except:
    - /^v\d+\.[1-9]\d*\.\d+/
  script:
    - yarn install
    - yarn lint
    - yarn prettier-ci
```

We are adding two stages:

- `verify` just to test pipeline, install dependencies, run linter and Prettier
- `deploy` is the most interesting part

`.auth` is used here to set `NPM_TOKEN` to our `.npmrc` because we require to install some private npm package for our project to build. This is totally an option and just to demonstrate the purpose.

Note a few things here, we are defining variables like `BASE_REGISTRY_URL` - that's our amazon registry and `DEPLOY_IMAGE_URL` is our Docker image that we want to use.

`amazon/aws-cli` is an identifier of the official amazon image from Docker Hub with the most updated version of AWS CLI installed. Find out more about available command of the CLI here [amazon/aws-cli](https://github.com/aws/aws-cli).

How to use or migrate to the official CLI you can read more in this article [Using the official AWS CLI version 2 Docker image](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-docker.html).

## Working on the deployment stage

`deploy` is the most interesting part. Let's say that we want to support multiple environments, like `dev_deploy` and `stage_deploy`, so we will add them:

```yml
# .gitlab-ci.yml

stages:
  - verify
  - deploy

variables:
  BASE_REGISTRY_URL: '0123456.dkr.ecr.aws-region.amazonaws.com'
  DEPLOY_IMAGE_URL: 'amazon/aws-cli'

.auth: &auth
  before_script:
    - echo /custom-host/repository/frontend/:_authToken=${NPM_TOKEN} >> .npmrc

verify:
  <<: *auth
  stage: verify
  image: node:12
  except:
    - /^v\d+\.[1-9]\d*\.\d+/
  script:
    - yarn install
    - yarn lint
    - yarn prettier-ci

dev_deploy:
  tags:
    - ci
  stage: deploy
  only:
    - master
  environment:
    name: dev
  script:
    - aws ecr get-login --region=eu-central-1 --no-include-email | bash
    - docker pull ${DEPLOY_IMAGE_URL}
    # prettier-ignore
    - >-
      docker run --rm
      -v $(pwd):/app
      -e "AWS_ACCESS_KEY_ID=${DEV_ACCESS_KEY_ID}"
      -e "AWS_SECRET_ACCESS_KEY=${DEV_SECRET_ACCESS_KEY}"
      -e "AWS_DEFAULT_REGION=eu-central-1"
      ${DEPLOY_IMAGE_URL} s3 sync --delete /app/dev s3://your-dev-bucket-name

stage_deploy:
  tags:
    - ci
  stage: deploy
  environment:
    name: stage
  only:
    - master
  script:
    - aws ecr get-login --region=eu-central-1 --no-include-email | bash
    - docker pull ${DEPLOY_IMAGE_URL}
    # prettier-ignore
    - >-
      docker run --rm
      -v $(pwd):/app
      -e "AWS_ACCESS_KEY_ID=${STAGE_ACCESS_KEY_ID}"
      -e "AWS_SECRET_ACCESS_KEY=${STAGE_SECRET_ACCESS_KEY}"
      -e "AWS_DEFAULT_REGION=eu-central-1"
      ${DEPLOY_IMAGE_URL} s3 sync --delete /app/stage s3://your-stage-bucket-name
```

This job will be executed on every merge to master/main branch. It will not run inside the merge/pull request.

```yml
only:
  - master
```

- `-e` for passing environments variables.

- `${DEV_ACCESS_KEY_ID}` and `${DEV_SECRET_ACCESS_KEY}` are variables with your AWS access key and secret. They are coming from the GitLab CI repository level => Setting => CI / CD => Variables. You can set new there or revel already sat at any time.

Ok, the key component here is the `amazon/aws-cli s3 sync --delete` is a command which invokes aws-cli bin with one of the services which is called `s3`, `s3` has sync command with `--delete` option which will copy files from current `/app/stage` folder to the AWS S3 bucket (target destination).

> By default, the aws sync command (see documentation) does not delete files. It simply copies new or modified files to the destination.
> Using the --delete option deletes files that exist in the destination but not in the source.

`s3://your-stage-bucket-name` is a path to your S3 bucket/storage. Note how it is conveniently starting with s3://. As you might notice for stage and dev I'm using different buckets of course.

## Conclusion

We set up GitLab CI pipeline with files are being copied to the S3 bucket from CI using official Docker image and Amazon CLI v2. That's it! Hope you found it helpful. Thanks :)
