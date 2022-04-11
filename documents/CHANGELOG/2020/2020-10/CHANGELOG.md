# LTI MediaLabs UI

## Table of Contents
- [LTI MediaLabs UI](#lti-medialabs-ui)
  - [Table of Contents](#table-of-contents)
    - [LT10619647-medialab-0085-refactor/develop](#lt10619647-medialab-0085-refactordevelop)
    - [LT10619647-medialab-0086-develop](#lt10619647-medialab-0086-develop)
    - [LT10619647-medialab-0087-develop](#lt10619647-medialab-0087-develop)
    - [LT10619647-medialab-0088-develop](#lt10619647-medialab-0088-develop)
    - [LT10619647-medialab-0089-develop](#lt10619647-medialab-0089-develop)
    - [LT10619647-medialab-0090-develop](#lt10619647-medialab-0090-develop)
    - [LT10619647-medialab-0091-develop](#lt10619647-medialab-0091-develop)
    - [LT10619647-medialab-0092-feature/phash-usama](#lt10619647-medialab-0092-featurephash-usama)
    - [LT10619647-medialab-0092-refactor/develop](#lt10619647-medialab-0092-refactordevelop)
    - [LT10619647-medialab-0093-feature/phash-usama](#lt10619647-medialab-0093-featurephash-usama)
    - [LT10619647-medialab-0093-refactor/develop](#lt10619647-medialab-0093-refactordevelop)
    - [LT10619647-medialab-0094-feature/phash-usama](#lt10619647-medialab-0094-featurephash-usama)
    - [LT10619647-medialab-0094-refactor/develop](#lt10619647-medialab-0094-refactordevelop)
    - [LT10619647-medialab-0095-feature/phash-usama](#lt10619647-medialab-0095-featurephash-usama)
    - [LT10619647-medialab-0096-feature/phash-usama](#lt10619647-medialab-0096-featurephash-usama)
    - [LT10619647-medialab-0097-feature/phash-usama](#lt10619647-medialab-0097-featurephash-usama)
    - [LT10619647-medialab-0098-feature/phash-usama](#lt10619647-medialab-0098-featurephash-usama)
    - [LT10619647-medialab-0099-feature/phash-usama](#lt10619647-medialab-0099-featurephash-usama)
    - [istyak4-medialab-0101-feature/phash-istyak](#istyak4-medialab-0101-featurephash-istyak)
    - [LT10619647-medialab-0100-feature/phash-usama](#lt10619647-medialab-0100-featurephash-usama)
    - [LT10619647-medialab-0101-feature/phash-usama](#lt10619647-medialab-0101-featurephash-usama)
    - [LT10619647-medialab-0102-feature/phash-usama](#lt10619647-medialab-0102-featurephash-usama)
    - [istyak4-medialab-0103-feature/phash-istyak](#istyak4-medialab-0103-featurephash-istyak)
    - [istyak4-medialab-0104-feature/phash-istyak](#istyak4-medialab-0104-featurephash-istyak)
    - [LT10619647-medialab-0104-develop-ph](#lt10619647-medialab-0104-develop-ph)
    - [istyak4-medialab-0109-feature/phash-istyak](#istyak4-medialab-0109-featurephash-istyak)
    - [Pending Tasks](#pending-tasks)
    - [LT10619647-medialab-0105-develop-ph](#lt10619647-medialab-0105-develop-ph)
    - [LT10619647-medialab-0106-feature/phash-usama](#lt10619647-medialab-0106-featurephash-usama)
    - [LT10619647-medialab-0107-feature/perceptual-hash](#lt10619647-medialab-0107-featureperceptual-hash)
    - [LT10619647-medialab-0107-feature/perceptual-hash](#lt10619647-medialab-0107-featureperceptual-hash-1)
    - [LT10619647-medialab-0107-feature/phash-usama](#lt10619647-medialab-0107-featurephash-usama)
    - [LT10619647-medialab-0108-feature/phash-usama](#lt10619647-medialab-0108-featurephash-usama)
    - [LT10619647-medialab-0109-feature/phash-usama](#lt10619647-medialab-0109-featurephash-usama)
    - [istyak4-medialab-0111-feature/phash-usama](#istyak4-medialab-0111-featurephash-usama)
    - [LT10619647-medialab-0112-feature/phash-usama](#lt10619647-medialab-0112-featurephash-usama)
    - [Pending Tasks](#pending-tasks-1)

### LT10619647-medialab-0085-refactor/develop

|   Particulars | Description       |
| ------------: | ----------------- |
|          Type | :recycle: :bento: |
| Files Changed | 42                |
|          Date | October 01, 2020  |

**Front End**

1. Replaced `cd-` conventions in `suite-st` modules with `st-`
2. Added `test-suite` route in `lm-navbar` service
3. Cleaned up assets
4. Optimized Carousel

> This build is deployment ready :rocket:

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0086-develop

1. Updated `cloudbuild.yaml` with variables for deployment cluster

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0087-develop

1. Updated `cloudbuild.yaml`
2. Updated `environment.ts` and `environment.prod.ts`

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0088-develop

1. Code ready to be deployed to `private-cluster-1` (prod environment)
2. Cosmetic Changes

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0089-develop

1. Fixed `url` in `dedup/service`

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0090-develop

1. Removed `requestFailed()` from `dedup/controller`

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0091-develop

1. Added `requestFailed()` back
2. Updated `nginx` and `server` build tags to `0.0.3`
3. Rectified `express` port in `DEPLOYMENT.md`
4. Strikethrough unwanted steps in `DEPLOYMENT.md`

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0092-feature/phash-usama

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :tada:           |
| Files Changed | 78               |
|          Date | October 14, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/0AOsZksD)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0092-refactor/develop

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :recycle:        |
| Files Changed | 78               |
|          Date | October 20, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/0AOsZksD)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0093-feature/phash-usama

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :sparkles:       |
| Files Changed | 20               |
|          Date | October 15, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/0AOsZksD)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0093-refactor/develop

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :recycle:        |
| Files Changed | 8                |
|          Date | October 21, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/0AOsZksD)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0094-feature/phash-usama

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :sparkles:       |
| Files Changed | 195              |
|          Date | October 15, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/0AOsZksD)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0094-refactor/develop

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :recycle:        |
| Files Changed | 2                |
|          Date | October 22, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/0AOsZksD)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0095-feature/phash-usama

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :sparkles:       |
| Files Changed | 15               |
|          Date | October 15, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/0AOsZksD)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0096-feature/phash-usama

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :sparkles:       |
| Files Changed | 4                |
|          Date | October 15, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/0AOsZksD)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0097-feature/phash-usama

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :sparkles:       |
| Files Changed | 4                |
|          Date | October 16, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/0AOsZksD)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0098-feature/phash-usama

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :sparkles:       |
| Files Changed | 15               |
|          Date | October 16, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/0AOsZksD)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0099-feature/phash-usama

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :rocket:         |
| Files Changed | 3                |
|          Date | October 16, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/0AOsZksD)

[Back to ToC](#table-of-contents)

### istyak4-medialab-0101-feature/phash-istyak

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :hammer:         |
| Files Changed | 32               |
|          Date | October 21, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/0AOsZksD)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0100-feature/phash-usama

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :lipstick:       |
| Files Changed | 3                |
|          Date | October 19, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/ybvt7QeN)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0101-feature/phash-usama

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :sparkles:       |
| Files Changed | 27               |
|          Date | October 22, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/ybvt7QeN)

### LT10619647-medialab-0102-feature/phash-usama

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :books:          |
| Files Changed | 27               |
|          Date | October 22, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/ybvt7QeN)

[Back to ToC](#table-of-contents)

### istyak4-medialab-0103-feature/phash-istyak

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :tada:           |
| Files Changed | 24               |
|          Date | October 22, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/ybvt7QeN)

[Back to ToC](#table-of-contents)

### istyak4-medialab-0104-feature/phash-istyak

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :tada:           |
| Files Changed | 7                |
|          Date | October 23, 2020 |
### LT10619647-medialab-0104-develop-ph

|   Particulars | Description         |
| ------------: | ------------------- |
|          Type | :children_crossing: |
| Files Changed | 64                  |
|          Date | October 23, 2020    |

Refer the comment in [Trello Card](https://trello.com/c/ybvt7QeN)

[Back to ToC](#table-of-contents)

### istyak4-medialab-0109-feature/phash-istyak

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :tada:           |
| Files Changed | 19               |
|          Date | October 29, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/d8asspYR)

[Back to ToC](#table-of-contents)

### Pending Tasks
### LT10619647-medialab-0105-develop-ph

|   Particulars | Description         |
| ------------: | ------------------- |
|          Type | :children_crossing: |
| Files Changed | 22                  |
|          Date | October 23, 2020    |

Refer the comment in [Trello Card](https://trello.com/c/ybvt7QeN)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0106-feature/phash-usama

|   Particulars | Description         |
| ------------: | ------------------- |
|          Type | :children_crossing: |
| Files Changed | 22                  |
|          Date | October 27, 2020    |

Refer the comment in [Trello Card](https://trello.com/c/ybvt7QeN)

### LT10619647-medialab-0107-feature/perceptual-hash

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :recycle:        |
| Files Changed | 5                |
|          Date | October 27, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/ybvt7QeN)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0107-feature/perceptual-hash

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :rocket:         |
| Files Changed | 3                |
|          Date | October 27, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/ybvt7QeN)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0107-feature/phash-usama

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :construction:   |
| Files Changed | 23               |
|          Date | October 28, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/d8asspYR)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0108-feature/phash-usama

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :sparkles:       |
| Files Changed | 14               |
|          Date | October 29, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/d8asspYR)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0109-feature/phash-usama

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :poop:           |
| Files Changed | 14               |
|          Date | October 29, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/d8asspYR)

[Back to ToC](#table-of-contents)

### istyak4-medialab-0111-feature/phash-usama

|   Particulars | Description      |
| ------------: | ---------------- |
|          Type | :tada:           |
| Files Changed | 6                |
|          Date | October 30, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/d8asspYR)

[Back to ToC](#table-of-contents)

### LT10619647-medialab-0112-feature/phash-usama

|   Particulars | Description       |
| ------------: | ----------------- |
|          Type | :recycle:         |
| Files Changed | 7                 |
|          Date | November 01, 2020 |

Refer the comment in [Trello Card](https://trello.com/c/d8asspYR)


[Back to ToC](#table-of-contents)

### Pending Tasks

---

Refer Trello Cards for each module using the table below

| Module Name                 | Link to Trello Card                                                                      |
| --------------------------- | ---------------------------------------------------------------------------------------- |
| LTI MediaLabs               | [LTI MediaLab Development and Integration](https://trello.com/c/a40TzAYm)                |
| Content-Aware Deduplication | [Content-Aware Deduplication Development and Integration](https://trello.com/c/mCq3IRQx) |
| WSO2                        | [WSO2 Authentication](https://trello.com/c/oLHkeqY4)                                     |
| Killbill                    | [Killbill Integration](https://trello.com/c/6aotM5lm)                                    |
| Automation Testing Suite    | [Suite.st Integration](https://trello.com/c/nMdcWt0a)                                    |
| Perceptual Hashing          | [Demonstration for Discovery Demo](https://trello.com/c/xn6y86nk)                        |
| Deployment                  | [Board](https://trello.com/invite/b/MJPUu1mT/84545ccc834783fbaa885d15d6d7d5e1/ui)        |

Trello Cards in `CHANGELOG` list

| Date Range                           | Trello Card                                |
| ------------------------------------ | ------------------------------------------ |
| October 14, 2020 to October 16, 2020 | [Week 10.3](https://trello.com/c/0AOsZksD) |
| October 19, 2020 to October 23, 2020 | [Week 10.3](https://trello.com/c/ybvt7QeN) |
| October 27, 2020 to October 30, 2020 | [Week 10.3](https://trello.com/c/d8asspYR) |

[Back to ToC](#table-of-contents)
