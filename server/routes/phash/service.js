const axios = require('axios')
const https = require('https')

const CONFIG = require('../../config/phash/config.json')
const PHASH_LOGGING = require('../../config/phash/logging.json')

const httpsAgent = new https.Agent({ keepAlive: true, rejectUnauthorized: false })

function getEndpoint(endpointConfig) {
  const _ENVIRONMENT = true // <- DEV Environment
  // const _ENVIRONMENT = false // <- PROD Environment

  const PROTOCOL = `${CONFIG.PROTOCOL}`
  const DOMAIN = (_ENVIRONMENT)
    ? `${CONFIG.DOMAIN.DEV.HOSTNAME}:${CONFIG.DOMAIN.DEV.PORT}`
    : `${CONFIG.DOMAIN.PROD.SERVICE}.${CONFIG.DOMAIN.PROD.NAMESPACE}.${CONFIG.DOMAIN.PROD.CLUSTER}:${CONFIG.DOMAIN.PROD.PORT}`
  const ENDPOINT = endpointConfig.endpoint

  return `${PROTOCOL}://${DOMAIN}/${ENDPOINT}`
}

function processBucket(payload) {
  console.log(`[PHASH Service]    : ${PHASH_LOGGING.PROCESS_BUCKET.ATTEMPT}`)

  if (!payload) {
    console.log(`[PHASH Service]    : ${PHASH_LOGGING.PROCESS_BUCKET.FAILED}`)
    console.log(`[PHASH Service]    : ${PHASH_LOGGING.GENERAL.PAYLOAD.UNDEFINED}`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `${PHASH_LOGGING.GENERAL.PAYLOAD.ERROR}` },
      },
    })
  }

  const endpointConfig = {
    endpoint: CONFIG.ENDPOINT.BUCKET_LOCATION
  }

  const url = getEndpoint(endpointConfig)

  const axiosExtras = {
    ...payload,
    httpsAgent
  }

  return axios({
    method: CONFIG.METHOD.POST,
    ...axiosExtras,
    url,
  })
}

function getDataFromMatrix(payload) {
  console.log(`[PHASH Service]    : ${PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.ATTEMPT}`)
  const endpointConfig = {
    endpoint: CONFIG.ENDPOINT.GET_MATRIX_FROM_TOPIC
  }

  const url = getEndpoint(endpointConfig)

  const axiosExtras = {
    ...payload,
    httpsAgent
  }

  return axios({
    method: CONFIG.METHOD.GET,
    ...axiosExtras,
    url,
  })
}

function getComparisonResult(payload) {
  console.log(`[PHASH Service]    : ${PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.ATTEMPT}`)
  const endpointConfig = {
    endpoint: CONFIG.ENDPOINT.FETCH_RESULT.COORDINATE
  }

  const url = getEndpoint(endpointConfig) + `?${CONFIG.ENDPOINT.FETCH_RESULT.IDS}=${payload.params.inspectedVideoIndex},${payload.params.referenceVideoIndex}`

  const axiosExtras = {
    ...payload,
    httpsAgent
  }

  return axios({
    method: CONFIG.METHOD.GET,
    ...axiosExtras,
    url,
  })
}

module.exports = {
  processBucket,
  getDataFromMatrix,
  getComparisonResult
}
