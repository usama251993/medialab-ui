const axios = require('axios')
const https = require('https')
const CONFIG = require('../../config/suite-st.json')

function getEndpoint(endpointConfig) {
  const PROTOCOL = `${CONFIG.PROTOCOL}`
  const DOMAIN = `${CONFIG.DOMAIN.HOSTNAME}`
  const VERSION = `${CONFIG.VERSION}`
  const ENDPOINT = endpointConfig.endpoint
  const IDENTITY = `${CONFIG.IDENTITY.API}`
  return `${PROTOCOL}://${DOMAIN}/${IDENTITY}/${VERSION}/${ENDPOINT}`
}

function application(payload) {

  if (!payload) {
    console.log(`[Suitest Service]    : Application List failed`)
    console.log(`[Suitest Service]    : Payload undefined`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `Payload Error` }
      }
    })
  }

  const endpointConfig = {
    endpoint: CONFIG.ENDPOINT.APP
  }

  const url = getEndpoint(endpointConfig)

  const axiosExtras = {
    headers: { ...payload.headers },
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }

  return axios({
    method: 'get',
    ...axiosExtras,
    url
  })
}

function finishedTestPackRuns(payload) {

  if (!payload) {
    console.log(`[Suitest Service]    : Finished Test Pack Run List failed`)
    console.log(`[Suitest Service]    : Payload undefined`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `Payload Error` }
      }
    })
  }

  const endpointConfig = {
    endpoint: CONFIG.CONTEXT.RESULTS + "/" + CONFIG.CONTEXT.FINISHED
  }

  const url = getEndpoint(endpointConfig)

  const axiosExtras = {
    headers: { ...payload.headers },
    params: { limit: 100 },
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }

  return axios({
    method: 'get',
    ...axiosExtras,
    url
  })
}

function testPackList(payload) {

  if (!payload) {
    console.log(`[Suitest Service]    : Test Pack List failed`)
    console.log(`[Suitest Service]    : Payload undefined`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `Payload Error` }
      }
    })
  }

  const endpointConfig = {
    endpoint: `${CONFIG.CONTEXT.APP}/${payload.data.appId}/${CONFIG.CONTEXT.VERSION}/${payload.data.versions[0].id}/${CONFIG.CONTEXT.TESTPACK}`
  }

  const url = getEndpoint(endpointConfig)
  const axiosExtras = {
    headers: { ...payload.headers },
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }

  return axios({
    method: 'get',
    ...axiosExtras,
    url
  })

}

function testList(payload) {

  if (!payload) {
    console.log(`[Suitest Service]    : Test List failed`)
    console.log(`[Suitest Service]    : Payload undefined`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `Payload Error` }
      }
    })
  }

  const endpointConfig = {
    endpoint: `${CONFIG.CONTEXT.APP}/${payload.data.appId}/${CONFIG.CONTEXT.VERSION}/${payload.data.versions[0].id}/${CONFIG.CONTEXT.TEST} `
  }

  const url = getEndpoint(endpointConfig)

  const axiosExtras = {
    headers: { ...payload.headers },
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }

  return axios({
    method: 'get',
    ...axiosExtras,
    url
  })
}

function testPackExecution(payload) {   ///Need to Body

  if (!payload) {
    console.log(`[Suitest Service]    : Test Pack Execution failed`)
    console.log(`[Suitest Service]    : Payload undefined`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `Payload Error` }
      }
    })
  }

  const endpointConfig = {
    endpoint: `${CONFIG.CONTEXT.TESTPACK}/${payload.route}`
  }

  const url = getEndpoint(endpointConfig)

  const axiosExtras = {
    ...payload,
    headers: { ...payload.headers },
    data: { ...payload.data },
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }

  return axios({
    method: 'post',
    ...axiosExtras,
    url
  })
}

function testPackExeResult(payload) {
  var x = null
  if (!payload) {
    console.log(`[Suitest Service]    : Test Pack Run Result fetch failed`)
    console.log(`[Suitest Service]    : Payload undefined`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `Payload Error` }
      }
    })
  }

  const endpointConfig = {
    endpoint: `${CONFIG.CONTEXT.TESTPACKRUN}/${payload.data.testPackRunId}`
  }

  const url = getEndpoint(endpointConfig)
  console.log(url)
  const axiosExtras = {
    headers: { ...payload.headers },
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }

  return axios({
    method: 'get',
    ...axiosExtras,
    url
  })
}

function configuration(payload) {
  if (!payload) {
    console.log(`[Suitest Service]    : Configuration List fetch failed`)
    console.log(`[Suitest Service]    : Payload undefined`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `Payload Error` }
      }
    })
  }

  const endpointConfig = {
    endpoint: `${CONFIG.CONTEXT.APP}/${payload.data.appId}/${CONFIG.CONTEXT.VERSION}/${payload.data.versions[0].id}/${CONFIG.CONTEXT.CONFIG}`
  }

  const url = getEndpoint(endpointConfig)

  const axiosExtras = {
    headers: { ...payload.headers },
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }

  return axios({
    method: 'get',
    ...axiosExtras,
    url
  })
}

function devices(payload) {
  if (!payload) {
    console.log(`[Suitest Service]    : Devices fetch failed`)
    console.log(`[Suitest Service]    : Payload undefined`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `Payload Error` }
      }
    })
  }

  const endpointConfig = {
    endpoint: `${CONFIG.CONTEXT.DEVICES}`
  }

  const url = getEndpoint(endpointConfig)

  const axiosExtras = {
    headers: { ...payload.headers },
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }

  return axios({
    method: 'get',
    ...axiosExtras,
    url
  })
}

function testPackStop(payload) {   ///Need to Body

  if (!payload) {
    console.log(`[Suitest Service]    : Test Pack Execution failed`)
    console.log(`[Suitest Service]    : Payload undefined`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `Payload Error` }
      }
    })
  }

  const endpointConfig = {
    endpoint: `${CONFIG.CONTEXT.TESTPACKRUN}/${payload.route}/${CONFIG.CONTEXT.CANCEL}`
  }

  const url = getEndpoint(endpointConfig)

  const axiosExtras = {
    ...payload,
    headers: { ...payload.headers },
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }

  return axios({
    method: 'post',
    ...axiosExtras,
    url
  })
}

module.exports = {
  application,
  finishedTestPackRuns,
  testPackList,
  testList,
  testPackExecution,
  testPackExeResult,
  configuration,
  devices,
  testPackStop
}
