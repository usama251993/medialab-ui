# LTI MediaLabs UI

## Table of Contents

- [LTI MediaLabs UI](#lti-medialabs-ui)
  - [Table of Contents](#table-of-contents)
  - [Running proxy server for Kubernetes](#running-proxy-server-for-kubernetes)
  - [Deployment on GCP](#deployment-on-gcp)

## Running proxy server for Kubernetes

Keep a command prompt continuously running

```bash
kubectl proxy
```

- Note that the remote could be accessed at `http://localhost:8001/` after running this command
- The URL endpoints in express must be changed before performing deployment

## Deployment on GCP

Run the below command in the root directory of project

```bash
skaffold run -n medialab
```

Angular UI would be hosted [here](http://http://35.223.103.42/) and Express web backend would be hosted [here](http://34.71.93.171:3000/)
