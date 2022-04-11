const axios = require('axios')
const https = require('https')
const atob = require('atob')

const CONFIG = require('../../config/wso2/config.json')
const WSO2_LOGGING = require('../../config/wso2/logging.json')
const WSO2_STRINGS = require('../../config/wso2/constants.json')

const httpsAgent = new https.Agent({ keepAlive: true, rejectUnauthorized: false })

function getEndpoint(endpointConfig) {
  // const _ENVIRONMENT = true // <- DEV Environment
  const _ENVIRONMENT = false // <- PROD Environment

  const PROTOCOL = `${CONFIG.PROTOCOL}`
  const DOMAIN = (_ENVIRONMENT)
    ? `${CONFIG.DOMAIN.DEV.HOSTNAME}:${CONFIG.DOMAIN.DEV.PORT}`
    : `${CONFIG.DOMAIN.PROD.SERVICE}.${CONFIG.DOMAIN.PROD.NAMESPACE}.${CONFIG.DOMAIN.PROD.CLUSTER}:${CONFIG.DOMAIN.PROD.PORT}`
  const IDENTITY = `${CONFIG.IDENTITY.API}/${CONFIG.IDENTITY.IDENTITY}`
  const CONTEXT = endpointConfig.context
  const VERSION = endpointConfig.version
  const ENDPOINT = endpointConfig.endpoint

  return `${PROTOCOL}://${DOMAIN}/${IDENTITY}/${CONTEXT}/${VERSION}/${ENDPOINT}`
}

function register(payload) {
  console.log(`[WSO2 Service]    : ${WSO2_LOGGING.REGISTER.ATTEMPT}`)

  if (!payload) {
    console.log(`[WSO2 Service]    : ${WSO2_LOGGING.REGISTER.FAILED}`)
    console.log(`[WSO2 Service]    : ${WSO2_LOGGING.GENERAL.PAYLOAD.UNDEFINED}`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `${WSO2_LOGGING.GENERAL.PAYLOAD.ERROR}` },
      },
    })
  }

  const endpointConfig = {
    context: CONFIG.CONTEXT.USER,
    version: CONFIG.VERSION.v1_0,
    endpoint: CONFIG.ENDPOINT.REGISTER
  }

  const url = getEndpoint(endpointConfig)

  const axiosExtras = {
    ...payload,
    auth: {
      ...payload.auth,
      password: atob(payload.auth.password),
    },
    data: {
      user: {
        username: payload.data.email.split('@').join('-'),
        realm: payload.data.email.toLowerCase().endsWith(WSO2_STRINGS.EMAIL.LNTINFOTECH) ? CONFIG.USER_STORE.SALES : CONFIG.USER_STORE.CLIENT,
        // realm: CONFIG.USER_STORE.PRIMARY,
        password: payload.data.password,
        claims: [
          { uri: `${CONFIG.CLAIMS.PREFIX}/${CONFIG.CLAIMS.GIVEN_NAME}`, value: payload.data.givenname },
          { uri: `${CONFIG.CLAIMS.PREFIX}/${CONFIG.CLAIMS.LAST_NAME}`, value: payload.data.lastname },
          { uri: `${CONFIG.CLAIMS.PREFIX}/${CONFIG.CLAIMS.EMAIL_ADDRESS}`, value: payload.data.email },
          { uri: `${CONFIG.CLAIMS.PREFIX}/${CONFIG.CLAIMS.ORGANIZATION}`, value: payload.data.organization },
          { uri: `${CONFIG.CLAIMS.PREFIX}/${CONFIG.CLAIMS.COUNTRY}`, value: payload.data.country },
        ],
      },
    },
    httpsAgent
  }

  return axios({
    method: CONFIG.METHOD.POST,
    ...axiosExtras,
    url,
  })
}

