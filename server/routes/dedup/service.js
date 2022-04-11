const axios = require('axios')
const https = require('https')

function processBucket(payload) {
  console.log(`[Dedup Service]    : processBucket`)

  if (!payload) {
    console.log(`[Dedup Service]    : login failed`)
    console.log(`[Dedup Service]    : Payload undefined`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `Payload Error` }
      }
    })
  }

  const axiosExtras = {
    method: 'post',
    ...payload,

    // Ensure `kubectl port-forward` for spring boot is running in a separate terminal
    // to access this URL
    // If the browser is unable to connect after running `kubectl port-forward`,
    // disable Symantec WSS Agent
    // url: 'http://localhost:8085/bucketlocation', // -> for dev
    url: 'http://medialab-springboot.default.svc.cluster.local:8085/bucketlocation', // -> for prod
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }

  return axios({ ...axiosExtras })
}

function fetchResult(payload) {
  console.log(`[Dedup Service]    : fetchResult`)

  if (!payload) {
    console.log(`[Dedup Service]    : login failed`)
    console.log(`[Dedup Service]    : Payload undefined`)
    return Promise.reject({
      response: {
        status: 400,
        data: { message: `Payload Error` }
      }
    })
  }

  const axiosExtras = {
    method: 'get',
    // url: `http://localhost:8085/different/${payload.route}`, // -> for dev
    url: `http://medialab-springboot.default.svc.cluster.local:8085/different/${payload.route}`, // -> for prod
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }

  return axios({ ...axiosExtras })
}


module.exports = {
  fetchResult,
  processBucket
}
