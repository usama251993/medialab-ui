const express = require('express')
const router = express.Router()
const fromModuleService = require('./service')

/* GET api listing. */
router.post('/applicationlist', application)
router.post('/finishedtestpackruns', finishedTestPackRuns)
router.post('/testpacklist', testPackList)
router.post('/testlist', testList)
router.post('/testpackexecute', testPackExecution)
router.post('/testpackexeresult', testPackExeResult)
router.post('/configuration', configuration)
router.post('/devices', devices)
router.post('/testpackstop', testPackStop)

module.exports = router

function invalidApplicationListRequest(res) {
  console.log(`[Suitest Controller] : application list fetch unsuccessful`)
  const message = `Invalid fetch request`
  return res.status(400).json({ status: 400, message })
}

function failedToGetApplicationList(_, res) {
  console.log(`[Suitest Controller] : application list fetch unsuccessful`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: _.data.message })
}

function applicationListSuccess(_, res) {
  console.log(`[Suitest Controller] : application list fetch successful`)
  return res.status(_.status).json({ status: _.status, data: _.data.values, error: null })
}

function invalidFinishedTestPackRunsListRequest(res) {
  console.log(`[Suitest Controller] : Finished Test Pack fetch unsuccessful`)
  const message = `Invalid fetch request`
  return res.status(400).json({ status: 400, message })
}

function failedToGetFinishedTestPackRunsList(_, res) {
  console.log(`[Suitest Controller] : Finished Test Pack fetch unsuccessful`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: _.data.message })
}

function finishedTestPackRunListSuccess(_, res) {
  console.log(`[Suitest Controller] : Finished Test Pack fetch successful`)
  return res.status(_.status).json({ status: _.status, data: _.data.values, error: null })
}

function invalidTestPackListRequest(res) {
  console.log(`[Suitest Controller] : Test Pack List fetch unsuccessful`)
  const message = `Invalid fetch request`
  return res.status(400).json({ status: 400, message })
}

function failedToGetTestPackList(_, res) {
  console.log(`[Suitest Controller] : Test Pack List fetch unsuccessful`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: _.data.message })
}

function testPackListSuccess(_, res) {
  console.log(`[Suitest Controller] : Test Pack List fetch successful`)
  return res.status(_.status).json({ status: _.status, data: _.data.values, error: null })
}

function invalidTestListRequest(res) {
  console.log(`[Suitest Controller] : Test List fetch unsuccessful`)
  const message = `Invalid fetch request`
  return res.status(400).json({ status: 400, message })
}

function failedToGetTestList(_, res) {
  console.log(`[Suitest Controller] : Test List fetch unsuccessful`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: _.data.message })
}

function testListSuccess(_, res) {
  console.log(`[Suitest Controller] : Test List fetch successful`)
  return res.status(_.status).json({ status: _.status, data: _.data.values, error: null })
}

function invalidTestPackExecutionRequest(res) {
  console.log(`[Suitest Controller] : Test Pack Execution unsuccessful`)
  const message = `Invalid fetch request`
  return res.status(400).json({ status: 400, message })
}

function failedToGetTestPackExecution(_, res) {
  console.log(`[Suitest Controller] : Test Pack Execution unsuccessful`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: _.data.message })
}

function testPackExecutionSuccess(_, res) {
  console.log(`[Suitest Controller] : Test Pack Execution successful`)
  return res.status(_.status).json({ status: _.status, data: _.data.values, error: null })
}

function invalidTestPackExeResultRequest(res) {
  console.log(`[Suitest Controller] : Test Pack Execution Result fetch unsuccessful`)
  const message = `Invalid fetch request`
  return res.status(400).json({ status: 400, message })
}

function failedToGetTestPackExeResult(_, res) {
  console.log(`[Suitest Controller] : Test Pack Execution Result fetch unsuccessful`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: _.data.message })
}

function testPackExeResultSuccess(_, res) {
  console.log(`[Suitest Controller] : Test Pack Execution Result fetch successful`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: null })
}

function invalidConfigurationRequest(res) {
  console.log(`[Suitest Controller] : Configuration List fetch unsuccessful`)
  const message = `Invalid fetch request`
  return res.status(400).json({ status: 400, message })
}

function failedToGetConfiguration(_, res) {
  console.log(`[Suitest Controller] : Configuration List fetch unsuccessful`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: _.data.message })
}

function configurationSuccess(_, res) {
  console.log(`[Suitest Controller] : Configuration List fetch successful`)
  return res.status(_.status).json({ status: _.status, data: _.data.values, error: null })
}

function invalidDevicesRequest(res) {
  console.log(`[Suitest Controller] : Devices fetch unsuccessful`)
  const message = `Invalid fetch request`
  return res.status(400).json({ status: 400, message })
}

function failedToGetDevices(_, res) {
  console.log(`[Suitest Controller] : Devices fetch unsuccessful`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: _.data.message })
}

function devicesSuccess(_, res) {
  console.log(`[Suitest Controller] : Devices fetch successful`)
  return res.status(_.status).json({ status: _.status, data: _.data.values, error: null })
}

