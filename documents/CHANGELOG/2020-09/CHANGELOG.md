# LTI MediaLabs UI

## Table of Contents
- [LTI MediaLabs UI](#lti-medialabs-ui)
  - [Table of Contents](#table-of-contents)
    - [LT10619647-medialab-0061-dedup/develop](#lt10619647-medialab-0061-dedupdevelop)
    - [LT10619647-medialab-0062-dedup/develop](#lt10619647-medialab-0062-dedupdevelop)
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
      - Removed `div` required by `THEOplayer`
      - Removed `zendesk` script tag
      - The application now uses light theme by default
    2. `styles.scss`
       - Bootstrap is now being imported selectively instead of a huge chunk
       - Separated global styles into a separate file
       - Only references of dependant stylesheets are included in `styles.scss` and no code is present
    3. `cd-core.module.ts`
       - Removed unused components from imports
5. Updated navbar logo with light theme variants
6. Added placeholder for `canDeactivate` guard for `cd-result-list-container` component
7. `cd-result` component now has no references of `cd-core` service
8. UI changes in `cd-result-list` and `cd-result` components
   - Bucket holder optimized
   - Added Accuracy range slider *(disabled for now)*
9.  `cd-theoplayer` component now contains only reference of a player which can be imported in any component as requried
10. Separated dialog component from `cd-theoplayer` component
11. The helper `THEOplayer.js` in root directory is no longer required

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0062-dedup/develop

Type: :lipstick:

1. Adjusted margins in the following components
   1. `cd-result-list`
   2. `cd-result-overview`

[Back to ToC](#table-of-contents)

### Pending Tasks

As per commit [`LT10619647-medialab-0062-dedup/develop`](#lt10619647-medialab-0062-dedupdevelop)

---

**WSO2**

1. Handle authentication errors
2. Email verification

**Killbill**

1. Add killbill actions
   1. Fetch tenants list
   2. Create tags
   3. Create payment method
   4. Fetch available plans
   5. Create subscription
   6. Fetch invoices
   7. Fetch payment methods
   8. Execute payment
2. Populate `organization` dropdown in signup form with available tenants
   1. Tenants are hardcoded for now

**Content-Aware Deduplication**

1. Implement `ngRx` in content-aware deduplication module
2. Screens pending
   1. Intuitive loading
   2. Summarization
   3. Compare detected duplicates
   4. Charts in UI for Data Analytics results

**GCP**

1. Update deployment scripts
   - `nginx.conf`
   - `Dockerfile`
   - `cloud-build.yaml`
   - `skaffold.yaml`

**Angular**

1. Modularize MediaLabs and Content Deduplication
2. Content Deduplication must be moved inside MediaLabs
3. Make routing within module more dynamic
4. Persistent session to withstand page refresh
   1. [Local Storage](https://medium.com/better-programming/sync-your-state-in-local-storage-with-ngrx-9d6ceba93fc0)
   2. Cookie
5. Implement behaviour of `mat-sidenav`
   1. Toggle using `ngrx` actions
6. Copyright section of footer can be optimized
7. Removed everything related to
   1. `lm-pricing`
   2. `lm-landing`
8. Modify result list component as a table

**Express**

*no pending tasks*

**Other**

1. Establish web hooks to implement `CI/CD`
2. Map web hooks to initiate deployment to the `deploy` branch

[Back to ToC](#table-of-contents)
