export const environment = {
  production: false,
  EXPRESS: {
    PROTOCOL: 'http',
    DOMAIN: 'localhost:3000',
    CONTEXT: {
      ROOT: 'api',
      WSO2: 'wso2',
      DEDUP: 'dedup',
      PHASH: 'phash',
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
      MAIL: {
        SUBMITFEEDBACK: 'submitFeedback',
        SUBMITCONTACT: 'submitContact'
      },
      DEDUP: {
        PROCESSBUCKET: 'processBucket',
        FETCHRESULT: 'fetchResult'
      },
      STRIPE: {
        ADDCARD: 'addCardToStripe'
      },
      PHASH: {
        PROCESSBUCKET: 'processBucket',
        FETCHRESULT: 'fetchResult'
      }
    }
  }
}
