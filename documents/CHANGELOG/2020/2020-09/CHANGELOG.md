# LTI MediaLabs UI

## Table of Contents
- [LTI MediaLabs UI](#lti-medialabs-ui)
  - [Table of Contents](#table-of-contents)
    - [LT10619647-medialab-0061-dedup/develop](#lt10619647-medialab-0061-dedupdevelop)
    - [LT10619647-medialab-0062-dedup/develop](#lt10619647-medialab-0062-dedupdevelop)
    - [LT10619647-medialab-0063-dedup/develop](#lt10619647-medialab-0063-dedupdevelop)
    - [LT10619647-medialab-0063-refactor/develop](#lt10619647-medialab-0063-refactordevelop)
    - [LT10619647-medialab-0064-refactor/develop](#lt10619647-medialab-0064-refactordevelop)
    - [LT10619647-medialab-0065-refactor/develop](#lt10619647-medialab-0065-refactordevelop)
    - [LT10619647-medialab-0066-refactor/develop](#lt10619647-medialab-0066-refactordevelop)
    - [LT10619647-medialab-0067-dedup/develop](#lt10619647-medialab-0067-dedupdevelop)
    - [LT10619647-medialab-0068-refactor/develop](#lt10619647-medialab-0068-refactordevelop)
    - [LT10619647-medialab-0069-refactor/develop](#lt10619647-medialab-0069-refactordevelop)
    - [LT10619647-medialab-0070-refactor/develop](#lt10619647-medialab-0070-refactordevelop)
    - [istyak4-medialab-0071-feature/iAuth](#istyak4-medialab-0071-featureiauth)
    - [LT10619647-medialab-0072-feature/login](#lt10619647-medialab-0072-featurelogin)
    - [LT10619647-medialab-0071-dedup/develop](#lt10619647-medialab-0071-dedupdevelop)
    - [LT10619647-medialab-0072-refactor/develop](#lt10619647-medialab-0072-refactordevelop)
    - [LT10619647-medialab-0073-refactor/develop](#lt10619647-medialab-0073-refactordevelop)
    - [LT10619647-medialab-0074-refactor/develop](#lt10619647-medialab-0074-refactordevelop)
    - [istyak4-medialab-0075-feature/iAuth](#istyak4-medialab-0075-featureiauth)
    - [LT10619647-medialab-0076-feature/signup](#lt10619647-medialab-0076-featuresignup)
    - [LT10619647-medialab-0077-feature/login](#lt10619647-medialab-0077-featurelogin)
    - [LT10619647-medialab-0078-feature/signup](#lt10619647-medialab-0078-featuresignup)
    - [istyak4-medialab-0083-feature/suitest](#istyak4-medialab-0083-featuresuitest)
    - [LT10619647-medialab-0079-refactor/develop](#lt10619647-medialab-0079-refactordevelop)
    - [LT10619647-medialab-0080-refactor/develop](#lt10619647-medialab-0080-refactordevelop)
    - [LT10619647-medialab-0081-feature/login](#lt10619647-medialab-0081-featurelogin)
    - [LT10619647-medialab-00083-develop](#lt10619647-medialab-00083-develop)
    - [LT10619647-medialab-00083-develop](#lt10619647-medialab-00083-develop-1)
    - [istyak4-medialab-0084-feature/suitest](#istyak4-medialab-0084-featuresuitest)
    - [Pending Tasks](#pending-tasks)

### LT10619647-medialab-0061-dedup/develop

Type: :hammer:

1. Removed CDN depdendencies, these libraries are now placed in `assets`
   1. `THEOplayer.js`
   2. `zendesk.js`
2. Zendesk throws a key error may be due to expired subscription, it is hence removed from `angular.json`
3. Added `@assets/*` and `@environment/*` paths in `tsconfig.base.json`
4. Cleaned up following files
   1. `index.html`
      - Removed `<div>` and `<script>` required by `THEOplayer`
      - Removed `<script>` required by `zendesk`
      - The application now uses light theme by default
    1. `styles.scss`
       - Bootstrap is now being imported selectively instead of a huge chunk
       - Separated global styles into a separate file
       - Only references of dependant stylesheets are included in `styles.scss` and no code is present
    2. `cd-core.module.ts`
       - Removed unused components from imports
5. Updated navbar logo with light theme variants
6. Added placeholder for `canDeactivate` guard for `cd-result-list-container` component
7. `cd-result` component now has no references of `cd-core` service
8. UI changes in `cd-result-list` and `cd-result` components
   - Bucket holder optimized
   - Added Accuracy range slider *(disabled for now)*
9.  `cd-theoplayer` component now contains only reference of a player which can be imported in any component as required
10. Separated dialog component from `cd-theoplayer` component
11. The helper `THEOplayer.js` in root directory is no longer required

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0062-dedup/develop

Type: :lipstick:

1. Adjusted margins in the following components
   1. `cd-result-list`
   2. `cd-result-overview`

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0063-dedup/develop

Type: :construction:

1. Error handling in progress, feature not completely implemented
   1. Design a separate route for `cd-progress` component
   2. When Error is thrown, prevent redirect to bucket or cancel the request first (check comments in `cd-bucket.service.ts`)
   3. Error Handling for `fakeResult$` works properly
2. Added `hashtag` use case
3. Updated UI as per John's review
### LT10619647-medialab-0063-refactor/develop

Type: :books:

1. Added Request Collection to be imported in Postman for
   1. WSO-IS
   2. Killbill

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0064-refactor/develop

Type: :fire: :lipstick:

1. Removed `ngrx` dependency from `lm-navbar` component
2. Added `carousel` partial stylesheet for homepage carousel

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0065-refactor/develop

Type: :fire:

1. Removed files specific to `lm-navbar` state
   1. Action
   2. Effect
   3. Reducer
   4. Selector
   5. Type
   6. Removed entry from state
2. Updated `CHANGELOG.md` with proper commit number
3. Minor code change in modules

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0066-refactor/develop

Type: :hammer: :books:

1. Updated `.gitignore` to overlook `assets/temp` and `svg` files in documents
2. Updated instructions of the above step in `README.md`
3. Updated workflow of Angular WSO2 Handshake diagram

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0067-dedup/develop

Type: :ambulance: :hammer:

1. Fixed error handling in Content-Aware Deduplication
2. Various opitmizations in code
3. `cd-progress` component is now service based and on a separate route
4. Removed `canDeactivate` implementation
5. Added snackbar message for errors in backend connectivity
6. Analysis on THEOplayer split screen implementation
   1. When a single video is being viewed, the video should pop up in a modal
   2. The current split screen implementation is limited to compare only two videos at a time
   3. The user shall select two videos from the results table and click on the compare button placed below the table
   4. The videos to be compared shall open in a new page
   5. The videos shall be placed side by side
   6. Both videos shall have height of 360px each to be displayed faithfully
   7. There shall be a common play button for both the videos which when clicked is expected to play both the videos from the time at which they are duplicates
   8. It is unsure of how many use cases shall implement this UI for comparison

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0068-refactor/develop

Type: :books: :fire:

1. Updated Addresses in `DEPLOYMENT.md`
2. Removed `ngrx` dependency from `lm-footer` component
3. Updated deployment scripts
   1. `skaffold.yaml`
   2. `client/Dockerfile`

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0069-refactor/develop

Type: :fire: :hammer: :package:

1. Updated package dependencies

| Library                           | Version   | Updated to  |
| --------------------------------- | --------- | ----------- |
| @angular/animations               | ~10.0.12  | ~10.*1.0*   |
| @angular/cdk                      | ^10.1.3   | ^10.*2.0*   |
| @angular/common                   | ~10.0.12  | ~10.*1.0*   |
| @angular/compiler                 | ~10.0.12  | ~10.*1.0*   |
| @angular/core                     | ~10.0.12  | ~10.*1.0*   |
| @angular/forms                    | ~10.0.12  | ~10.*1.0*   |
| @angular/material                 | ^10.1.3   | ^10.*2.0*   |
| @angular/platform-browser         | ~10.0.12  | ~10.*1.0*   |
| @angular/platform-browser-dynamic | ~10.0.12  | ~10.*1.0*   |
| @angular/router                   | ~10.0.12  | ~10.*1.0*   |
| rxjs                              | ~6.6.2    | ~6.6.*3*    |
| @angular-devkit/build-angular     | ~0.1000.7 | ^0.*1001.0* |
| @angular/cli                      | ~10.0.7   | ~10.*1.0*   |
| @angular/compiler-cli             | ~10.0.12  | ~10.*1.0*   |
| @types/jasmine                    | ~3.5.13   | ~3.5.*14*   |
| @types/node                       | ^14.6.0   | ^14.6.*4*   |
| karma                             | ~5.1.1    | ~5.*2.1*    |
| ts-node                           | ~8.10.2   | ~*9.0.0*    |
| typescript                        | ~3.9.7    | ~*4.0.2*    |

2. Removed components
   1. `lm-pricing`
   2. `lm-landing`
3. Added `lm-cookiebar` which is now visible throughout the MediaLabs app unless dismissed
4. Removed `ngrx` dependency from `lm-home` component

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0070-refactor/develop

Type: :fire: :books:

1. Removed `nrgx` dependency from the following components
   1. `lm-login`
   2. `lm-signup`
   3. This would totally eliminate `ngrx` dependency for MediaLabs
2. Navbar buttons now work with proper navigation
3. Updated address list in [`DEPLOYMENT.md`](../../deployment/DEPLOYMENT.md)
4. Material Components are loaded as and when required

[Back to ToC](#table-of-contents)

### istyak4-medialab-0071-feature/iAuth

Type: :construction: :hammer:

**Front End**
1. Added `lm-verify` and `lm-verify-container` component in lm-core.modeule
2. Added `lm-verify` service for WSO2 Email Verification
3. Added routes and WSO2 endpoints for WSO2 Email Verification
4. Added redirect to Verification page from `lm-signup`  
5. Modified `app-endpoint.model` for WSO2 email Verification
   

**Back End**
1. Verify Endpoint added in `WSO2/contoller.js`
2. Introduced `verify()` in `WSO2/service.js`

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0072-feature/login

Type: :construction: :hammer: :fire:

**Front End**
1. Code Cleanup
2. Login signup navigation from form is now working

**Back End**
1. WSO2 endpoint changed to `localhost`
2. `fetchUserDetails` uses generated endpoint instead of hardcoded
### LT10619647-medialab-0071-dedup/develop

Type: :fire: :hammer:

1. Fixed build errors in `lm-auth` service
2. THEOplayer dialog displays title without extension
3. Results table columns are fetched using a dictionary instead of a switch case

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0072-refactor/develop

Type: :books:

1. Updated `DEPLOYMENT.md`
2. Minor changes in `README.md` of `client` and `server`

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0073-refactor/develop

Type: :books: :lipstick: :fire:

1. Updated dependencies

| Library                           | Version   | Updated to  |
| --------------------------------- | --------- | ----------- |
| @angular/animations               | ~10.1.0   | ~10.1.*1*   |
| @angular/cdk                      | ^10.2.0   | ^10.2.*1*   |
| @angular/common                   | ~10.1.0   | ~10.1.*1*   |
| @angular/compiler                 | ~10.1.0   | ~10.1.*1*   |
| @angular/core                     | ~10.1.0   | ~10.1.*1*   |
| @angular/forms                    | ~10.1.0   | ~10.1.*1*   |
| @angular/material                 | ^10.2.0   | ^10.2.*1*   |
| @angular/platform-browser         | ~10.1.0   | ~10.1.*1*   |
| @angular/platform-browser-dynamic | ~10.1.0   | ~10.1.*1*   |
| @angular/router                   | ~10.1.0   | ~10.1.*1*   |
| @angular-devkit/build-angular     | ^0.1001.0 | ^0.1001.*1* |
| @angular/cli                      | ^10.1.0   | ^10.1.*1*   |
| @angular/compiler-cli             | ^10.1.0   | ^10.1.*1*   |
| @types/node                       | ^14.6.4   | ^14.*10.1*  |
| karma                             | ~5.2.1    | ~5.2.*2*    |

2. Updated MediaLabs Logo
3. MediaLabs home page is now moved to an empty route
4. Content-Aware deduplication is now accessible under Services menu of the navbar
5. Code Cleanup
   1. `lm-core` module
   2. `lm-home` and all subcomponents
   3. `lm-footer` component
6. Removed `lm-error` component
7. Modified `favicon`
8. Added resized images for carousel in assets

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0074-refactor/develop

Type: :fire: :hammer:

1. Removed `ngrx` from `lm-core` module entirely
2. Fixed `lm-signup` and `lm-login` components and services
3. Modified `AppEndpointRequestModel` and `LmAuth*` models

[Back to ToC](#table-of-contents)

### istyak4-medialab-0075-feature/iAuth

Type: :construction: 

**Front End**
1. Implemented async pipe for Verification

**Back End**
1. Checked Verification URL to localhost

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0076-feature/signup

Type: :construction: 

1. Signup Workflow Integration in progress
   1. Error handling pending

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0077-feature/login

Type: :goal_net:

**Front End**
1. Error handling in login and signup complete
   1. Error message is currently displayed over the login/signup form for now
   2. Need to change the error message to snackbar
   3. Handle page redirect after auth operation
2. Error handling is performed through `lm-core` service
3. Updated `lm-signup` service
   1. Optimized `submitForm`
   2. Separated `LmWSO2ErrorResponseModel` into `lm-auth` model
   3. Cleaned up initialization data in `lm-login` service as well

**Back End**
1. Added `requestFailedWSO2` method to handle generic request failures for WSO2
2. Username for WSO2 is generated using email due to optimization in `lm-signup` service

### LT10619647-medialab-0078-feature/signup

Type: :sparkles:

**Front End**
1. Updated `lm-verify` component
   1. Added `error` and `processing` properties
   2. Code verification enabled through route params
   3. Error handling from login/signup implemented
2. `catchError` is moved to `app-endpoint` service

**Back End**
1. Updated `CONTEXT` and `ENDPOINTS` in `wso2` config
2. Added `validateCode` and `resendCode` routes

[Back to ToC](#table-of-contents)

### istyak4-medialab-0083-feature/suitest

Type: :construction: :sparkles: :hammer: :wrench:

**Front End**
1. Added `@st-core` path in `ts.base.config`
2. Added `suite-st` module
   1. Added `st-application` & `st-application-container` 
   2. Added `st-dashboard` & `st-dashboard-container`
   3. Added `st-service` & `st-core.service`
   4. Added Layout for `suite-st` module
   5. Added `st-app-list` model
   6. Added `st-core.routes` & `st-core.routing.module`
   
**Back End**
1. Added `suite-st.json` config file
2. Added `suite-st` controller and service
3. Added route for `suite-st` in index.js
### LT10619647-medialab-0079-refactor/develop

|   Particulars | Description        |
| ------------: | ------------------ |
|          Type | :lipstick: :fire:  |
| Files Changed | 104 :open_mouth:   |
|          Date | Septmeber 21, 2020 |

**Front End**
1. Code Cleanup
   1. `assets` property has been removed from all the `lm` models
   2. Refactored styles
   3. Refactored components
   4. Replaced `<span>` with `<p>` except for inside `<button>`
2. `lm-routing` is now moved to shared module as `app-routing`
3. `cd-progress` component is now moved to shared module as `app-progress`
4. `app-home` component is no longer in use and can be discarded
5. Renamed `cd-backdrop-gray` to `app-backdrop-gray`
6. `Resend E-mail` button now appears 15 sec after the page is loaded
7. Restored light theme for application
8. Ternary operators for navigation purposes are replaced with `if-else` ladder
9. Updated `AppEnpointURLModel`
   1. Determine where to use `type` and `interface`

**Back End**
1. Modified `getResults` to `fetchResults` in `dedup` controller

- Added Description Table to commit messages in `CHANGELOG`

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0080-refactor/develop

|   Particulars | Description        |
| ------------: | ------------------ |
|          Type | :boom: :recycle:   |
| Files Changed | 32 :thinking:      |
|          Date | Septmeber 22, 2020 |

1. Modified `Observable`s used for flags to `Subject`s
2. Modified `lm-core` service 
   1. Renamed `handleError` to `handleWSO2Error`
   2. Changed return type of above method from `Observable<LmWSO2ErrorResponseModel>` to `LmWSO2ErrorResponseModel`
3. Updated `app-router` service
   1. `path` shall now be provided as a string array
   2. `extras` is mandatory and can be passed as `{}`
4. Added placeholder for `localStorage` in `lm-login` service
5. Updated `springboot` service in [Address List](../../deployment/DEPLOYMENT.md#address-list)
6. Error handling in updated in `cd-core` module as per `lm-core`

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0081-feature/login

|   Particulars | Description        |
| ------------: | ------------------ |
|          Type | :sparkles:         |
| Files Changed | 14 :thinking:      |
|          Date | Septmeber 24, 2020 |

1. User login is persistent and can withstand a page refresh

[Back to ToC](#table-of-contents)

### LT10619647-medialab-00083-develop

|   Particulars | Description        |
| ------------: | ------------------ |
|          Type | :sparkles:         |
| Files Changed | 7 :thinking:       |
|          Date | Septmeber 24, 2020 |

1. Logout functionality implemented

[Back to ToC](#table-of-contents)

### LT10619647-medialab-00083-develop

|   Particulars | Description        |
| ------------: | ------------------ |
|          Type | :fire:             |
| Files Changed | 7 :smile:          |
|          Date | Septmeber 24, 2020 |

1. WSO2 and Dedup controller handle request failure internally now
2. Files in `services` folder are no longer required

[Back to ToC](#table-of-contents)

### istyak4-medialab-0084-feature/suitest

|   Particulars | Description           |
| ------------: | --------------------- |
|          Type | :construction: :poop: |
| Files Changed | 17                    |
|          Date | Septmeber 30, 2020    |

**Front End**

1. Added `st-app`, `st-device`, `st-test-pack` & `st-test` models
2. Updated `st-dashboard.component` for displaying application related details
3. Selected results is opened at the bottom of the Table on dashboard
4. Updated `st-core` and `st-app` service 

**Back End**
1. Updated `controller` and `service` for `suite-st`
2. Updated `suite-st.json` 

[Back to ToC](#table-of-contents)

### Pending Tasks

As per commit [🔥 `LT10619647-medialab-00083-develop`](#lt10619647-medialab-00083-develop)

---

**WSO2**

1. Email verification
   1. Handle routing after authentication operation
      1. Invalid credentials on login -> Stay on login page and display snackbar
      2. Email not confirmed on login -> Redirect to verify page
      3. New user signs up -> redirect to verify page
      4. User already exists on signup -> Stay on signup page and display snackbar
2. Email verification page
   1. ~~Design end to end~~
   2. Have a resend button which appears after a specified interval (20sec)
   3. Resend now works only for `usama.ansari-lntinfotech.com`
3. Implement realm selection during signup
4. [This workflow](../../sequence-diagram/angular-wso2.yuml) to be implemented
5. ~~Signup page~~
   1. ~~Dropdown for Country Selection~~

**Killbill**

1. Populate `organization` dropdown in signup form with available tenants
   1. Tenants are hardcoded for now
2. Integrate Killbill into the application

**Content-Aware Deduplication**

1. Screens pending
   1. Intuitive loading
   2. Summarization
   3. Compare detected duplicates
   4. Charts in UI for Data Analytics results
2. Modify result list component as a table
3. Research on split screen `THEOplayer` implementation
4. Move `cd-progress` component to app level

**MediaLabs**

1. :warning: **Code cleanup**
   1. Remove all files related to `ngrx` in MediaLabs
   2. State module to be soft-discarded
   3. Error component in `login` and `signup` can be reused
2. Remove `ngrx` from the entire application
   1. Remove `ngrx` from app level
3. Cleanup Assets - remove unused images
4. Move `lm-notification` service to app-level
5. Refactor Routing
6. ~~Persistent session to withstand page refresh~~
7.  Implement behaviour of `mat-sidenav`
8.  Copyright section of footer can be optimized
9.  

**GCP**

*no pending tasks*

**Express**

*no pending tasks*

**Other**

1. Establish web hooks to implement `CI/CD`
2. ~~Map web hooks to initiate deployment to the `deploy` branch~~
   1. Deployment now triggers when a new release is tagged

[Back to ToC](#table-of-contents)
