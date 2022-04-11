const express = require('express')
const router = express.Router()
const lmService = require('./service')
const KB_STRINGS = require('../../config/kb/constants.json')

/* Routes */
router.post('/createAccount', createAccount)
router.post('/getAccountDetails', getAccountDetails)
router.post('/fetchBasePlans', fetchBasePlans)
router.post('/createAccountTags', createAccountTags)
router.post('/getPaymentMethodsForAccount', getPaymentMethodsForAccount)
router.post('/getInvoicesForAccount', getInvoicesForAccount)
router.post('/createSubscription', createSubscription)
router.post('/addPaymentMethod', createPaymentMethod)

module.exports = router

function failedResponse(_, res, _message) {
  console.log(`[KB Controller] : ${_message.log}`)
  return res
    .status(_.status)
    .json({ status: _.status, data: _.data, error: _.data.message })
}

function successResponse(_, res, _message) {
  console.log(`[KB Controller] : ${_message.log}`)
  return res
    .status(_.status)
    .json({ status: _.status, data: _.data, error: null })
}

function invalidResponse(_, res, _operation) {
  console.log(`[KB Controller] : ${_operation} ${KB_STRINGS.GENERAL.FAILED}`)
  return res.status(500).json({ status: 500, message: _.message })
}

function invalidRequest(res, _message) {
  console.log(`[KB Controller] : ${_message.log}`)
  const message = _message.response
  return res.status(400).json({ status: 400, message })
}

function createAccount(req, res, next) {
  console.log(`[KB Controller]   : ${KB_STRINGS.ACCOUNT.CREATE.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: KB_STRINGS.ACCOUNT.CREATE.FAILED,
      response: KB_STRINGS.CREATEACCOUNT.INVALID,
    })
  }
  const axiosPromise = lmService.createAccount(payload)
  axiosPromise
    .then(_ => {
      successResponse(_, res, { log: KB_STRINGS.ACCOUNT.CREATE.SUCCESS })
    })
    .catch(_ => {
      if (!!_.response) failedResponse(_.response, res, { log: KB_STRINGS.ACCOUNT.CREATE.FAILED })
      else invalidResponse(_, res, KB_STRINGS.ACCOUNT.CREATE.ACTION)
    })
}

function createPaymentMethod(req, res, next) {
  console.log(`[KB Controller]   : ${KB_STRINGS.PAYMENT.CREATE.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: KB_STRINGS.PAYMENT.CREATE.FAILED,
      response: KB_STRINGS.PAYMENT.CREATE.INVALID,
    })
  }
  const axiosPromise = lmService.createPaymentMethod(payload)
  axiosPromise
    .then(_ => {
      successResponse(_, res, { log: KB_STRINGS.PAYMENT.CREATE.SUCCESS })
    })
    .catch(_ => {
      if (!!_.response) failedResponse(_.response, res, { log: KB_STRINGS.PAYMENT.CREATE.FAILED })
      else invalidResponse(_, res, KB_STRINGS.PAYMENT.CREATE.ACTION)
    })
}

function createSubscription(req, res, next) {
  console.log(`[KB Controller]   : ${KB_STRINGS.CREATESUBSCRIPTION.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: KB_STRINGS.CREATESUBSCRIPTION.FAILED,
      response: KB_STRINGS.CREATESUBSCRIPTION.INVALID,
    })
  }
  const axiosPromise = lmService.createSubscription(payload)
  axiosPromise
    .then(_ => {
      successResponse(_, res, { log: KB_STRINGS.CREATESUBSCRIPTION.SUCCESS })
    })
    .catch(_ => {
      if (!!_.response) failedResponse(_.response, res, { log: KB_STRINGS.CREATESUBSCRIPTION.FAILED })
      else invalidResponse(_, res, KB_STRINGS.CREATESUBSCRIPTION.ACTION)
    })
}

function getAccountDetails(req, res, next) {
  console.log(`[KB Controller]   : ${KB_STRINGS.ACCOUNT.FETCH.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: KB_STRINGS.ACCOUNT.FAILED,
      response: KB_STRINGS.ACCOUNT.INVALID,
    })
  }
  const axiosPromise = lmService.fetchAccountDetails(payload)
  axiosPromise
    .then(_ => {
      successResponse(_, res, { log: KB_STRINGS.ACCOUNT.FETCH.SUCCESS })
    })
    .catch(_ => {
      if (!!_.response) failedResponse(_.response, res, { log: KB_STRINGS.ACCOUNT.FETCH.FAILED })
      else invalidResponse(_, res, KB_STRINGS.ACCOUNT.FETCH.ACTION)
    })
}

