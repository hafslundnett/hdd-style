---
name: Introduction
category: Getting started
---

> Hafslunds digital design system (**HDD**) is a common framework to keep the design consistent with the brand across project. The classes and naming follows the BECM convention. You can find more information about this in the [wiki](https://github.com/hafslundnett/hdd-style/wiki/Naming-guidelines).

For every used front-end framework a separate 'components' library should be created. Listed below are the already existing libraries. If you want to add your library to this list, please create a pull request.

| Framework     | Version       | Repo          |
| ------------- | ------------- | ------------- |
| Angular 5.x | [![hdd-ng-components](https://img.shields.io/npm/v/@hafslundnett/hdd-ng-components.svg)](https://www.npmjs.com/package/@hafslundnett/hdd-ng-components)  | [Github](https://www.npmjs.com/package/@hafslundnett/hdd-ng-components) |
| Vue 2.x | [![hdd-vue](https://img.shields.io/npm/v/@hafslundnett/hdd-vue.svg)](https://www.npmjs.com/package/@hafslundnett/hdd-vue) | [Github](https://www.npmjs.com/package/@hafslundnett/hdd-vue) | 

[Design document (Figma](https://www.figma.com/file/bGrhst0owpGqOQzKbxMtkdz2/Designsystem-(Interne-applikasjoner))

## Getting started

There are multiple ways of using HDD:
* Cloning the git repository: `git clone git@github.com:hafslundnett/hdd-style.git`
* Add it as an npm dependency: `npm install @hafslundnett/hdd-style`
  * Import main.sass in your stylesheet: `@import '~@hafslundnett/hdd-style/main';`
  * Use the bundled and minified file: `dist/bundle.min.css`


## Contribute
Do you wish to change, remove or add something? Please read our [contribution guide](./CONTRIBUTING.md) and [code of conduct](./CODE_OF_CONDUCT.md). Check for related open issues, and if none exist please open a new one: [Github Issues](https://github.com/hafslundnett/hdd-style/issues/new).

## Open the styleguide locally

In order to get started you will need to have `node` and `npm` installed. You can get it at https://nodejs.org. When those are installed run:

* `npm install`
* `npm start`

This will open the styleguide in your browser and refresh on changes.