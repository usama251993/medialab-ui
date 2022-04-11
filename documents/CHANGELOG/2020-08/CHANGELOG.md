# LTI MediaLabs UI

## Table of Contents

- [LTI MediaLabs UI](#lti-medialabs-ui)
  - [Table of Contents](#table-of-contents)
      - [medialab-0036-integration/killbill](#medialab-0036-integrationkillbill)
    - [medialab-0037-refactor/develop](#medialab-0037-refactordevelop)
    - [medialab-0038-refactor/develop](#medialab-0038-refactordevelop)
    - [medialab-0039-refactor/develop](#medialab-0039-refactordevelop)
    - [medialab-0040-refactor/develop](#medialab-0040-refactordevelop)
    - [medialab-0041-refactor/develop](#medialab-0041-refactordevelop)
    - [medialab-0042-integration/wso2](#medialab-0042-integrationwso2)
    - [medialab-0043-integration/wso2](#medialab-0043-integrationwso2)
    - [LT10619647-medialab-0044-integration/wso2](#lt10619647-medialab-0044-integrationwso2)
    - [LT10619647-medialab-0045-integration/wso2](#lt10619647-medialab-0045-integrationwso2)
    - [LT10619647-medialab-0046-integration/wso2](#lt10619647-medialab-0046-integrationwso2)
    - [LT10619647-medialab-0047-integration/wso2](#lt10619647-medialab-0047-integrationwso2)
    - [LT10619647-medialab-0048-develop](#lt10619647-medialab-0048-develop)
    - [LT10619647-medialab-0048-integration/wso2](#lt10619647-medialab-0048-integrationwso2)
    - [LT10619647-medialab-0049-refactor/develop](#lt10619647-medialab-0049-refactordevelop)
    - [LT10619647-medialab-0050-dedup/develop](#lt10619647-medialab-0050-dedupdevelop)
    - [istyak4-medialab-0051-dedup/theoplayer](#istyak4-medialab-0051-deduptheoplayer)
    - [LT10619647-medialab-0051-dedup/develop](#lt10619647-medialab-0051-dedupdevelop)
    - [LT10619647-medialab-0052-dedup/develop](#lt10619647-medialab-0052-dedupdevelop)
    - [istyak4-medialab-0053-dedup/theoplayer](#istyak4-medialab-0053-deduptheoplayer)
    - [LT10619647-medialab-0053-dedup/develop](#lt10619647-medialab-0053-dedupdevelop)
    - [LT10619647-medialab-0054-dedup/develop](#lt10619647-medialab-0054-dedupdevelop)
    - [LT10619647-medialab-0055-dedup/develop](#lt10619647-medialab-0055-dedupdevelop)
    - [LT10619647-medialab-0056-dedup/develop](#lt10619647-medialab-0056-dedupdevelop)
    - [LT10619647-medialab-0057-dedup/develop](#lt10619647-medialab-0057-dedupdevelop)
    - [LT10619647-medialab-0058-dedup/develop](#lt10619647-medialab-0058-dedupdevelop)
    - [Pending Tasks](#pending-tasks)

#### medialab-0036-integration/killbill

1. Minor bugfixes
2. Reverted from `mat-sidenav` to non-responsive navbar
3. Navbar responsive actions on hold currently

[Back to ToC](#table-of-contents)

### medialab-0037-refactor/develop

1. Restructured documents in project
2. Temporarily disabled sidenav
3. Modified `lm-home` components
   - Added About and Solution Overview section
   - Cookiebar assets are now a separate entity in home assets
4. Extracted button model in common
5. Extracted `ENTITY_ID` into a separated enum in `types/index.ts`
6. Refactored `getEndpoint` method in killbill `service`

[Back to ToC](#table-of-contents)

### medialab-0038-refactor/develop

1. Refactored home 
   - Separated home component into child components
   - Each child component handles only one section of the homepage
2. Refactored footer
3. Extracted image model into common
4. *Added carousel background image (temporary)*
5. Added handshake document for `killbill`
6. Added Zendesk integration script (*temporarily non-functional*)

[Back to ToC](#table-of-contents)

### medialab-0039-refactor/develop

**Front End**
1. Updated Zendesk integration script
   - Calculating 14 days, it is expected to last till August 19, 2020
2. Designed error page
3. Placeholders in signup and auth services and signup components to populate organization in the signup form dynamically
4. Refactored router navigation in `router` effect

**Back end**
1. Refactored route names
2. Refactored `getEndpoint` method
3. Added Express routeless landing page

**Updated `README.md` with deployment instructions**

[Back to ToC](#table-of-contents)

### medialab-0040-refactor/develop

**Front End**
1. Added test component to verify response directly from Angular instead of testing through Postman 
   - The component is not fully functional to handle all requests as of [`medialab-0040-refactor/develop`](#medialab-0040-refactor/develop)
2. Modified `LmKBRequest` and `LmKBResponse` models
3. All the remote calls are now made using `lm-endpoint` service
4. Updated `signup` related files for clean build
5. Updated Navbar Items as per new UX design
   - `navbar` model might need refactoring to remove redundant properties

**Back end**
1. Added routes inside `killbill/controller`
   1. `getTenantDetails` - to fetch tenant details using TenantID
   2. `getPushNotification` - to log output when this route is triggered by Killbill API
2. `killbill/service` needs refactor

[Back to ToC](#table-of-contents)

### medialab-0041-refactor/develop

**Front End**
1. Improved interface of test component

**Back end**
1. Refactored routes in killbill controller
2. Updated killbill service
   1. Renamed methods
   2. Removed unused methods
   3. Optimized payloads
   4. Updated `module.exports`

[Back to ToC](#table-of-contents)

### medialab-0042-integration/wso2

**Front End**
1. Test component user interface design complete
2. Headers, params, auth and data can be sent to `axios` request from UI
3. Restructured the folders of services and models
4. Added WSO2 and Agnular Handshake diagram

**Back end**
1. Killbill service `fetchTenantDetails` payload optimized
2. Killbill controller `test` method optimized

[Back to ToC](#table-of-contents)

### medialab-0043-integration/wso2

**Front End**
1. Minor changes in carousel, login, navbar and signup components
2. Refactored actions, effects and reducers

**Back end**
1. Added test routes (temporary)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0044-integration/wso2

**Front End**
1. Login identifier field is reverted from type email to text
2. Refactored models
   - Renamed `LmAuthModel` to `LmAuthResponseModel`
   - Added `LmAuthModel`
   - Renamed `LmKBRequestModel` to `LmRequestModel`
   - Renamed `LmKBResponseModel` to `LmResponseModel`
   - `LmRequestModel` now has better type inference
3. Added WSO2 Authenticate API to test component
4. Added dummy HttpInterceptor
5. Renamed methods in `endpoint` service
6. Code cleanup in `auth` service
7. Navbar items updated as per the new design iteration
8. Generate payload required to trigger login request

**Back end**
1. Code cleanup
2. `axiosPromise` returned by service is handled in separate methods in controller
3. Endpoint URLs are hardcoded
4. Payload check in service

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0045-integration/wso2

**Front End**
1. Renamed files
   - `lm-auth-form.model` to `lm-form.model`
   - `lm-user-auth.model` to `lm-user.model`
2. Improved model design specific to authorization
   - Models are renamed as `...BaseModel` and `...Model`
   - Base models are not exported except for credentials
   - Other models extend base models and are exported for implementation
3. Renamed models 
   - `LmRequestModel` to `LmEndpointRequestModel`
   - `LmResponseModel` to `LmEndpointResponseModel`
   - `LmAuthFormFieldModel` to `LmFormFieldModel`
   - `LmAuthFieldValidationModel` to `LmFormFieldValidationModel`
   - `LmAuthFieldInitializationModel` to `LmFormFieldInitializationModel`
4. More than 2 imports from a same file are now modified as alias imports
5. All `payload` parameters in services are replaced by `_`
6. Added Snackbar Notifications
7. Navigation is now executed in service instead of effect
8. Optimized `lm-auth` service

**Back end**
1. User can signup for LTI MediaLabs through WSO2
2. Payload for WSO2 registration generates proper axios call to WSO2 API

**Current Authentication Workflow is updated in [`README.md`](../../../client/README.md)**

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0046-integration/wso2

1. Updated documentation
2. Removed redundant style
3. Repositioned snackbar notification to top right

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0047-integration/wso2

1. Added `paths` in `tsconfig.base.json`
2. Modified all imports as per the new paths
3. Better separation of common and core models
4. Removed template and stylesheet or `app-component`

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0048-develop

1. Code ready for deployment on GCP
2. Refactored endpoints for front end as well as back end

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0048-integration/wso2

**Front End**
1. Navbar is now context sensitive
2. Implemented signup, login and logout using WSO2
3. Oriented auth model with WSO2
4. Modified auth selectors

**Back End**
1. Added `getUserDetails` endpoint

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0049-refactor/develop

1. Pull from branch demo
   1. WSO2 signup and login successful
   2. Killbill account creation successful
   3. Duplicate styles are taken care of
2. Updated dependency version

| Library                           | Version      | Updated to |
| --------------------------------- | ------------ | ---------- |
| @angular/animations               | 10.0.0       | 10.0.*11*  |
| @angular/cdk                      | 10.0.1       | 10.*1.3*   |
| @angular/common                   | 10.0.0       | 10.0.*11*  |
| @angular/compiler                 | 10.0.0       | 10.0.*11*  |
| @angular/core                     | 10.0.0       | 10.0.*11*  |
| @angular/forms                    | 10.0.0       | 10.0.*11*  |
| @angular/material                 | 10.0.1       | 10.*1.3*   |
| @angular/platform-browser         | 10.0.0       | 10.0.*11*  |
| @angular/platform-browser-dynamic | 10.0.0       | 10.0.*11*  |
| @angular/router                   | 10.0.0       | 10.0.*11*  |
| @ngrx/effects                     | 9.2.0        | *10.0.0*   |
| @ngrx/entity                      | 9.2.0        | *10.0.0*   |
| @ngrx/router-store                | 9.2.0        | *10.0.0*   |
| @ngrx/store                       | 9.2.0        | *10.0.0*   |
| @ngrx/store-devtools              | 9.2.0        | *10.0.0*   |
| bootstrap                         | 4.5.0        | 4.5.*2*    |
| rxjs                              | 6.5.5        | 6.*6.2*    |
| tslib                             | 2.0.0        | 2.0.*1*    |
| zone.js                           | 0.10.3       | 0.*11.1*   |
| @angular-devkit/build-angular     | 0.1000.0     | 0.1000.*6* |
| @angular/cli                      | 10.0.0       | 10.0.*6*   |
| @angular/compiler-cli             | 10.0.0       | 10.0.*11*  |
| @types/jasmine                    | 3.5.0        | 3.5.*12*   |
| @types/jasminewd2                 | 2.0.3        | 2.0.*8*    |
| @types/node                       | 12.11.1      | *14.6.0*   |
| codelyzer                         | 6.0.0-next.1 | *6.0.0*    |
| jasmine-core                      | 3.5.0        | 3.*6.0*    |
| jasmine-spec-reporter             | 5.0.0        | 5.0.*2*    |
| karma                             | 5.0.0        | 5.*1.1*    |
| karma-coverage-istanbul-reporter  | 3.0.2        | 3.0.*3*    |
| karma-jasmine                     | 3.3.0        | *4.0.1*    |
| karma-jasmine-html-reporter       | 1.5.0        | 1.5.*4*    |
| ts-node                           | 8.3.0        | 8.*10.2*   |
| tslint                            | 6.1.0        | 6.1.*3*    |
| typescript                        | 3.9.5        | 3.9.*7*    |

3. Added `dedup` module
   1. App shell
   2. Routes
4. Moved `error` component from `core` to `shared` module

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0050-dedup/develop

1. Added path `@cd-core`
2. Standardized modules specific nomenclature
3. Separate nomenclature for shared module
4. Error page distinguishingly used for MediaLab and Content-aware Deduplication
5. Renamed `app-component` of modules to `app-shell-component` prefixed with module initials
7. Implemented bucket and footer components
8. Added Content Deduplication logo in the navbar
9. Resized MediaLabs logo in navbar

[Back to ToC](#table-of-contents)

### istyak4-medialab-0051-dedup/theoplayer

1. Added `./THEOplayer` in angular.json 
2. Added `./THEOplayer` in Project root
3. Added component`cd-theoplayer-container` for THEOplayer
4. Implemented `cd -theoplayer-container`
5. Added THEOplayer in index.html

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0051-dedup/develop

**Front End**

1. Added `purple-green` as a default theme
2. Added empty home container component
3. Separate routes for MediaLabs and Content-Aware Deduplication
4. Added logo in navbar for dark themes
5. Added resolve guard to simulate loading effect
6. Converted `AppEndpointRequestModel` to partial

**Back End**

1. Code optimizations in `index.js`
2. Added route for `dedup`
3. Added `socket.io` dependency for future implementations

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0052-dedup/develop

**Front End**

1. Using `purple-green` as default
2. Added components, fully functional
   1. `CdResultOverviewContainerComponent`
   2. `CdResultOverviewComponent`
   3. `CdResultContainerComponent`
   4. `CdResultComponent`
3. Added `three-strings` progress indicator
4. Added services specific to above components for remote data fetch
5. `cd-core` service now serves data throughout the dedup application
6. Added temporary json files for testing
7. 

**Back End**

1. Added `getResult` route in Express controller

[Back to ToC](#table-of-contents)

### istyak4-medialab-0053-dedup/theoplayer

**Front End**

1. Added Additional Info in `TheoplayerComponent` 
2. Added components, fully functional
   1. `CdSummaryComponent`
   2. `CdSummaryContainerComponent`
3. Added `three-strings` progress indicator
4. Added `MetaInfoServce` for Meta data fetch
5. Added required configuration in `CdCoreRoutinhModule`, `CdCoreModule` and `CORE_ROUTES`

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0053-dedup/develop

**Front End**

1. THEOplayer Integrated
   - Only `*.mp4` videos are playable in THEOplayer
2. Added messages in progress indicator

**Back End**

1. Added MediaLab Springboot URL in `service` 

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0054-dedup/develop

1. UI Updated as per John's review
2. `nginx.conf` modified to allow CORS traffic
3. Added Logos
4. Back button navigation is now fixed
   - Added data check in guard
5. Header data at the result list and result details component modified
   - Need to migrate all services in result component to container component
6. Added `video_type` to result model
7. Result detail table generates columns dynamically
8. Added more options for bucket selection (disabled for now)
9. Added landing page for root route
10. Modified environment variable path for production

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0055-dedup/develop

1. Integrated with Istyak4's code
   1. Added Theoplayer modal card
   2. Added summary container component

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0056-dedup/develop

1. Modified `nginx.conf` to deploy quickly
   - Angular application is built at local machine
   - Only public directory is pushed to docker container

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0057-dedup/develop

1. THEOplayer now supports playing from timecode only in `audioSegment` use case
2. Deployment made on GCP
3. All the GCP ports are closed, only accessible to myself, John and Rakesh
4. Added `gzip: on;` in `nginx.conf`
5. Please note in this commit `skaffold.yaml` and `DockerFile` needs to be reverted to update deployment of express
   - Currently only `nginx` is being deployed using `skaffold run -n medialab`

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0058-dedup/develop

1. Added table in `summary` component at the end of process

[Back to ToC](#table-of-contents)

### Pending Tasks

As per commit [`LT10619647-medialab-0058-dedup/develop`](#lt10619647-medialab-0058-dedupdevelop)

---

1. Integrate with WSO2 and Killbill
   1. WSO2
      - **Handle authentication errors**
      - Email verification before authentication into the app
   2. Killbill
      - Add killbill actions
        1. Fetch tenants list
        2. Create tags
        3. Create payment method
        4. Fetch available plans
        5. Create subscription
        6. Fetch invoices
        7. Fetch payment methods
        8.  Execute payment
      - ~~Populate `organization` dropdown in signup form with available tenants~~ (Tenants are hardcoded for now)
2. Remove temporary json files
3. Change axios URL in express service for deployment package
4. Work in progress: Click of play button in results table to play video in modal
5. Fix route navigation for specific module
   - Routes are hardcoded as for now
6. Persistent session to withstand page refresh
   - [Local Storage](https://medium.com/better-programming/sync-your-state-in-local-storage-with-ngrx-9d6ceba93fc0)
   - Cookie
7. Design context sensitive landing page
   - Protected routes for lazily loaded modules
8. Establish webhooks for every push

[Back to ToC](#table-of-contents)
