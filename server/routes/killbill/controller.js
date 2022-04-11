const express = require('express')
const router = express.Router()
const lmService = require('./service')

/* Routes */
router.post('/createAccount', createAccount)
router.post('/getAccountDetails', getAccountDetails)
// router.post('/getTenantDetails', getTenantDetails)
// router.post('/getPushNotification', getPushNotification)

module.exports = router

function invalidCreateAccountRequest(res, error) {
  console.log(`[KB Controller]   : Create account request failed`)
  const message = `Invalid request`
  return res.status(400).json({ status: 400, message, error })
}

function failedToCreateAccount(_, res) {
  console.log(`[KB Controller]   : Create account request failed`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: _.data.message })
}

function createAccountSuccess(_, res) {
  console.log(`[KB Controller]   : Created account successfully`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: null })
}

function invalidAccountFetchRequest(res, error) {
  console.log(`[KB Controller]   : Fetch account details request failed`)
  const message = `Invalid request`
  return res.status(400).json({ status: 400, message, error })
}

function failedToFetchAccountDetails(_, res) {
  console.log(`[KB Controller]   : Fetch account details request failed`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: _.data.message })
}

function accountDetailsFetchSuccess(_, res) {
  console.log(`[KB Controller]   : Account details fetched successfully`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: null })
}

function createAccount(req, res, next) {
  console.log(`[KB Controller]   : Controller attempting create account`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) { invalidCreateAccountRequest(res) }
  const axiosPromise = lmService.createAccount(payload)
  axiosPromise
    .then(_ => { createAccountSuccess(_, res) })
    .catch(_ => { failedToCreateAccount(_.response, res) })
}

function getAccountDetails(req, res, next) {
  console.log(`[KB Controller] : Controller attempting retrieve account details`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) { invalidAccountFetchRequest(res, error) }
  const axiosPromise = lmService.fetchAccountDetails(payload)
  axiosPromise
    .then(_ => { accountDetailsFetchSuccess(_, res) })
    .catch(_ => { failedToFetchAccountDetails(_.response, res) })

}

// function getTenantDetails(req, res, next) {
//   const payload = {
//     auth: { ...req.body.auth },
//     headers: { ...req.body.headers },
//     params: { ...req.body.params },
//     data: { ...req.body.data }
//   }
//   const route = req.body.route
//   const output = lmService.fetchTenantDetails(payload, route)
//   output
//     .then(_ =>
//       res.status(_.status).json({
//         status: _.status,
//         data: _.data,
//         error: null
//       }))
//     .catch(_ =>
//       res.status(_.response.status).json({
//         status: _.response.status,
//         data: _.response.data,
//         error: _.message
//       }))
// }

// function getPushNotification(req, res, next) {
//   console.log(`[KB Controller] : getPushNotification`)
//   const { headers, body, params, method, url } = req.body
//   const response = res
//   console.groupCollapsed()
//   console.log(`[KB Controller] : getPushNotification request`)
//   console.log(`[KB Controller] : request headers`)
//   console.log(headers)
//   console.log(`[KB Controller] : request body`)
//   console.log(body)
//   console.log(`[KB Controller] : request params`)
//   console.log(params)
//   console.log(`[KB Controller] : request method`)
//   console.log(method)
//   console.log(`[KB Controller] : request url`)
//   console.log(url)
//   console.groupEnd()
//   console.groupCollapsed()
//   console.log(`[KB Controller] : getPushNotification response size`)
//   console.log(response.outputSize)
//   console.groupEnd()
//   res.status(200).json(res.body)
// }
