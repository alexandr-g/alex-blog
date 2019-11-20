# Scripts

### build production bundle

```bash
yarn build:prod
```

### serve app locally

```bash
yarn serve
```

### prefixes path for articles

```bash
yarn build:pp
```

### build prod, prefixes paths and publishes to github pages

```bash
yarn build:gh
```

## Build

### Local build

Local build is working on `node v10` otherwise errors with the `sharp` module.

```js
nvm use v10 // Now using node v10.15.2 (npm v6.4.1)
```
