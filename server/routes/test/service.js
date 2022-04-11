function fetchStreamingData(res, io) {
  res.status
  io.on('connect', socket => {
    console.log('Socket Connection established')
    socket.send('Hi')
    // console.log(socket)
    // socket.on('getStreamingData', _ => {
    //   console.log(_)
    // })
    // console.log('client connected')
    // const testData = [{
    //   id: 'bucket-1',
    //   location: 'Somewhere in the Internet'
    // }, {
    //   id: 'bucket-2',
    //   location: 'Somewhere in the Internet'
    // }, {
    //   id: 'bucket-2',
    //   location: 'Somewhere in the Internet'
    // }]
    // setTimeout(() => { io.emit('test', testData) }, 3000)
  })

}

module.exports = {
  fetchStreamingData
}
