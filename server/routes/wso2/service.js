const axios = require('axios')
const https = require('https')
const atob = require('atob')
const CONFIG = require('../../config/wso2.json')

function generateUsername(username) {
  return username.split('@').join('-')
}

function getEndpoint(endpointConfig) {
  const PROTOCOL = `${CONFIG.PROTOCOL}`
  const DOMAIN = `${CONFIG.DOMAIN.HOSTNAME}:${CONFIG.DOMAIN.PORT}`
  const IDENTITY = `${CONFIG.IDENTITY.API}/${CONFIG.IDENTITY.IDENTITY}`
  const CONTEXT = endpointConfig.context
  const VERSION = endpointConfig.version
  const ENDPOINT = endpointConfig.endpoint
  return `${PROTOCOL}://${DOMAIN}/${IDENTITY}/${CONTEXT}/${VERSION}/${ENDPOINT}`
}

function register(payload) {
  console.log(`[WSO2 Service]    : Service attempting registration`)

  if (!payload) {
    console.log(`[WSO2 Service]    : registration failed`)
    console.log(`[WSO2 Service]    : Payload undefined`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `Payload Error` }
      }
    })
  }

  const endpointConfig = {
    context: CONFIG.CONTEXT.REGISTER,
    version: CONFIG.VERSION['v1.0'],
    endpoint: CONFIG.ENDPOINT.REGISTER
  }
  const url = getEndpoint(endpointConfig)
  const axiosExtras = {
    ...payload,
    auth: {
      ...payload.auth,
      password: atob(payload.auth.password)
    },
    data: {
      user: {
        username: generateUsername(payload.data.username),
        realm: CONFIG.REALM.PRIMARY,
        password: payload.data.password,
        claims: [
          { uri: CONFIG.CLAIMS.GIVENNAME, value: payload.data.givenname },
          { uri: CONFIG.CLAIMS.LASTNAME, value: payload.data.lastname },
          { uri: CONFIG.CLAIMS.EMAIL, value: payload.data.username },
          { uri: CONFIG.CLAIMS.ORGANIZATION, value: payload.data.organization },
          { uri: CONFIG.CLAIMS.COUNTRY, value: payload.data.country }
        ]
      }
    },
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }

  return axios({
    method: CONFIG.METHOD.POST,
    ...axiosExtras,
    url
  })
}

function login(payload) {
  console.log(`[WSO2 Service]    : Service attempting login`)

  if (!payload) {
    console.log(`[WSO2 Service]    : login failed`)
    console.log(`[WSO2 Service]    : Payload undefined`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `Payload Error` }
      }
    })
  }

  const endpointConfig = {
    context: CONFIG.CONTEXT.LOGIN,
    version: CONFIG.VERSION['v1.1'],
    endpoint: CONFIG.ENDPOINT.LOGIN
  }
  const url = getEndpoint(endpointConfig)
  const axiosExtras = {
    ...payload,
    auth: {
      ...payload.auth,
      password: atob(payload.auth.password)
    },
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }

  return axios({
    method: CONFIG.METHOD.POST,
    ...axiosExtras,
    url
  })
}

function fetchUserDetails(payload) {
  console.log(`[WSO2 Service]    : Service attempting login`)
  const url = 'https://34.71.215.40:9443/api/identity/user/v1.0/me/'

  if (!payload) {
    console.log(`[WSO2 Service]    : login failed`)
    console.log(`[WSO2 Service]    : Payload undefined`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `Payload Error` }
      }
    })
  }
  const axiosExtras = {
    ...payload,
    auth: {
      ...payload.auth,
      password: atob(payload.auth.password)
    },
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }

  return axios({
    method: 'get',
    ...axiosExtras,
    url
  })
}

module.exports = {
  login,
  register,
  fetchUserDetails
}
