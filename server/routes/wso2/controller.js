const express = require('express')
const router = express.Router()
const lmService = require('./service')

/* GET api listing. */
router.post('/register', register)
router.post('/login', login)
router.post('/getUserDetails', fetchUserDetails)

module.exports = router

function invalidRegisterRequest(res) {
  console.log(`[WSO2 Controller] : registration unsuccessful`)
  const message = `Invalid register request`
  return res.status(400).json({ status: 400, message })
}

function failedToRegister(_, res) {
  console.log(`[WSO2 Controller] : registration unsuccessful`)
  return res.status(_.status).json({ status: _.status, data: null, error: _.data.message })
}

function registerSuccess(_, res) {
  console.log(`[WSO2 Controller] : registration successful`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: null })
}

function invalidLoginRequest(res) {
  console.log(`[WSO2 Controller] : Login Failed`)
  const message = `Invalid login request`
  return res.status(400).json({ status: 400, message })
}

function failedToLogin(_, res) {
  console.log(`[WSO2 Controller] : Login Failed`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: _.data.message })
}

function loginSuccess(_, res) {
  console.log(`[WSO2 Controller] : Login Successful`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: null })
}

function invalidUserDetailRequest(res) {
  console.log(`[WSO2 Controller] : User data fetch Failed`)
  const message = `Invalid user data request`
  return res.status(400).json({ status: 400, message })
}

function failedToFetchUserDetails(_, res) {
  console.log(`[WSO2 Controller] : User data fetch Failed`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: _.data.message })
}

function userDetailsFetchSuccess(_, res) {
  console.log(`[WSO2 Controller] : User data fetch Successful`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: null })
}

function login(req, res, next) {
  console.log('[WSO2 Controller] : Controller attempting login')
  let payload = {}
  try { payload = { ...req.body } } catch (error) { invalidLoginRequest(res) }
  const axiosPromise = lmService.login(payload)
  axiosPromise
    .then(_ => { loginSuccess(_, res) })
    .catch(_ => { failedToLogin(_.response, res) })
}

function register(req, res, next) {
  console.log(`[WSO2 Controller] : Controller attempting registration`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) { invalidRegisterRequest(res) }
  const axiosPromise = lmService.register(payload)
  axiosPromise
    .then(_ => { registerSuccess(_, res) })
    .catch(_ => { failedToRegister(_.response, res) })
}

function fetchUserDetails(req, res, next) {
  console.log(`[WSO2 Controller] : Controller attempting user data fetch`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) { invalidUserDetailRequest(res) }
  const axiosPromise = lmService.fetchUserDetails(payload)
  axiosPromise
    .then(_ => { userDetailsFetchSuccess(_, res) })
    .catch(_ => { failedToFetchUserDetails(_, res) })
}