function fetchBasePlans(req, res, next) {
  console.log(`[KB Controller]   : ${KB_STRINGS.BASEPLANS.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: KB_STRINGS.BASEPLANS.FAILED,
      response: KB_STRINGS.BASEPLANS.INVALID,
    })
  }
  const axiosPromise = lmService.fetchBasePlans(payload)
  axiosPromise
    .then(_ => {
      successResponse(_, res, { log: KB_STRINGS.BASEPLANS.SUCCESS })
    })
    .catch(_ => {
      if (!!_.response) failedResponse(_.response, res, { log: KB_STRINGS.BASEPLANS.FAILED })
      else invalidResponse(_, res, KB_STRINGS.BASEPLANS.ACTION)
    })
}

function createAccountTags(req, res, next) {
  console.log(`[KB Controller]   : ${KB_STRINGS.TAGS.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: KB_STRINGS.TAGS.FAILED,
      response: KB_STRINGS.TAGS.INVALID,
    })
  }
  const axiosPromise = lmService.createTags(payload)
  axiosPromise
    .then(_ => {
      successResponse(_, res, { log: KB_STRINGS.TAGS.SUCCESS })
    })
    .catch(_ => {
      if (!!_.response) failedResponse(_.response, res, { log: KB_STRINGS.TAGS.FAILED })
      else invalidResponse(_, res, KB_STRINGS.TAGS.ACTION)
    })
}

function getPaymentMethodsForAccount(req, res, next) {
  console.log(`[KB Controller]   : ${KB_STRINGS.PAYMENT.FETCH.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: KB_STRINGS.PAYMENT.FETCH.FAILED,
      response: KB_STRINGS.PAYMENT.FETCH.INVALID,
    })
  }
  const axiosPromise = lmService.fetchPaymentMethodsForAccount(payload)
  axiosPromise
    .then(_ => {
      successResponse(_, res, { log: KB_STRINGS.PAYMENT.FETCH.SUCCESS })
    })
    .catch(_ => {
      if (!!_.response) failedResponse(_.response, res, { log: KB_STRINGS.PAYMENT.FETCH.FAILED })
      else invalidResponse(_, res, KB_STRINGS.PAYMENT.FETCH.ACTION)
    })
}

function getInvoicesForAccount(req, res, next) {
  console.log(`[KB Controller]   : ${KB_STRINGS.INVOICE.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: KB_STRINGS.INVOICE.FAILED,
      response: KB_STRINGS.PAYMENT.FETCH.INVALID,
    })
  }
  const axiosPromise = lmService.fetchInvoicesForAccount(payload)
  axiosPromise
    .then(_ => {
      successResponse(_, res, { log: KB_STRINGS.INVOICE.SUCCESS })
    })
    .catch(_ => {
      if (!!_.response) failedResponse(_.response, res, { log: KB_STRINGS.INVOICE.FAILED })
      else invalidResponse(_, res, KB_STRINGS.INVOICE.ACTION)
    })
}

// function getInvoicesForAccount(req, res, next) {
//   console.log(`[KB Controller]   : ${KB_STRINGS.INVOICE.ATTEMPT}`)
//   let payload = {}
//   try { payload = { ...req.body } } catch (error) {
//     invalidRequest(res, {
//       log: KB_STRINGS.INVOICE.FAILED,
//       response: KB_STRINGS.PAYMENT.FETCH.INVALID,
//     })
//   }
//   const axiosPromise = lmService.getInvoicesForAccount(payload)
//   axiosPromise
//     .then(_ => {
//       successResponse(_, res, { log: KB_STRINGS.INVOICE.SUCCESS })
//     })
//     .catch(_ => {
//       if (!!_.response) failedResponse(_.response, res, { log: KB_STRINGS.INVOICE.FAILED })
//       else invalidResponse(_, res, KB_STRINGS.INVOICE.ACTION)
//     })
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
