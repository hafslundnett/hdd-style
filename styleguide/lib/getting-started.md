---
name: Hafslunds digital design system
category: Introduction
---

> Hafslunds digital design system (**HDD**) is a common framework to keep the design consistent with the brand across project. The classes and naming follows the BECM convention. You can find more information about this in the [wiki](https://github.com/hafslundnett/hdd-style/wiki/Naming-guidelines)

## Getting started

There are multiple ways of using HDD:
* Cloning the git repository: `git clone git@github.com:hafslundnett/hdd-style.git`
* Add it as an npm dependency: `npm install @hafslundnett/hdd-style`
  * Import main.sass in your stylesheet: `@import '~@hafslundnett/hdd-style/main';`
  * Use the bundled and minified file: `dist/bundle.min.css`
* **TBD**: Add a link tag in your `<head>` tag and refer to our CDN: `<link rel="stylesheet" href="https://cdn.com/hdd/latest/bundle.min.css">`



## Contribute
Do you wish to change, remove or add something? Please read our [contribution guide](./CONTRIBUTING.md) and [code of conduct](./CODE_OF_CONDUCT.md). Check for related open issues, and if none exist please open a new one: [Github Issues](https://github.com/hafslundnett/hdd-style/issues/new).

## Open the styleguide locally

In order to get started you will need to have `node` and `npm` installed. You can get it at https://nodejs.org. When those are installed run:

* `npm install`
* `npm start`

This will open the styleguide in your browser and refresh on changes.