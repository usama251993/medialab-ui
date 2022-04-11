const router = require('express').Router()
const fromService = require('./service')

router.post('/processBucket', processBucket)
router.post('/fetchResult', getResult)

module.exports = router

function requestFailed(_, res) {
  console.log(`[Express Service] : Request Failed`)
  return res.status(500).json({
    status: 500,
    data: { ..._ },
    error: _.message
  })
}

function invalidBucketProcessRequest(res, error) {
  console.log(`[Dedup Controller] : Invalid trigger Process request`)
  const message = `Invalid request`
  return res.status(400).json({ status: 400, message, error })
}

function processBucketFail(_, res) {
  console.log(`[Dedup Controller] : Trigger Process request failed`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: _.data.message })
}

function processBucketSuccess(_, res) {
  console.log(`[Dedup Controller] : Trigger Process request successful`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: null })
}

function processBucket(req, res, next) {
  let payload = null
  try { payload = { ...req.body } } catch (error) { invalidBucketProcessRequest(res) }
  const axiosPromise = fromService.processBucket(payload)
  axiosPromise
    .then(_ => {
      processBucketSuccess(_, res)
    })
    .catch(_ => {
      if (!!_.response) processBucketFail(_.response, res)
      else requestFailed(_, res)
    })
}

function invalidResultRequest(res, error) {
  console.log(`[Dedup Controller] : Invalid result request`)
  const message = `Invalid request`
  return res.status(400).json({ status: 400, message, error })
}

function getResultFail(_, res) {
  console.log(`[Dedup Controller] : Result request failed`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: _.data.message })
}

function getResultSuccess(_, res) {
  console.log(`[Dedup Controller] : Result request successful`)
  return res.status(_.status).json({ status: _.status, data: _.data, error: null })
}

function getResult(req, res, next) {
  let payload = null
  try { payload = { ...req.body } } catch (error) { invalidResultRequest(res) }
  const axiosPromise = fromService.fetchResult(payload)
  axiosPromise
    .then(_ => { getResultSuccess(_, res) })
    .catch(_ => {
      if (!!_.response) getResultFail(_.response, res)
      else requestFailed(_, res)
    })
}