function login(payload) {
  console.log(`[WSO2 Service]    : ${WSO2_LOGGING.LOGIN.ATTEMPT}`)

  if (!payload) {
    console.log(`[WSO2 Service]    : ${WSO2_LOGGING.LOGIN.FAILED}`)
    console.log(`[WSO2 Service]    : ${WSO2_LOGGING.GENERAL.PAYLOAD.UNDEFINED}`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `${WSO2_LOGGING.GENERAL.PAYLOAD.ERROR}` },
      },
    })
  }

  const endpointConfig = {
    context: CONFIG.CONTEXT.AUTH,
    version: CONFIG.VERSION.v1_1,
    endpoint: CONFIG.ENDPOINT.LOGIN
  }

  const url = getEndpoint(endpointConfig)

  const axiosExtras = {
    ...payload,
    auth: {
      ...payload.auth,
      password: atob(payload.auth.password),
    },
    httpsAgent
  }

  return axios({
    method: CONFIG.METHOD.POST,
    ...axiosExtras,
    url,
  })
}

function fetchUserDetails(payload) {
  console.log(`[WSO2 Service]    : ${WSO2_LOGGING.USER.ATTEMPT}`)

  if (!payload) {
    console.log(`[WSO2 Service]    : ${WSO2_LOGGING.USER.FAILED}`)
    console.log(`[WSO2 Service]    : ${WSO2_LOGGING.GENERAL.PAYLOAD.UNDEFINED}`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `${WSO2_LOGGING.GENERAL.PAYLOAD.ERROR}` },
      },
    })
  }

  const endpointConfig = {
    context: CONFIG.CONTEXT.USER,
    version: CONFIG.VERSION.v1_0,
    endpoint: CONFIG.ENDPOINT.REGISTER
  }

  const url = getEndpoint(endpointConfig)

  const axiosExtras = {
    ...payload,
    auth: {
      ...payload.auth,
      password: atob(payload.auth.password),
    },
    httpsAgent
  }

  return axios({
    method: CONFIG.METHOD.GET,
    ...axiosExtras,
    url,
  })
}

function validateCode(payload) {
  console.log(`[WSO2 Service]    : ${WSO2_LOGGING.CODE.VALIDATE.ATTEMPT}`)

  if (!payload) {
    console.log(`[WSO2 Service]    : ${WSO2_LOGGING.CODE.VALIDATE.FAILED}`)
    console.log(`[WSO2 Service]    : ${WSO2_LOGGING.GENERAL.PAYLOAD.UNDEFINED}`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `${WSO2_LOGGING.GENERAL.PAYLOAD.ERROR}` },
      },
    })
  }

  const endpointConfig = {
    context: CONFIG.CONTEXT.USER,
    version: CONFIG.VERSION.v1_0,
    endpoint: CONFIG.ENDPOINT.VALIDATE_CODE
  }

  const url = getEndpoint(endpointConfig)

  const axiosExtras = {
    ...payload,
    auth: {
      ...payload.auth,
      password: atob(payload.auth.password),
    },
    data: {
      code: payload.data.token,
    },
    httpsAgent
  }

  return axios({
    method: CONFIG.METHOD.POST,
    ...axiosExtras,
    url,
  })
}

function resendCode(payload) {
  console.log(`[WSO2 Service]    : ${WSO2_LOGGING.CODE.RESEND.ATTEMPT}`)

  if (!payload) {
    console.log(`[WSO2 Service]    : ${WSO2_LOGGING.CODE.RESEND.FAILED}`)
    console.log(`[WSO2 Service]    : ${WSO2_LOGGING.GENERAL.PAYLOAD.UNDEFINED}`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `${WSO2_LOGGING.GENERAL.PAYLOAD.ERROR}` },
      },
    })
  }

  const endpointConfig = {
    context: CONFIG.CONTEXT.USER,
    version: CONFIG.VERSION.v1_0,
    endpoint: CONFIG.ENDPOINT.RESEND_CODE
  }

  const url = getEndpoint(endpointConfig)

  const axiosExtras = {
    ...payload,
    auth: {
      ...payload.auth,
      password: atob(payload.auth.password),
    },
    data: {
      user: {
        ...payload.data,
      },
    },
    httpsAgent
  }

  return axios({
    method: CONFIG.METHOD.POST,
    ...axiosExtras,
    url,
  })
}

module.exports = {
  login,
  register,
  fetchUserDetails,
  validateCode,
  resendCode,
}
