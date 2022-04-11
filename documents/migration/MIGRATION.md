# Guide to migrate a repository from one remote to other

## Table of Contents
- [Guide to migrate a repository from one remote to other](#guide-to-migrate-a-repository-from-one-remote-to-other)
  - [Table of Contents](#table-of-contents)
  - [1. Prerequisites](#1-prerequisites)
  - [2. Migration Process](#2-migration-process)
      - [2.1 List all the remote URLs](#21-list-all-the-remote-urls)
      - [2.2 Add the `newURL`](#22-add-the-newurl)
      - [2.3 Review URLs](#23-review-urls)
      - [2.4 Delete the `oldURL`](#24-delete-the-oldurl)
      - [2.5 Review URLs](#25-review-urls)
      - [2.6 Set upstream for each branch separately](#26-set-upstream-for-each-branch-separately)
      - [2.7 URLs used in this migration](#27-urls-used-in-this-migration)

## 1. Prerequisites

This document must be followed only if the remote URL of the repository is changed from one website to another

In this case, the repository was originally present at `bitbucket.com` and it was desired to be migrated to `github.com` with all the commits preserved

## 2. Migration Process

#### 2.1 List all the remote URLs

```bash
# The fetch and push URLs
git remote -v
# Both URLs must be the same
```

#### 2.2 Add the `newURL`

```bash
# Add the newURL
git remote set-url --add origin <newURL>
```

#### 2.3 Review URLs

```bash
# The fetch and push URLs
git remote -v
# Both URLs are different now
```

#### 2.4 Delete the `oldURL`

```bash
# This would automatically set the fetch and push URLs to the newURL
git remote set-url --delete origin <oldURL>
```

#### 2.5 Review URLs

```bash
# The fetch and push URLs
git remote -v
# Both URLs are same
```

#### 2.6 Set upstream for each branch separately

```bash
# for master branch
git checkout master
git push -u origin master

# for develop branch
git checkout develop
git push -u origin develop

# Do this for all the other branches
```
#### 2.7 URLs used in this migration

```bash
# oldURL = https://bitbucket.org/usama2519933/lti-medialabs-ui.git
# newURL = https://github.com/LTIMedialab/medialab-ui.git
```
