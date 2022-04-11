// Dependencies
const express = require('express')
const app = express()
const path = require('path')
const server = require('http').createServer(app)
const bodyParser = require('body-parser')
const cors = require('cors')

const CONFIG = require('./config/server.json')

// Routes
const auth = require('./routes/wso2/controller')
const kb = require('./routes/killbill/controller')
const dedup = require('./routes/dedup/controller')
const phash = require('./routes/phash/controller')
const suitest = require('./routes/suite-st/controller')
const stripe = require('./routes/stripe/controller')
const mail = require('./routes/mail/controller')

// CORS
app.use(cors())

// Parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Setup API Routes
app.use('/api/wso2', auth)
app.use('/api/kb', kb)
app.use('/api/dedup', dedup)
app.use('/api/phash', phash)
app.use('/api/suite-st', suitest)
app.use('/api/stripe', stripe)
app.use('/api/mail', mail)

// Fetch Angular UI asynchronously
app.use(express.static(path.join(__dirname, 'public')))
app.get('/*', async (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// Generic Errors
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    status: 'error',
    error: err
  })
})

// Listen to the Express Application
server.listen(CONFIG.PORT, () => console.log(`Express application running on port : ${CONFIG.PORT}`))
