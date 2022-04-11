# LTI Medialabs UI

## Table of Contents
- [LTI Medialabs UI](#lti-medialabs-ui)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Git Workflow](#git-workflow)
    - [1. Create a new branch for development of each feature](#1-create-a-new-branch-for-development-of-each-feature)
    - [3. Commit code to newly created branch](#3-commit-code-to-newly-created-branch)
    - [4. Merge code in `develop` branch](#4-merge-code-in-develop-branch)
  - [A note on `CHANGELOG.md`](#a-note-on-changelogmd)

## Project Structure

```
server
╠═ config ---------------------------------- | Various configurations for express
║  ╠═ server
║  ╠═ killbill
║  ╚═ wso2
║
╠═ database -------------------------------- | Temporary
║
╠═ routes
║  ╠═ killbill
║  ║  ╠═ controller ------------------------ | Handles express routes
║  ║  ╚═ service --------------------------- | Makes axios call to remote server
║  ╠═ wso2
║  ║  ╠═ controller ------------------------ | Handles express routes
║  ║  ╚═ service --------------------------- | Makes axios call to remote server
║  ╚═ test --------------------------------- | 
║
╠═ index.html ------------------------------ | This file is served when empty route is fetched
║
╠═ index.js -------------------------------- | The express entry point
║
║ ------------------------------------------ | Deployment specific files - Do not make changes
╠═ Dockerfile
╚═ .dockerignore
```

##  Git Workflow

### 1. Create a new branch for development of each feature

- Create a new branch from `develop` and set upstream to [GitHub](https://github.com/LTIMedialab/medialab-ui/)
```
git fetch
git checkout -b <branch_name> develop
git push -u origin <branch_name>
```

### 3. Commit code to newly created branch

- Develop the code
- Modify `CHANGELOG.md` accordingly
- Commit to the local branch
```
git commit -m <commit_message>
```

- Get the latest code from existing `develop` branch
```
git pull origin develop
```

- Resolve merge conflicts if any
- Commit when conflicts resolved
```
# Merge into https://remote-url from branch <branch_name>
git commit -m <default_commit_message>
```

- Push to feature branch
```
git push
```

### 4. Merge code in `develop` branch

1. Creating Pull Request
   - `New Pull Request` from [here](https://github.com/LTIMedialab/medialab-ui/pulls)
   - Verify code changes
   - Mention Reviewers
   - Leave a suitable message
   - Done

Merging the code directly into develop *(not recommended)*
```
git checkout develop
git merge origin/<branch_name>
git push
```

All hail [Linus Torvald](https://github.com/torvalds)!!

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
