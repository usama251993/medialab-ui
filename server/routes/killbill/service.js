const axios = require('axios')
const https = require('https')
const atob = require('atob')

const CONFIG = require('../../config/killbill.json')

// const URL = 'http://localhost:8080/1.0/kb/' // <- DEV Environment
const _URL = 'http://killbill.default.svc.cluster.local:8080/1.0/kb/' // <- PROD Environment

const httpsAgent = new https.Agent({ keepAlive: true, rejectUnauthorized: false })

function getKBEndpoint(endpointConfig) {
  const PROTOCOL = `${CONFIG.PROTOCOL}`
  const DOMAIN = `${CONFIG.DOMAIN.HOSTNAME}:${CONFIG.DOMAIN.PORT}`
  const VERSION = endpointConfig.version
  const IDENTITY = `${CONFIG.IDENTITY.API}`
  const CONTEXT = endpointConfig.context
  const endpoint = endpointConfig.endpoint
  return `${PROTOCOL}://${DOMAIN}/${VERSION}/${IDENTITY}/${CONTEXT}/${ENDPOINT}`.replace(/\/{1,}$/, '/')
}

function createAccount(payload) {
  console.log('[Killbill Service] createAccount')
  const url = _URL + 'accounts'

  const method = CONFIG.METHOD.POST

  const axiosExtras = {
    headers: { ...payload.headers },
    auth: { ...payload.auth },
    params: null,
    data: { ...payload.data },
    httpsAgent
  }
  return axios({ method, url, ...axiosExtras })
}

function createPaymentMethod(payload) {
  console.log('[Killbill Service] createPaymentMethod')
  const url = _URL + 'accounts/' + payload.route + '/paymentMethods'

  const method = CONFIG.METHOD.POST

  const axiosExtras = {
    headers: { ...payload.headers },
    auth: { ...payload.auth },
    params: { ...payload.params },
    data: { ...payload.data },
    httpsAgent
  }
  return axios({ method, url, ...axiosExtras })
}

function createTags(payload) {
  console.log('[Killbill Service] createTags')
  const url = _URL + 'accounts/' + payload.route + '/tags'

  const method = CONFIG.METHOD.POST

  const axiosExtras = {
    headers: { ...payload.headers },
    auth: { ...payload.auth },
    data: ["00000000-0000-0000-0000-000000000001"],
    params: null,
    httpsAgent
  }
  return axios({ method, url, ...axiosExtras })
}

function fetchAccountDetails(payload) {
  console.log('[Killbill Service] retrieveAccountID')
  const url = _URL + 'accounts'

  const method = CONFIG.METHOD.GET

  const axiosExtras = {
    headers: { ...payload.headers },
    auth: { ...payload.auth },
    params: { ...payload.params },
    httpsAgent
  }
  return axios({ method, url, ...axiosExtras })
}

function fetchBasePlans(payload) {
  console.log('[Killbill Service] retrieve Base Plans')
  const url = _URL + 'catalog/availableBasePlans'

  const method = CONFIG.METHOD.GET

  const axiosExtras = {
    headers: { ...payload.headers },
    auth: { ...payload.auth },
    params: { ...payload.params },
    httpsAgent
  }
  return axios({ method, url, ...axiosExtras })
}

function fetchInvoicesForAccount(payload) {
  console.log('[Killbill Service] retrieve Invoices For Account')
  const url = _URL + 'accounts/' + payload.route + '/invoices'

  const method = CONFIG.METHOD.GET

  const axiosExtras = {
    headers: { ...payload.headers },
    auth: { ...payload.auth },
    params: { ...payload.params },
    httpsAgent
  }
  return axios({ method, url, ...axiosExtras })
}

function fetchPaymentMethodsForAccount(payload) {
  console.log('[Killbill Service] retrieve Payment Methods For Account')
  const url = _URL + 'accounts/' + payload.route + '/paymentMethods?withPluginInfo=false&includedDeleted=false&audit=NONE'

  const method = CONFIG.METHOD.GET

  const axiosExtras = {
    headers: { ...payload.headers },
    auth: { ...payload.auth },
    params: { ...payload.params },
    httpsAgent
  }
  return axios({ method, url, ...axiosExtras })
}

function processPayment(payload) {
  console.log('[Killbill Service] Process Payment For Account')
  const url = _URL + 'accounts/' + payload.route + '/payments'

  const method = CONFIG.METHOD.POST

  const axiosExtras = {
    headers: { ...payload.headers },
    auth: { ...payload.auth },
    params: { ...payload.params },
    httpsAgent
  }
  return axios({ method, url, ...axiosExtras })
}

function createSubscription(payload) {
  console.log('[Killbill Service] Create Subscription')
  const url = _URL + 'subscriptions?renameKeyIfExistsAndUnused=true&migrated=false&callCompletion=false&callTimeoutSec=3'

  const method = CONFIG.METHOD.POST

  const axiosExtras = {
    headers: { ...payload.headers },
    auth: { ...payload.auth },
    params: { ...payload.params },
    httpsAgent
  }
  return axios({ method, url, ...axiosExtras })
}

module.exports = {
  createAccount,
  createTags,
  processPayment,
  createPaymentMethod,
  fetchAccountDetails,
  fetchBasePlans,
  createSubscription,
  fetchInvoicesForAccount,
  fetchPaymentMethodsForAccount
  // fetchTenantDetails
}
