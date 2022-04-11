export const DEV_ENDPOINT_CONSTANTS = {
  PROTOCOL: 'http',
  DOMAIN: 'localhost:3000',
}

export const PROD_ENDPOINT_CONSTANTS = {
  PROTOCOL: 'http',
  DOMAIN: 'localhost:3000'
}

export const COMMON_ENDPOINT_CONSTANTS = {
  CONTEXT: {
    ROOT: 'api',
    WSO2: 'wso2',
    DEDUP: 'dedup',
    PHASH: 'phash',
    IMAGE_ANALYTICS: 'image-analytics',
    KB: 'kb',
    STRIPE: 'stripe',
    MAIL: 'mail'
  },
  ENDPOINT: {
    WSO2: {
      LOGIN: 'login',
      REGISTER: 'register',
      USERDETAILS: 'getUserDetails',
      VERIFY: 'validate-code',
      RESEND: 'resend-code'
    },
    KB: {
      CREATEACCOUNT: 'createAccount',
      ACCOUNT: 'getAccountDetails',
      PLANS: 'fetchBasePlans',
      CREATESUBSCRIPTION: 'createSubscription',
      CREATEACCOUNTTAGS: 'createAccountTags',
      FETCHPAYMENTMETHOD: 'getPaymentMethodsForAccount',
      ADDPAYMENTMETHOD: 'addPaymentMethod',
      INVOICES: 'getInvoicesForAccount'
    },
    DEDUP: {
      PROCESSBUCKET: 'processBucket',
      FETCHRESULT: 'fetchResult'
    },
    PHASH: {
      PROCESSBUCKET: 'processBucket',
      FETCHOVERVIEW: 'fetchOverview',
      FETCHRESULT: 'fetchResult'
    },
    IMAGE_ANALYTICS: {
      PROCESSBUCKET: 'processBucket',
      FETCHRESULT: 'fetchResult'
    },
    STRIPE: {
      ADDCARD: 'addCardToStripe'
    },
    MAIL: {
      SUBMITFEEDBACK: 'submitFeedback',
      SUBMITCONTACT: 'submitContact'
    }
  }
}
