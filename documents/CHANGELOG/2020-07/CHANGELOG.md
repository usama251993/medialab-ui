# LTI MediaLabs UI

## Table of Contents

- [LTI MediaLabs UI](#lti-medialabs-ui)
  - [Table of Contents](#table-of-contents)
      - [medialab-0001](#medialab-0001)
      - [medialab-0002-feature/core](#medialab-0002-featurecore)
      - [medialab-0003-feature/navbar](#medialab-0003-featurenavbar)
      - [medialab-0004-feature/navbar](#medialab-0004-featurenavbar)
      - [medialab-0005-feature/footer](#medialab-0005-featurefooter)
      - [medialab-0006-feature/footer](#medialab-0006-featurefooter)
      - [medialab-0007-feature/core](#medialab-0007-featurecore)
      - [medialab-0008-feature/home](#medialab-0008-featurehome)
      - [medialab-0009-feature/core](#medialab-0009-featurecore)
      - [medialab-0010-feature/auth](#medialab-0010-featureauth)
      - [medialab-0011-feature/core](#medialab-0011-featurecore)
      - [medialab-0012-feature/pricing](#medialab-0012-featurepricing)
      - [medialab-0013-feature/auth](#medialab-0013-featureauth)
      - [medialab-0014-feature/auth](#medialab-0014-featureauth)
      - [medialab-0015-feature/home](#medialab-0015-featurehome)
      - [medialab-0016-feature/core](#medialab-0016-featurecore)
      - [medialab-0017-feature/core](#medialab-0017-featurecore)
      - [medialab-0018-feature/core](#medialab-0018-featurecore)
      - [medialab-0019-develop](#medialab-0019-develop)
      - [medialab-0020-feature/core](#medialab-0020-featurecore)
      - [medialab-0021-feature/auth](#medialab-0021-featureauth)
      - [medialab-0022-feature/auth](#medialab-0022-featureauth)
      - [medialab-0023-feature/auth](#medialab-0023-featureauth)
      - [medialab-0024-feature/auth](#medialab-0024-featureauth)
      - [medialab-0025-refactor/develop](#medialab-0025-refactordevelop)
      - [medialab-0026-refactor/develop](#medialab-0026-refactordevelop)
      - [medialab-0026-refactor/develop](#medialab-0026-refactordevelop-1)
      - [medialab-0027-refactor/develop](#medialab-0027-refactordevelop)
      - [medialab-0028-refactor/develop](#medialab-0028-refactordevelop)
      - [medialab-0029-refactor/develop](#medialab-0029-refactordevelop)
      - [medialab-0030-feature/navbar](#medialab-0030-featurenavbar)
      - [medialab-0031-server/remote](#medialab-0031-serverremote)
      - [medialab-0032-develop](#medialab-0032-develop)
      - [medialab-0033-integration/killbill](#medialab-0033-integrationkillbill)
      - [medialab-0033-develop](#medialab-0033-develop)
      - [medialab-0034-integration/killbill](#medialab-0034-integrationkillbill)
      - [medialab-0035-integration/killbill](#medialab-0035-integrationkillbill)
      - [Pending Tasks](#pending-tasks)


#### medialab-0001

1. Installed dependencies
   - `@angular/material` with `indigo-pink` as default theme
   - `@ngrx` libraries
     - `@ngrx/core`
     - `@ngrx/store`
     - `@ngrx/store-devtools`
     - `@ngrx/router-store`
     - `@ngrx/effects`
     - `@ngrx/entity`
2. Added alternative theme

[Back to ToC](#table-of-contents)

#### medialab-0002-feature/core

1. Setup core `@ngrx/store`
2. Setup feature `@ngrx/store`
3. Prefixed existing files with `lm-`
4. Generated components and services for module `lm-core`
   - `lm-core` components
     - `lm-app`
     - `lm-error`
     - `lm-footer-container`
       - `lm-footer`
     - `lm-home-container`
       - `lm-home`
     - `lm-navbar-container`
       - `lm-navbar`
   - `lm-core` services
     - `lm-core`
     - `lm-footer`
     - `lm-home`
     - `lm-navbar`
5. Generated state schematics
   - `actions`
   - `effects`
   - `reducers`
   - `selectors`
   - `types`
   - `store` as `index.ts`
6. Generated feature modules
   - `lm-features`
   - `lm-pricing`
7. Implemented Lazy Loading of feature modules

[Back to ToC](#table-of-contents)

#### medialab-0003-feature/navbar

1. Selectors modified to return `model` directly instead of `EntityState`
2. Moved `routerState` to `app-module`
3. Added app level `lm-state`
4. Added `bootstrap` and `jQuery`
5. Implemented navbar using bootstrap, need to review

[Back to ToC](#table-of-contents)

#### medialab-0004-feature/navbar

1. Routing refactor required
2. Modified model `LmNavbarModel` and `LmNavbarItemModel`

[Back to ToC](#table-of-contents)

#### medialab-0005-feature/footer

1. Footer is now successfully fetched from state analogous to navbar

[Back to ToC](#table-of-contents)

#### medialab-0006-feature/footer

1. Footer UI designed
2. Some minor changes in navbar to behave in accordance with footer

[Back to ToC](#table-of-contents)

#### medialab-0007-feature/core

1. Minor optimizations
2. Removed deprecated dependency `@ngrx/core`

[Back to ToC](#table-of-contents)

#### medialab-0008-feature/home

1. Home UI designed
2. Refactored Navbar and Footer data fetch

[Back to ToC](#table-of-contents)

#### medialab-0009-feature/core

1. Added Cookie Policy band in the home screen
2. Added `lm-login` and `lm-singup` components

[Back to ToC](#table-of-contents)

#### medialab-0010-feature/auth

1. Implemented `login` and `signup` components
2. Signup UI designed
   - Form is generated using `FormBuilder` service
   - Validators set to allow proper data entry by the user
3. Minor fixes in data fetch of components
4. Organized `services` directory to keep component specific service seggregated
6. Minor fixes in routing
7. Disabled module routing for the time being

[Back to ToC](#table-of-contents)

#### medialab-0011-feature/core

1. Routed `lm-pricing` component into core module
2. Implemented `lm-pricing` component

[Back to ToC](#table-of-contents)

#### medialab-0012-feature/pricing

1. Pricing UI Designed

[Back to ToC](#table-of-contents)

#### medialab-0013-feature/auth

1. Signup form validation complete
   - First Name and Last Name (optional)
   - E-mail (required, email pattern validated)
   - Password (required, password pattern validated)
   - Confirm Password (required, must me same as password entered)
2. Refactored Signup model

[Back to ToC](#table-of-contents)

#### medialab-0014-feature/auth

1. Login UI designed
2. Login form validation complete
   - Username (required, can be an email too)
   - Password (required)
3. Refactored Signup model
4. Refactored data fetch strategy
   - Improved error handling in login and signup reducers

[Back to ToC](#table-of-contents)

#### medialab-0015-feature/home

1. Cookiebar in home screen is now dismissable
2. Replaced `bootstrap` card with `mat-card`
3. Reverted data fetch strategy since the new one does not detect changes
4. Home screen assets are now fetched through `home` service

[Back to ToC](#table-of-contents)

#### medialab-0016-feature/core

1. Assets fetched from service instead of effect
   - Navbar
   - Footer
   - Pricing
2. Reverted to old data fetch strategy
   - Signup
   - Login
   - Pricing
3. Code Cleanup
4. Removed `home` link from navbar
5. Styling changes in
   - Cookie bar
   - Footer

[Back to ToC](#table-of-contents)

#### medialab-0017-feature/core

1. Installed `express` and some dependencies

| Dependency Name | Purpose                                           |
| --------------- | ------------------------------------------------- |
| `express`       | Core `express` library                            |
| `concurrently`  | Run Angular webapp and express api simultaneously |

2. Modified `scripts` in `package.json`
   - Added proxy configuration file to redirect api calls from `http://localhost:4200` to `http://localhost:3000/api`
   - Added `express` server startup script
3. Modified `angular.json`
   - Modified default `outputPath` from `dist/lti-medialab-ui` to `public`
   - Added light and dark themes - color description can be found in `src/styles/themes.scss`
4. Added `server` for express and a placeholder `api` which runs at port 3000
5. Added `./public` to `/gitignore`
6. Minor changes in signup and home components

Since `package.json` has been updated, running these commands is mandatory before starting the server
```
npm update
npm run build
npm start
```

- Angular web app would run on `http://localhost:4200` and hot reload would be enabled
- Express API would run on `http://localhost:3000/api`
- Any changes in files associated with `http://localhost:3000/api` would require server restart `npm start`
- Reference [link](https://medium.com/@danielkagan/serve-mean-stack-using-angular-cli-f39b33dbad64)

[Back to ToC](#table-of-contents)

#### medialab-0018-feature/core

1. Integrated with code available at [temporary repository](https://github.com/LTIMedialab/medialab-app-ui)

[Back to ToC](#table-of-contents)

#### medialab-0019-develop

1. First commit after migration from [bitbucket](https://bitbucket.org/usama2519933/lti-medialabs-ui) to [github](https://github.com/LTIMedialab/medialab-app-ui)
2. Updated `README.md` with [workflow](https://github.com/LTIMedialab/medialab-ui/blob/develop/README.md#workflow)

[Back to ToC](#table-of-contents)

#### medialab-0020-feature/core

1. Minor code optimizations

[Back to ToC](#table-of-contents)

#### medialab-0021-feature/auth

1. Updated Signup form
   - Your Name
   - Your Work E-mail
   - Choose a Password
   - Confirm Password
   - Your Country
   - Your Company
   - Your Designation
2. Updated `navbar` contents

[Back to ToC](#table-of-contents)

#### medialab-0022-feature/auth

1. `proxy-config` serve does not seem to work, all backend calls are hardcoded to `http://localhost:3000/api` instead
2. Added `cors` to express `server.js`
3. Added `register` and `get-token` routes to `api.js`
   - When user signs up, the token entry is made in `localStorage` and is redirected to home page
4. Added `HttpClientModule`
5. Modified cookie bar background
6. Added `user` model
7. Added `auth` service
8. Added actions to validate password in `signup`

References

1. [State](https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns#inserting-and-removing-items-in-arrays)
2. [Auth](https://mherman.org/blog/authentication-in-angular-with-ngrx/)

[Back to ToC](#table-of-contents)

#### medialab-0023-feature/auth

1. Modified express routes
   - `auth` api is now available on `http://localhost:3000/api/auth`
2. Refactored `auth` api
   - The `auth` api now has a controller and a service
   - All the calls from angular are made to the controller and controller uses service to provide response
3. The `auth` api checks for the following
   - If the user is already registered (No duplicate registration)
   - If the data provided by the user is accurate
4. Updated `auth` service
   - There is no longer a need to generate tokens explicitly

References

1. [Coding Practice and `express` auth](http://www.webappsolution.com/blog/2019/1/10/angular-7-login-and-registration-with-jwt-node-authentication)

[Back to ToC](#table-of-contents)

#### medialab-0024-feature/auth

1. Placeholder landing page created with working auth guard
2. Login credentials verification rectified
3. Separated `users` selector from login and signup

[Back to ToC](#table-of-contents)

#### medialab-0025-refactor/develop

1. The root directory is not separated into 4 folders
   1. Angular Application in `client`
   2. Express Application in `server`
   3. Kubernetes Engine files in `k8s`
   4. Docker files in `docker`
2. There is a `docker` folder present in `server` and `client` folders to configure and generate docker image of each application separately
   - Added `Dockerfile`
   - Added `.dockerignore`
3. Separated dependencies of angular and express application
4. Separated `CHANGELOG`s for `server` and `client`

[Back to ToC](#table-of-contents)

#### medialab-0026-refactor/develop

1. Fixed build issue caused due to `lm-pricing-service`
2. Updated `.gitignore` to exclude `client/public`

[Back to ToC](#table-of-contents)

#### medialab-0026-refactor/develop

1. Designed `util` for Form
2. Refactored `routes`
3. Change in folder structure
4. Modularized `client` app
5. Introduced new `auth` state which is promised to replace the following states:
   - `login`
   - `signup`
   - `user`
6. Introduce WSO2 auth services using references from `environment`
7. Remember to cleanup empty directories
8. Themes are loaded using `styles.scss`
9. All routes replaced with const string references
10. **Important**: Refactor other services keeping `lm-login-service` as a reference
    -  Removed `templateUrl` for `login-container` component

[Back to ToC](#table-of-contents)

#### medialab-0027-refactor/develop

1. Aligned `lm-signup` according to `lm-login`
   - Replaced `templateUrl` with `template` string
   - Modified Signup Actions
   - Modified Signup Effect
   - Modified Signup Model
   - Modified Signup Reducer
   - Modified Signup Selector
   - Modified Signup Service
2. Added navigation to login from signup and vice versa

[Back to ToC](#table-of-contents)

#### medialab-0028-refactor/develop

1. Aligned the following components as per new standards
   - `lm-navbar`
   - `lm-home`
   - `lm-footer`
2. Added `responsive.scss` for customized resposive behavior
3. Added `theme-color-grabber` for picking theme colors for HTML Elements
4. Added documentation for `auth-controller.js` and `auth-service.js`

[Back to ToC](#table-of-contents)

#### medialab-0029-refactor/develop

1. Added deployment files
2. Fixed `ngTemplateOutlet` issue in navbar

#### medialab-0030-feature/navbar

1. Fixed navigation using navbar
2. Fixed login and signup navigation
3. Added router service for in-app navigation
4. Minor changes in dark theme color

[Back to ToC](#table-of-contents)

#### medialab-0031-server/remote

1. Added `axios` and `https` for remote calls
2. Added a GET `test` to check for remote calls using `axios`

[Back to ToC](#table-of-contents)

#### medialab-0032-develop

1. Build ready to be tested for `skaffold`
2. Added `<meta>` for description
3. Enabled Material Navigation
4. Fixed Material Navigation behaviour
5. Refactored `lm-navbar` model

[Back to ToC](#table-of-contents)

#### medialab-0033-integration/killbill

1. Refactored `express` routing
   - Separated `wso2` and `killbill` specific `controller` and `service`
2. Added configuration for `wso2` and `killbill` APIs

[Back to ToC](#table-of-contents)

#### medialab-0033-develop

1. Updated deployment files to remove warnings
2. Updated `README.md`
   - Project Structure
   - Instructions to develop and deploy
   - List of URLs
3. Added placeholder `.dockerignore` for express app

[Back to ToC](#table-of-contents)

#### medialab-0034-integration/killbill

1. Added `nodemon` configuration for debugging
2. Modification of const nomenclature throughout express app
3. Improved logging messages

[Back to ToC](#table-of-contents)

#### medialab-0035-integration/killbill

**Front End**
1. Resolved merge conflict from medialab-0033-develop
2. Navbar is now `sticky`
3. Added `getUserContext` to detect user context
   - This is feature is not fully implemented as of [`medialab-0035-integration/killbill`](#medialab-0035-integration/killbill)
4. Refactored `ngFor` in templates
   - Level 1 loops have iterators renamed to `_`
   - Level 2 loops have iterators renamed to `__`
5. Refactored component properties
   - All the components have consistent named properties
   - All container components have properties with the same name as that of presentation components with `Observable` notation
6. Refactored services consumed by components
   - All the methods across services now have consistent names
```
# Assets Dictionary -> { id: 'assets' assets, form, error }
assetsDict$
assetsDict
getAssetsDict(): Observable<Dictionary<Lm /*context*/ AssetModel>>

# Assets Entity ID  -> 'assets'
assetsEntityID$
assetsEntityID
getAssetsEntityID(): Observable<string>

# Form Dictionary   -> { id: 'form' assets, form, error }
formDict$
formDict
getFormDict(): Observable<Dictionary<Lm /*context*/ AssetModel>>

# Form Entity ID    -> 'form'
formEntityID$
formEntityID
getFormEntityID(): Observable<string>

# Context Entity ID -> // varies depending on context
contextEntityID$
contextEntityID
getContextEntityID(): Observable<string>

# Form Group        -> // holds FormGroup required by component
formGroup$
formGroup
getFormGroup(): Observable<FormGroup>
```
7. Removed unused code in components
8. Removed bootstrap navbar
9. `lm-pricing` component aligned as per [`medialab-0028-refactor/develop`](#medialab-0028-refactordevelop) &amp; [`medialab-0035-integration/killbill`](#medialab-0035-integration/killbill)
10. Refactored `models`
11. Added `endpoint` support
    - Added model
    - Added service
    - Added entry in `environment.ts` and `environment.prod.ts`
12. Added `action`s and `effect`s for loading form assets

**Back End**
1. Added `atob` to decode password
2. Improved logging messages
3. Killbill Account ID can be retrieved using `axios` call
4. Added `auth` in an `axios` call
5. Refactored `axios` call in service to return a promise to controller
6. Added `getEndpoint` function in WSO2 service

[Back to ToC](#table-of-contents)

---

#### Pending Tasks

As per commit [`medialab-0035-integration/killbill`](#medialab-0035-integration/killbill)

---

1. Integrate with WSO2 and Killbill
2. Add Killbill actions for `ngrx`
3. Use interceptors to secure incoming and outgoing requests
4. Handle login and signup errors and redirection on invalid credentials
   - Modify `lm-auth` model to handle authentication errors
5. Design context sensitive landing page
   - Protected routes for lazily loaded modules
6.  Deploy using proper configurations on GCP
7.  Configure `proxy-config`
8.  Take care of style duplication while creating themes
9.  Design error page
10. Establish webhooks for every push

[Back to ToC](#table-of-contents)
