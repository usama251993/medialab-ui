const express = require('express')
const router = express.Router()
const fromModuleService = require('./service')
const WSO2_LOGGING = require('../../config/wso2/logging.json')

/* GET api listing. */
router.post('/register', register)
router.post('/login', login)
router.post('/getUserDetails', fetchUserDetails)
router.post('/validate-code', validateCode)
router.post('/resend-code', resendCode)

module.exports = router

function invalidRequest(res, _message) {
  console.log(`[WSO2 Controller] : ${_message.log}`)
  const message = _message.response
  return res.status(400).json({ status: 400, message })
}

function invalidResponse(_, res, _operation) {
  console.log(`[WSO2 Controller] : ${_operation} ${WSO2_LOGGING.GENERAL.FAILED}`)
  return res.status(500).json({
    status: 500,
    data: {
      code: 0,
      description: `${WSO2_LOGGING.GENERAL.SERVER_FAILED}`,
      message: _.message,
      properties: {
        stack: _.stack,
        config: {
          url: _.config.url,
          body: JSON.parse(_.config.data),
          headers: { ..._.config.headers },
          method: _.config.method,
        },
      },
    },
    error: _.message,
  })
}

function failedResponse(_, res, _message) {
  console.log(`[WSO2 Controller] : ${_message.log}`)
  return res
    .status(_.status)
    .json({ status: _.status, data: _.data, error: _.data.message })
}

function successResponse(_, res, _message) {
  console.log(`[WSO2 Controller] : ${_message.log}`)
  return res
    .status(_.status)
    .json({ status: _.status, data: _.data, error: null })
}

function login(req, res, next) {
  console.log(`[WSO2 Controller] : ${WSO2_LOGGING.LOGIN.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: WSO2_LOGGING.LOGIN.FAILED,
      response: WSO2_LOGGING.LOGIN.INVALID,
    })
  }
  const axiosPromise = fromModuleService.login(payload)
  axiosPromise
    .then((_) => { successResponse(_, res, { log: WSO2_LOGGING.LOGIN.SUCCESS }) })
    .catch((_) => {
      if (!!_.response) failedResponse(_.response, res, { log: WSO2_LOGGING.LOGIN.FAILED })
      else invalidResponse(_, res, WSO2_LOGGING.LOGIN.ACTION)
    })
}

function register(req, res, next) {
  console.log(`[WSO2 Controller] : ${WSO2_LOGGING.REGISTER.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: WSO2_LOGGING.REGISTER.FAILED,
      response: WSO2_LOGGING.REGISTER.INVALID,
    })
  }
  const axiosPromise = fromModuleService.register(payload)
  axiosPromise
    .then((_) => { successResponse(_, res, { log: WSO2_LOGGING.REGISTER.SUCCESS }) })
    .catch((_) => {
      if (!!_.response) failedResponse(_.response, res, { log: WSO2_LOGGING.REGISTER.FAILED })
      else invalidResponse(_, res, WSO2_LOGGING.REGISTER.ACTION)
    })
}

function fetchUserDetails(req, res, next) {
  console.log(`[WSO2 Controller] : ${WSO2_LOGGING.USER.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: WSO2_LOGGING.USER.FAILED,
      response: WSO2_LOGGING.USER.INVALID,
    })
  }
  const axiosPromise = fromModuleService.fetchUserDetails(payload)
  axiosPromise
    .then((_) => { successResponse(_, res, { log: WSO2_LOGGING.USER.SUCCESS }) })
    .catch((_) => {
      if (!!_.response) failedResponse(_.response, res, { log: WSO2_LOGGING.USER.FAILED })
      else invalidResponse(_, res, WSO2_LOGGING.USER.ACTION)
    })
}

function validateCode(req, res, next) {
  console.log(`[WSO2 Controller] : ${WSO2_LOGGING.CODE.VALIDATE.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: WSO2_LOGGING.CODE.VALIDATE.FAILED,
      response: WSO2_LOGGING.CODE.VALIDATE.INVALID,
    })
  }
  const axiosPromise = fromModuleService.validateCode(payload)
  axiosPromise
    .then((_) => { successResponse(_, res, { log: WSO2_LOGGING.CODE.VALIDATE.SUCCESS }) })
    .catch((_) => {
      if (!!_.response) failedResponse(_.response, res, { log: WSO2_LOGGING.CODE.VALIDATE.FAILED })
      else invalidResponse(_, res, WSO2_LOGGING.CODE.VALIDATE.ACTION)
    })
}

function resendCode(req, res, next) {
  console.log(`[WSO2 Controller] : ${WSO2_LOGGING.CODE.RESEND.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: WSO2_LOGGING.CODE.RESEND.FAILED,
      response: WSO2_LOGGING.CODE.RESEND.INVALID,
    })
  }
  const axiosPromise = fromModuleService.resendCode(payload)
  axiosPromise
    .then((_) => { successResponse(_, res, { log: WSO2_LOGGING.CODE.RESEND.SUCCESS }) })
    .catch((_) => {
      if (!!_.response) failedResponse(_.response, res, { log: WSO2_LOGGING.CODE.RESEND.FAILED })
      else invalidResponse(_, res, WSO2_LOGGING.CODE.RESEND.ACTION)
    })
}
