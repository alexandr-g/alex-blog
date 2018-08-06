---
title: "Visual Studio Code (VSCode) extensions that I use daily"
cover: "https://images.unsplash.com/photo-1516101922849-2bf0be616449?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2845bb75e81dbda93a0d20726bd7759&auto=format&fit=crop&w=2600&q=80"
date: "2018-08-06"
author: "alex"
category: "tech"
tags:
    - javascript
    - vscode
    - react
    - code snippets
---

I've been using different IDE and text editors during my career as a Software Developer and that's definitely topic for another blog post but in today's article, I want to talk about VSCode extensions which I found helpful.

## Must have VSCode extensions

All titles below are clickable so you'll be redirected to the official visual studio marketplace

### **[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)**

```bash
Package name: streetsidesoftware.code-spell-checker

Author: Street Side Software
```

I think everyone would agree that spending time fixing typos is not what we want to do as developers. That’s where Code Spell Checker comes in place. It highlights typos directly in your IDE and offers suggestions for fixes. Also, you can ignore in your settings some words which it can't recognize:

```js
"cSpell.ignoreWords": [
    "lifecycle",
    "mixins"
  ],
```

### **[Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)**

```bash
Package name: flowtype.flow-for-vscode

Author: flowtype
```

Really helpful for React application with Flow to enforce Flow types. This extension helps to utilize full power on Flow, similar to ESLint it will highlight type errors in red.
Also, I found this extension more suitable for bit projects than (vscode-flow-ide
gcazaciuc.vscode-flow-ide) this extension was dramatically slowing down my IDE almost to the level when I can't type anymore.

### **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**

```bash
Package name: dbaeumer.vscode-eslint

Author: Dirk Baeumer
```

> Integrates ESLint into VS Code. If you are new to ESLint check the [documentation](https://eslint.org/).

Must have when linting your projects. For example, it will highlight unused variables and imports. Also, it will pick up your ESLint config and enforce rules that you configured.

### **[JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)**

```bash
Package name: xabikos.javascriptsnippets

Author: Charalampos Karypidis
```

> Code snippets for JavaScript in ES6 syntax

I rarely use this for ES6 snippets. For example: quickly define a new class-based component for React. In general, I prefer custom snippets.

### **[Material Icon Theme](pkief.material-icon-theme)**

```bash
Package name: pkief.material-icon-theme

Author: Philipp Kief
```

Rather a visual one. Makes it better to differentiate files by providing beautiful icons.

### **[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**

```bash
Package name: esbenp.prettier-vscode

Author: Esben Petersen
```

> VS Code package to format your JavaScript / TypeScript / CSS using Prettier

Formats your code on saving following pre-defined rules so you do not need to care about formatting issues anymore. Coding style is unified within a team and enforced by Prettier

### **[Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)**

```bash
Package name: wallabyjs.quokka-vscode

Author: Wallaby.js
```

> Live Scratchpad for JavaScript.

JavaScript playground. If you want to draft some solution to a problem or verify some idea you can code it in this interactive environment right in your IDE. It also supports imports from different libs (for example lodash).
