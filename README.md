# LTI MediaLabs UI

## Table of Contents

- [LTI MediaLabs UI](#lti-medialabs-ui)
  - [Table of Contents](#table-of-contents)
  - [`develop`, `feature` and `bugfix` branch](#develop-feature-and-bugfix-branch)
  - [`deploy` branch](#deploy-branch)
  - [Deploy on GCP](#deploy-on-gcp)
- [Refer `DEPLOYMENT.md` for step by step deployment instructions](#refer-deploymentmd-for-step-by-step-deployment-instructions)
  - [A note on commits](#a-note-on-commits)

## `develop`, `feature` and `bugfix` branch

**Front End**
1. Web front end for MediaLabs UI is programmed using Angular 10
2. Redux pattern is in use, thanks to `ngRx` library

**Back End**
1. Web back end for MediaLabs UI is programmed using `NodeJS`
2. To handle routes in web back end, `express` is used

## `deploy` branch

**Front End**
1. Remember to build the application
   - Verify if the build is successful and there are no compile time errors

```bash
ng build
```

2. Analyze package sizes
   - This execution uses `webpack-bundle-analyzer` to provide an overview of build packages

```bash
npm run build:stats
npm run analyze

# Open http://localhost:8888/ to view complete analysis of the package sizes in the project
# Optimize wherever required
```

3. Build for production
   - This command would optimize the code, eliminate dead code, enable `aot` compilation and repack everything as `*.html` and `*.js` files

```bash
npm run build:prod
```

**Back End**

*No additional steps for build and analysis*

*The steps would be added when webpack implementation is complete*

## Deploy on GCP

Refer [`DEPLOYMENT.md`](./documents/deployment/DEPLOYMENT.md) for step by step deployment instructions

[Back to ToC](#table-of-contents)

## A note on commits

- Update `CHANGELOG.md` of the monthly folder before committing any changes
- Nomenclature of commit shall be as follows: 
```
<emoji>: <github-username>-medialab-<commit-number>-<branch-name>
```
- Create a heading in `CHANGELOG.md` for each commit
  - Heading does not have an emoji
  - Specify the emoji on the next line following `Type: <emoji>`
- Increase the commit number sequentially
- Provide a detailed description of all the files committed
  - If several files perform single action, describe the action in detail
- Provide separate front-end and back-end descriptions in a commit
- Update workflow diagram if any
- Follow the [Github convention](https://gist.github.com/parmentf/035de27d6ed1dce0b36a) for commit type emojis

[Back to ToC](#table-of-contents)
