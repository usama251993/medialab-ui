export const environment = {
  production: true,
  EXPRESS: {
    // PROTOCOL: 'https',
    PROTOCOL: 'http',
    // DOMAIN: '34.96.111.37',
    DOMAIN: 'localhost:3000',
    CONTEXT: {
      ROOT: 'api',
      WSO2: 'wso2',
      DEDUP: 'dedup',
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
      STRIPE: {
        ADDCARD: 'addCardToStripe'
      },
      MAIL: {
        SUBMITCONTACT: 'submitContact',
        SUBMITFEEDBACK: 'submitFeedback'
      }
    }
  }
}