function invalidTestPackStopRequest(res) {
  console.log(`[Suitest Controller] :  Stop Test Pack Execution unsuccessful`)
  const message = `Invalid fetch request`
  return res.status(400).json({ status: 400, message })
}

function failedToGetTestPackStop(_, res) {
  console.log(`[Suitest Controller] :  Stop Test Pack Execution unsuccessful`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: _.data.message })
}

function testPackStopSuccess(_, res) {
  console.log(`[Suitest Controller] :  Stop Test Pack Execution successful`)
  return res.status(_.status).json({ status: _.status, data: _.data.values, error: null })
}

function requestFailed(_, res) {
  console.log(`[Express Service] : Request Failed`)

  return res.status(500).json({
    status: 500,
    data: {
      code: 0,
      description: 'Unable to connect to the server',
      message: _.message,
      properties: {
        stack: _.stack,
        config: {
          url: _.config.url,
          body: JSON.parse(_.config.data),
          headers: { ..._.config.headers },
          method: _.config.method
        }
      }
    },
    error: _.message
  })
}

function application(req, res, next) {
  console.log(`[Suitest Controller] : Controller fetching Application List`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) { invalidApplicationListRequest(res) }
  const axiosPromise = fromModuleService.application(payload)
  axiosPromise
    .then(_ => { applicationListSuccess(_, res) })
    .catch(_ => {
      (!!_.response)
        ? failedToGetApplicationList(_.response, res)
        : requestFailed(_, res)
    })
}

function finishedTestPackRuns(req, res, next) {
  console.log(`[Suitest Controller] : Controller fetching Finished Test Pack`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) { invalidFinishedTestPackRunsListRequest(res) }
  const axiosPromise = fromModuleService.finishedTestPackRuns(payload)
  axiosPromise
    .then(_ => {
      finishedTestPackRunListSuccess(_, res)
    })
    .catch(_ => {
      (!!_.response)
        ? failedToGetFinishedTestPackRunsList(_.response, res)
        : requestFailed(_, res)
    })
}

function testPackList(req, res, next) {
  console.log(`[Suitest Controller] : Controller fetching Test Pack List`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) { invalidTestPackListRequest(res) }
  const axiosPromise = fromModuleService.testPackList(payload)
  axiosPromise
    .then(_ => {
      testPackListSuccess(_, res)
    })
    .catch(_ => {
      (!!_.response)
        ? failedToGetTestPackList(_.response, res)
        : requestFailed(_, res)
    })
}

function testList(req, res, next) {
  console.log(`[Suitest Controller] : Controller fetching Test List`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) { invalidTestListRequest(res) }
  const axiosPromise = fromModuleService.testList(payload)
  axiosPromise
    .then(_ => { testListSuccess(_, res) })
    .catch(_ => {
      (!!_.response)
        ? failedToGetTestList(_.response, res)
        : requestFailed(_, res)
    })
}

function testPackExecution(req, res, next) {
  console.log(`[Suitest Controller] : Controller fetching Test Pack Execution`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) { invalidTestPackExecutionRequest(res) }
  const axiosPromise = fromModuleService.testPackExecution(payload)
  axiosPromise
    .then(_ => {
      testPackExecutionSuccess(_, res)
    })
    .catch(_ => {
      (!!_.response)
        ? failedToGetTestPackExecution(_.response, res)
        : requestFailed(_, res)
    })
}

function testPackExeResult(req, res, next) {
  console.log(`[Suitest Controller] : Controller fetching Test Pack Execution Result`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) { invalidTestPackExeResultRequest(res) }
  const axiosPromise = fromModuleService.testPackExeResult(payload)
  axiosPromise
    .then(_ => {
      testPackExeResultSuccess(_, res)
    })
    .catch(_ => {
      (!!_.response)
        ? failedToGetTestPackExeResult(_.response, res)
        : requestFailed(_, res)
    })
}

function configuration(req, res, next) {
  console.log(`[Suitest Controller] : Controller fetching Configuration List`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) { invalidConfigurationRequest(res) }
  const axiosPromise = fromModuleService.configuration(payload)
  axiosPromise
    .then(_ => { configurationSuccess(_, res) })
    .catch(_ => {
      (!!_.response)
        ? failedToGetConfiguration(_.response, res)
        : requestFailed(_, res)
    })
}

function devices(req, res, next) {
  console.log(`[Suitest Controller] : Controller fetching Devices`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) { invalidDevicesRequest(res) }
  const axiosPromise = fromModuleService.devices(payload)
  axiosPromise
    .then(_ => { devicesSuccess(_, res) })
    .catch(_ => {
      (!!_.response)
        ? failedToGetDevices(_.response, res)
        : requestFailed(_, res)
    })
}

function testPackStop(req, res, next) {
  console.log(`[Suitest Controller] : Controller to Stop Test Pack Execution`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) { invalidTestPackStopRequest(res) }
  const axiosPromise = fromModuleService.testPackStop(payload)
  axiosPromise
    .then(_ => {
      testPackStopSuccess(_, res)
    })
    .catch(_ => {
      (!!_.response)
        ? failedToGetTestPackStop(_.response, res)
        : requestFailed(_, res)
    })
}
