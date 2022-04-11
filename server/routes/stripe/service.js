const axios = require('axios')
const https = require('https')
var qs = require('qs')

function addCardToAccount(payload) {
  console.log('[Stripe Service] Add Card To Account')
  const endpoint = 'https://api.stripe.com/v1/tokens'

  var data = qs.stringify(payload.data)

  const axiosExtras = {
    headers: {
      'Authorization': 'Basic c2tfdGVzdF81MUhGRXh6QjhyakNHdzBvMXVINjhFZkhMTmhpMXZ6blVxNmsxNFBtZE10TmM0YjNDcFBtcFRzQURNcEVNNnViS25vbjZVeXg0N2haRFBRcXhBck02Vzg0RzAweTlHajY1dzk6',
      // "Authorization": 'Basic c2tfdGVzdF81MUhGRXh6QjhyakNHdzBvMXVINjhFZkhMTmhpMXZ6blVxNmsxNFBtZE10TmM0YjNDcFBtcFRzQURNcEVNNnViS25vbjZVeXg0N2haRFBRcXhBck02Vzg0RzAweTlHajY1dzk6',
      ...payload.headers
    },
    auth: null,
    params: null,
    data: data,
    httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false })
  }
  return axios({
    method: 'post',
    ...axiosExtras,
    url: endpoint
  })
}

module.exports = {
  addCardToAccount
}
