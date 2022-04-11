const axios = require('axios')
const https = require('https')
const atob = require('atob')

const CONFIG = require('../../config/killbill.json')

function getKBEndpoint(endpointConfig) {
  const PROTOCOL = `${CONFIG.PROTOCOL}`
  const DOMAIN = `${CONFIG.DOMAIN.HOSTNAME}:${CONFIG.DOMAIN.PORT}`
  const VERSION = endpointConfig.version
  const IDENTITY = `${CONFIG.IDENTITY.API}`
  const CONTEXT = endpointConfig.context
  const ENDPOINT = endpointConfig.endpoint
  return `${PROTOCOL}://${DOMAIN}/${VERSION}/${IDENTITY}/${CONTEXT}/${ENDPOINT}`.replace(/\/{1,}$/, '/')
}

function createAccount(payload) {
  console.log('[Killbill Service] createAccount')
  const endpointConfig = {
    context: CONFIG.CONTEXT.ACCOUNTS,
    version: CONFIG.VERSION['v1.0'],
    endpoint: ''
  }
  const endpoint = getKBEndpoint(endpointConfig)

  const axiosExtras = {
    headers: { ...payload.headers },
    auth: {
      ...payload.auth,
      password: atob(payload.auth.password)
    },
    params: { ...payload.params },
    data: { ...payload.data },
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }
  return axios({
    method: 'post',
    ...axiosExtras,
    url: endpoint
  })
}

// function createTags(payload) {
//   console.log('[Killbill Service] createTags')
//   const endpointMap = {
//     operation: 'createTags',
//     payload: {
//       accountID: payload.accountID
//     }
//   }
//   const endpoint = getEndpoint(endpointMap)
//   const axiosExtras = {}
// }

// function createPaymentMethod(payload) {
//   console.log('[Killbill Service] createPaymentMethod')
//   const endpointMap = {
//     operation: 'createPaymentMethod',
//     payload: {
//       accountID: payload.accountID
//     },
//     queryParams: [
//       { key: 'isDefault', value: false },
//       { key: 'payAllUnpaidInvoices', value: false }
//     ]
//   }
//   const endpoint = getEndpoint(endpointMap)
//   const axiosExtras = {}
// }

function fetchAccountDetails(payload) {
  console.log('[Killbill Service] retrieveAccountID')
  const endpoint = 'http://104.197.153.32:8080/1.0/kb/accounts'
  const axiosExtras = {
    headers: {
      // 'cookie': 'BCSI-CS-6b4a1159761201ae=1'
      ...payload.headers
    },
    auth: {
      ...payload.auth,
      password: atob(payload.auth.password)
    },
    params: { ...payload.params },
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }
  return axios({
    method: 'get',
    ...axiosExtras,
    url: endpoint
  })
}

// function fetchTenantDetails(payload) {
//   console.log('[Killbill Service] fetchTenantDetails')
//   return axios({
//     method: 'get',
//     url: 'http://104.197.153.32:8080/1.0/kb/tenants',
//     // headers: {...payload.headers},
//     // auth: { ...payload.auth },
//     // params: {...payload.params}
//     ...payload
//   })
// }

module.exports = {
  createAccount,
  // createTags,
  // createPaymentMethod,
  fetchAccountDetails,
  // fetchTenantDetails
}
