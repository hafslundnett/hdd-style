---
name: Introduction
category: Getting started
---

> Hafslunds digital design system (**HDD**) is a common framework to keep the design consistent with the brand across project. The classes and naming follows the BECM convention. You can find more information about this in the [BECM](https://github.com/jeroenrinzema/BECM).

For every used front-end framework a separate 'components' library should be created. Listed below are the already existing libraries. If you want to add your library to this list, please create a pull request.

| Framework     | Version       | Repo          |
| ------------- | ------------- | ------------- |
| Angular 5.x | <a href="https://www.npmjs.com/package/@hafslundnett/hal-components" target="blank">![hal-components](https://img.shields.io/npm/v/@hafslundnett/hal-components.svg)</a> | <a href="https://github.com/hafslundnett/hal-components" target="blank">Github</a> |
| <a href="https://www.figma.com/file/bGrhst0owpGqOQzKbxMtkdz2/Designsystem-(Interne-applikasjoner" target="blank">Design document (Figma)</a> |

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

* `yarn`
* `yarn start`

This will open the styleguide in your browser and refresh on changes.

## Changelog

Please read the changelog [here](https://github.com/hafslundnett/blob/master/CHANGELOG.md) to keep up to date with breaking changes released with new updates. 