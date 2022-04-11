# LTI MediaLabs UI

## Table of Contents

- [LTI MediaLabs UI](#lti-medialabs-ui)
  - [Table of Contents](#table-of-contents)
  - [Setup of Google Cloud SDK](#setup-of-google-cloud-sdk)
  - [Build and Test Angular and Express Locally (For Developers only)](#build-and-test-angular-and-express-locally-for-developers-only)
  - [Deployment on GCP](#deployment-on-gcp)
  - [Address List](#address-list)

## Setup of Google Cloud SDK

---

1. Prerequisites

- A Gmail account signed up using `lntinfotech.com` email address
- Install [Google Cloud SDK](https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe) as a single user
- Install `kubectl` component on `gcloud`
- Access to GCP Project
- `Terminal` / `Windows Command Prompt` / `Powershell`

```bash
# Code Block for Step 1

# Check installation of Google Cloud SDK
gcloud help # this shall return description of `gcloud` command

# Check if kubectl is installed
gcloud components list

# If kubectl is not installed
gcloud components install kubectl
```

---

2. Inititate `gcloud`

```bash
# Code Block for Step 2

# Initialize gcloud
# This command can be executed from anywhere
# Terminal does not need to be open in any specific directory to initialize gcloud
gcloud init

# This would open authentication web page
# Sign into it using your gmail account signed up using `lntinfotech.com` email address
# Select email ID
# Select GCP Project
# Select region as us-central1-c [7]
```

---

3. Check the configuration of `kubectl`

```bash
# Code Block for Step 3

# Check kubectl config
kubectl config view # detailed view
# OR
kubectl config get-contexts # user-friendly view
```

---

4. **Important**: Populate the `kubectl` configuration and link it to the cluster in GCP using `gcloud`

```bash
# Code Block for Step 4

# This command must be executed to link the cluster in the configuration
gcloud container clusters get-credentials <name-of-cluster> 
# <name-of-cluster> -> private-cluster-1     -> (prod environment)
# <name-of-cluster> -> dev-private-cluster-1 -> (dev environment)

# Execute this only if the above command responds with an error stating that the zone was not specified
gcloud container clusters get-credentials <name-of-cluster> --zone <name-of-zone> # us-central1-c
```

---

5. **Important**: Review `kubectl` config and set as default context

```bash
# Code Block for Step 5

# Review default config
kubectl config get-contexts # newly generated entry of kubectl cluster must be selected

# If the newly created config is not selected
kubectl config use-context <name-of-config>
```

---

6. Try fetching pods and services

```bash
# Code Block for Step 6

# Retrieve pod information
kubectl get pods

# Retrieve services information in default as well as named namespace
kubectl get services # `-n medialab` (only if medialab services are required to be fetched)

# If the above information is retrieved without any error, the deployment can be initiated
```

---

7.  In case `kubectl get services || pods` fails to execute, verify everything from Step 2

[Back to ToC](#table-of-contents)

## Build and Test Angular and Express Locally (For Developers only)

---

> Verify all the endpoint URLs in the Angular as well as Express codebase are correct

> For Angular build and deployment

1. Navigate to `client` directory of the project `medialabs-ui`
2. Run `npm run build:prod` in a command window

```bash
# Code Block for Step 2

~/medialabs-ui/client> npm run build:prod
```

3. Ensure the build is completed without errors
4. Navigate to the `public` directory
5. Run the application locally using `http-server`

> For Angular Build Optimization

1. Navigate to `client` directory of the project `medialabs-ui`
2. Run `npm run build:stats` in a command window

```bash
# Code Block for Step 2

~/medialabs-ui/client> npm run build:stats
```

3. Analyze the bundle by executing the below command

```bash
~/medialabs-ui/client> npm run analyze
```

4. Open `http://localhost:8888` to view treemap of all the chunks
5. Optimize wherever possible


> For Express deployment

1. Verify the `node` server starts up without any errors
2. Navigate to `http://localhost:3000` in the browser to receive a response from express

[Back to ToC](#table-of-contents)

## Deployment on GCP

---

1. Ensure you have access to `Cloud Build`
2. Triggers in `Cloud Build` enable the code to be fetched from the [Github repository](https://github.com/LTIMedialab/medialab-ui) directly
3. The `Dockerfile` in `client` and `server` describe the build steps
4. Ensure the `cloudbuild.yaml` file has proper entries for image name and tag

> The image names `nginx` and `server` and the semvar tags `0.0.3` shall be proper before the code is fetched from Github

```yaml
steps:
  # build client image
  - name: "gcr.io/cloud-builders/docker"
    args: ["build", "-t", "gcr.io/viacom-poc/medialabs/nginx:0.0.3", "client"]
    
  # push client image
  - name: "gcr.io/cloud-builders/docker"
    args: ["push", "gcr.io/viacom-poc/medialabs/nginx:0.0.3"]
    # env:
    # - "CLOUDSDK_COMPUTE_ZONE=us-central1-c"
    # - "CLOUDSDK_CONTAINER_CLUSTER=$_CLUSTER_"
  
  # build server image
  - name: "gcr.io/cloud-builders/docker"
    args: ["build", "-t", "gcr.io/viacom-poc/medialabs/server:0.0.3", "server"]
    
    # push server image
  - name: "gcr.io/cloud-builders/docker"
    args: ["push", "gcr.io/viacom-poc/medialabs/server:0.0.3"]
    # env:
    # - "CLOUDSDK_COMPUTE_ZONE=us-central1-c"
    # - "CLOUDSDK_CONTAINER_CLUSTER=$_CLUSTER_"
```

5. The image when built successfully it is stored in `Google Container Registry`
6. Ensure the names of images and tags are properly entered in these files
   1. `nginx-deployment.yaml`
   2. `nginx-service.yaml`
   3. `server-deployment.yaml`
   4. `server-service.yaml`
7. Run below commands in root folder of `medialabs-ui` project to complete the deployment

```cmd
~/medialabs-ui> kubectl apply -f .\nginx.deployment.yaml  -n medialab
~/medialabs-ui> kubectl apply -f .\nginx-service.yaml     -n medialab
~/medialabs-ui> kubectl apply -f .\server-deployment.yaml -n medialab
~/medialabs-ui> kubectl apply -f .\server-service.yaml    -n medialab
```

[Back to ToC](#table-of-contents)

## Address List

---

| Utility             | Utility Command                                                                    | Address                                                                                                |
| ------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Git Remote URL      | `git clone | git push | git pull | git fetch`                                      | [https://github.com/LTIMedialab/medialab-ui/tree/develop](https://github.com/LTIMedialab/medialab-ui/) |
| Angular             | `~/medialabs-ui/client> npm start`                                                 | [http://localhost:4200](http://localhost:4200/)                                                        |
| Angular (*non-dev*) | `kubectl port-forward service/nginx 4205:80 -n medialab`                           | [http://localhost:4205](http://localhost:4205/)                                                        |
| Express             | `~/medialabs-ui/server> npm start`                                                 | [http://localhost:3000](http://localhost:3000/)                                                        |
| Express (*non-dev*) | `kubectl port-forward service/server 3005:3000 -n medialab`                        | [http://localhost:3005](http://localhost:3005/)                                                        |
| WSO2                | `kubectl port-forward service/wso2is-pattern-1-identity-service 9443:9443 -n wso2` | [https://localhost:9443/carbon](https://localhost:9443/carbon/)                                        |
| KaUI                | `kubectl port-forward deployment/kaui 8080:8080`                                   | *Address unavailable*                                                                                  |
| Killbill DB         | `kubectl port-forward deployment/db 3306:3306`                                     | *Address unavailable*                                                                                  |
| Killbill            | `kubectl port-forward deployment/killbill 8080:8080`                               | [http://localhost:8080](http:/localhost:8080/)                                                         |
| Springboot          | `kubectl port-forward service/medialab-springboot 8085:8085`                       | [http://localhost:8085](http://localhost:8085/)                                                        |

> All the addresses are expected to be accessible only with `kubectl` commands
>
> The addresses cannot be accessed from the internet

[Back to ToC](#table-of-contents)
