// Dependencies
const app = require('express')()
const path = require('path')
const server = require('http').createServer(app)
const bodyParser = require('body-parser')
const cors = require('cors')
// const socketio = require('socket.io')(server)

// global._io = socketio
const CONFIG = require('./config/server.json')

// Routes
const auth = require('./routes/wso2/controller')
const kb = require('./routes/killbill/controller')
// const test = require('./routes/test/controller')
const dedup = require('./routes/dedup/controller')
// require('./routes/dedup/controller')(app, io)

// app.set('socketIo', socketio)

// CORS
app.use(cors())

// Parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Point static path to public
// app.use(express.static(path.join(__dirname, '../client/public')))

// Set our api routes
app.use('/api/wso2', auth)
app.use('/api/kb', kb)
app.use('/api/dedup', dedup)
// app.use('/api/test', test)

// Default page to show express has loaded
app.get('/', (req, res, next) => {
  res.sendFile(path.join(`${__dirname}/index.html`))
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

// Create HTTP server.

// Listen on provided port, on all network interfaces.
server.listen(CONFIG.PORT, () => console.log(`API running on localhost:${CONFIG.PORT}`))
