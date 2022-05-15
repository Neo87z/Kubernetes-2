const express = require('express')
const app = express()
const port = 3004

app.get('/', (req, res) => {
  res.send('App 2 works FROm pipe!')
})

app.listen(port, () => {
  console.log(`app r=nn=ing on ${port}`)
})