# LTI Medialabs UI

## Table of Contents
- [LTI Medialabs UI](#lti-medialabs-ui)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Authentication Workflow](#authentication-workflow)
  - [Git Workflow](#git-workflow)
    - [1. Create a new branch for development of each feature](#1-create-a-new-branch-for-development-of-each-feature)
    - [2. Commit code to newly created branch](#2-commit-code-to-newly-created-branch)
    - [3. Merge code in `develop` branch](#3-merge-code-in-develop-branch)
    - [4. In case where `.gitignore` fails to ignore specified files](#4-in-case-where-gitignore-fails-to-ignore-specified-files)
  - [IDE Details](#ide-details)
  - [A note on `CHANGELOG.md`](#a-note-on-changelogmd)

## Project Structure

```
client
╠═ src
║  ╠═ app
║  ║  ╠═ * --------------------------------- | * refers to single module
║  ║  ║  ╠═ components
║  ║  ║  ║  ╚═ ... ------------------------- | container components
║  ║  ║  ║     ╚═ ... ---------------------- | presentational components
║  ║  ║  ║        ╚═ ... ------------------- | sub-presentational components (only if present-
║  ║  ║  ║                                   | ational component is sufficiently complicated)
║  ║  ║  ╠═ models
║  ║  ║  ║  ╚═ ...
║  ║  ║  ╠═ services
║  ║  ║  ║  ╠═ ...
║  ║  ║  ║  ╚═ core ------------------------ | data service
║  ║  ║  ╠═ state
║  ║  ║  ║  ╠═ actions
║  ║  ║  ║  ╠═ effects
║  ║  ║  ║  ║  ╠═ ... 
║  ║  ║  ║  ║  ╚═ index.ts ----------------- | array of effects
║  ║  ║  ║  ╠═ reducers
║  ║  ║  ║  ╠═ selectors
║  ║  ║  ║  ╠═ types
║  ║  ║  ║  ║  ╠═ ... ---------------------- | action string enums
║  ║  ║  ║  ║  ╚═ index.ts ----------------- | non-action string enums
║  ║  ║  ║  ╚═ index.ts -------------------- | feature state declaration
║  ║  ║  ╠═ *-routing.module.ts
║  ║  ║  ╠═ *.module.ts
║  ║  ║  ╚═ *.routes.ts
║  ║  ╠═ shared ---------------------------- | everything prefixed `app-`
║  ║  ║  ╠═ components --------------------- | most commonly used components
║  ║  ║  ║  ╚═ ...
║  ║  ║  ║     ╚═ ...
║  ║  ║  ╠═ facade
║  ║  ║  ║  ╠═ interceptors
║  ║  ║  ║  ╚═ services -------------------- | most commonly used services
║  ║  ║  ╠═ models ------------------------- | most commonly used models
║  ║  ║  ╠═ modules ------------------------ | third party modules
║  ║  ║  ╠═ state
║  ║  ║  ║  ╠═ app-state.module.ts --------- | global state module
║  ║  ║  ║  ╚═ index.ts -------------------- | global state declaration
║  ║  ║  ╠═ util --------------------------- | most commonly used utility functions
║  ║  ║  ╚═ app-shared.module.ts
║  ║  ╠═ app-routing.module.ts
║  ║  ╠═ app.component.ts
║  ║  ╠═ app.component.spec.ts
║  ║  ╠═ app.module.ts
║  ║  ╚═ app.routes.ts
║  ╠═ assets
║  ╠═ environments
║  ╠═ index.html
║  ╚═ styles.scss
║
╠═ angular.json ---------------------------- | `outputPath` is changes from `dist` to `public`
║
╠═ tsconfig.base.json ---------------------- | Modified paths for cleaner import statements
║
║ ------------------------------------------ | Deployment specific files
║                                            | Do not make changes unless necessary
║
╠═ nginx.conf
╠═ Dockerfile
╚═ .dockerignore
```

## Authentication Workflow

|                                       Login                                        |                                        Signup                                        |
| :--------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: |
| ![alt text](../documents/CHANGELOG/2020-08/assets/login-flow.svg "Login Workflow") | ![alt text](../documents/CHANGELOG/2020-08/assets/signup-flow.svg "Signup Workflow") |

*Images generated using [Mermaid](https://mermaid-js.github.io/mermaid-live-editor/)*

##  Git Workflow

### 1. Create a new branch for development of each feature

- Create a new branch from `develop` and set upstream to [GitHub](https://github.com/LTIMedialab/medialab-ui/)

```bash
git fetch
git checkout -b <branch_name> develop
git push -u origin <branch_name>
```

### 2. Commit code to newly created branch

- Develop the code
- Modify `CHANGELOG.md` accordingly
- Commit to the local branch

```bash
git commit -m <commit_message>
```

- Get the latest code from existing `develop` branch

```bash
git pull origin develop
```

- Resolve merge conflicts if any
- Commit when conflicts resolved

```bash
# Merge into https://remote-url from branch <branch_name>
git commit -m <default_commit_message>
```

- Push to feature branch

```bash
git push
```

### 3. Merge code in `develop` branch

1. Creating Pull Request
   - `New Pull Request` from [here](https://github.com/LTIMedialab/medialab-ui/pulls)
   - Verify code changes
   - Mention Reviewers
   - Leave a suitable message
   - Done

Merging the code directly into develop *(not recommended)*

```bash
git checkout develop
git merge origin/<branch_name>
git push
```

### 4. In case where `.gitignore` fails to ignore specified files

This step shall be executed only if any changes made in `.gitignore` do not reflect in the working directory

1. Clean cache of git
2. Add all the files again
3. Commit changes

```bash
git rm -rf --cached .
git add .
git commit -m <commit_message>
```

- Executing this command would clean cache of git in local directory
- This method is promised to work like a freshly cloned repository

> All hail [Linus Torvald](https://github.com/torvalds)!!

##  IDE Details

Microsoft VS Code latest version

| Extension Name           | Publisher                         | Use                                                                     |
| ------------------------ | --------------------------------- | ----------------------------------------------------------------------- |
| Angular Language Service | `Angular.ng-template`             | Essential extension to highlight Angular related errors in the code     |
| Better Comments          | `aaron-bond.better-comments`      | Properly format and style comments in code                              |
| Cloud Code               | `googlecloudtools.cloudcode`      | Integration with Google Cloud Kubernetes Engine and APIs                |
| DocumentThis             | `oouo-diogo-perdiago.docthis`     | Generate documentation of functions                                     |
| GitLens                  | `eamodio.gitlens`                 | Keep a track of all the activities in repository                        |
| Import Cost              | `wix.vscode-import-cost`          | Use lightweight imports wherever possible                               |
| Markdown All In One      | `yzhang.markdown-all-in-one`      | Format Markdown files in a seamless way                                 |
| SCSS Formatter           | `sibiraj-s.vscode-scss-formatter` | Because VS Code does not provide a default formatter for `*.scss` files |
| Docker                   | `ms-azuretools.vscode-docker`     | Docker for VS Code (disabled for now)                                   |

## A note on `CHANGELOG.md`

- Update `CHANGELOG.md` of the monthly folder before committing any changes
- Nomenclature of commit shall be as follows: 
```
<emoji>: <github-username>-medialab-<commit-number>-<branch-name>
```
- ~~Create a heading in `CHANGELOG.md` for each commit~~
  - ~~Heading does not have an emoji~~
  - ~~Specify the emoji on the next line following `Type: <emoji>`~~
- Increase the commit number sequentially for each branch
- Provide a detailed description of all the files committed in [Trello Board](https://trello.com/b/MJPUu1mT)
  - If several files perform single action, describe the action in detail
- Provide separate front-end and back-end descriptions in a commit
- Update workflow diagram if any
- Follow the [Github convention](https://gist.github.com/parmentf/035de27d6ed1dce0b36a) for commit type emojis
- Remember to attach commit to the weekly CHANGELOG card in Trello
