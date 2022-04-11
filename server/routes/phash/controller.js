const express = require('express')
const router = express.Router()

const fromModuleService = require('./service')
const PHASH_LOGGING = require('../../config/phash/logging.json')

router.post('/processBucket', processBucket)
router.post('/fetchOverview', fetchOverview)
router.post('/fetchResult', fetchResult)

module.exports = router

function invalidRequest(res, _message) {
  console.log(`[PHASH Controller] : ${_message.log}`)
  const message = _message.response
  return res.status(400).json({ status: 400, message })
}

function invalidResponse(_, res, _operation) {
  console.log(`[PHASH Controller] : ${_operation} ${PHASH_LOGGING.GENERAL.FAILED}`)
  return res.status(500).json({
    status: 500,
    data: {},
    error: _.message,
  })
}

function failedResponse(_, res, _message) {
  console.log(`[PHASH Controller] : ${_message.log}`)
  return res
    .status(_.status)
    .json({ status: _.status, data: _.data, error: _.data.message })
}

function successResponse(_, res, _message) {
  console.log(`[PHASH Controller] : ${_message.log}`)
  return res
    .status(_.status)
    .json({ status: _.status, data: _.data, error: null })
}

function processBucket(req, res, next) {
  console.log(`[PHASH Controller] : ${PHASH_LOGGING.PROCESS_BUCKET.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: PHASH_LOGGING.PROCESS_BUCKET.FAILED,
      response: PHASH_LOGGING.PROCESS_BUCKET.INVALID,
    })
  }
  const axiosPromise = fromModuleService.processBucket(payload)
  axiosPromise
    .then(_ => {
      console.log()
      fromModuleService.getDataFromMatrix()
        .then(_ => {
          successResponse(_, res, { log: PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.SUCCESS })
          console.log()
        })
        .catch(_ => {
          if (!!_.response) {
            failedResponse(_.response, res, { log: PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.FAILED })
            console.log()
          }
          else {
            invalidResponse(_, res, PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.ACTION)
            console.log()
          }
        })
    })
    .catch(_ => {
      if (!!_.response) {
        failedResponse(_.response, res, { log: PHASH_LOGGING.PROCESS_BUCKET.FAILED })
        console.log()
      }
      else {
        invalidResponse(_, res, PHASH_LOGGING.PROCESS_BUCKET.ACTION)
        console.log()
      }
    })
}

function fetchOverview(req, res, next) {
  console.log(`[PHASH Controller] : ${PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.FAILED,
      response: PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.INVALID,
    })
  }
  const axiosPromise = fromModuleService.getDataFromMatrix(payload)
  axiosPromise
    .then(_ => {
      successResponse(_, res, { log: PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.SUCCESS })
      console.log()
    })
    .catch(_ => {
      if (!!_.response) {
        failedResponse(_.response, res, { log: PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.FAILED })
        console.log()
      }
      else {
        invalidResponse(_, res, PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.ACTION)
        console.log()
      }
    })
}


function fetchResult(req, res, next) {
  console.log(`[PHASH Controller] : ${PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.FAILED,
      response: PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.INVALID,
    })
  }
  const axiosPromise = fromModuleService.getComparisonResult(payload)
  axiosPromise
    .then(_ => {
      successResponse(_, res, { log: PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.SUCCESS })
      console.log()
    })
    .catch(_ => {
      if (!!_.response) {
        failedResponse(_.response, res, { log: PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.FAILED })
        console.log()
      }
      else {
        invalidResponse(_, res, PHASH_LOGGING.GET_MATRIX_FROM_TOPIC.ACTION)
        console.log()
      }
    })
}
