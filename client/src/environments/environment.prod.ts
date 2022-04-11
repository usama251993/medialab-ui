export const environment = {
  production: true,
  EXPRESS: {
    PROTOCOL: 'http',
    // DOMAIN: '34.71.93.171:3000',
    DOMAIN: 'localhost:8001/api/v1/namespaces/medialab/services/http:server:3000/proxy',
    CONTEXT: {
      ROOT: 'api',
      WSO2: 'wso2',
      KB: 'kb'
    },
    ENDPOINT: {
      WSO2: {
        LOGIN: 'login',
        REGISTER: 'register',
        USER: 'getUserDetails'
      },
      KB: {
        CREATEACCOUNT: 'createAccount',
        ACCOUNT: 'getAccountDetails'
      }
    }
  }
}
