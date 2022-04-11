const express = require('express')
const router = express.Router()
const stService = require('./service')
const STRIPE_STRINGS = require('../../config/stripe/constants.json')

/* Routes */
router.post('/addCardToStripe', addCardToStripe)

module.exports = router

function failedResponse(_, res, _message) {
  console.log(`[Stripe Controller] : ${_message.log}`)
  return res
    .status(_.status)
    .json({ status: _.status, data: _.data, error: _.data.message })
}

function successResponse(_, res, _message) {
  console.log(`[Stripe Controller] : ${_message.log}`)
  return res
    .status(_.status)
    .json({ status: _.status, data: _.data, error: null })
}

function invalidResponse(_, res, _operation) {
  console.log(`[Stripe Controller] : ${_operation} ${STRIPE_STRINGS.GENERAL.FAILED}`)
  return res.status(500).json({ status: 500, message: _.message })
}

function invalidRequest(res, _message) {
  console.log(`[Stripe Controller] : ${_message.log}`)
  const message = _message.response
  return res.status(400).json({ status: 400, message })
}

function addCardToStripe(req, res, next) {
  console.log(`[Stripe Controller]   : ${STRIPE_STRINGS.ADDCARD.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: STRIPE_STRINGS.ADDCARD.FAILED,
      response: STRIPE_STRINGS.ADDCARD.INVALID,
    })
  }
  const axiosPromise = stService.addCardToAccount(payload)
  axiosPromise
    .then(_ => {
      successResponse(_, res, { log: STRIPE_STRINGS.ADDCARD.SUCCESS })
    })
    .catch(_ => {
      if (!!_.response) failedResponse(_.response, res, { log: STRIPE_STRINGS.ADDCARD.FAILED })
      else invalidResponse(_, res, STRIPE_STRINGS.ADDCARD.ACTION)
    })
}
