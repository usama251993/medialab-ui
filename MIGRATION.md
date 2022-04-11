# Guide to migrate a repository from one remote to other

## 1. Create a new repository at `newurl`

## 2. Set remote url of the existing repository to `newurl`

#### 2.1 List all the remote URLs

```
git remote -v
# The fetch and push URLs are displayed
# Both URLs must be the same
```

#### 2.2 Add the new URL

```
# Add the new URL
git remote set-url --add origin <newurl>
```

#### 2.3 Review URLs

```
git remote -v
# The fetch and push URLs are displayed
# Both URLs are different now
```

#### 2.4 Delete the `oldurl`

```
git remote set-url --delete origin <oldurl>
# This would automatically set the fetch and push URLs to the new URL
```

#### 2.5 Review URLs

```
git remote -v
# The fetch and push URLs are displayed
# Both URLs are same
```

#### 2.6 Set upstream for each branch separately

```
# for master branch
git checkout master
git push -u origin master

# for develop branch
git checkout develop
git push -u origin develop

# Do this for all the other branches
```
#### 2.7 URLs used in this migration

```
# oldurl = https://bitbucket.org/usama2519933/lti-medialabs-ui.git
# newurl = https://github.com/LTIMedialab/medialab-ui.git
```
