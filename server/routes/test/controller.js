const express = require('express')
const router = express.Router()
const testService = require('./service')

/* GET api listing. */
router.get('/getStreamingData', getStreamingData)

module.exports = router

// module.exports = function (app, io) {
//   const dedupService = require('./service')(io)
//   app.get('/api/getStreamingData', controller.)
// }

function getStreamingData(req, res, next) {
  console.log(`[Test Controller] : getStreamingData`)
  const io = req.app.get('socketIo')
  // const output = testService.fetchStreamingData(res, io)
  testService.fetchStreamingData(res, io)
  // return res.status(200).json({ output })
}
