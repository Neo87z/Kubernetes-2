const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
  res.send('Gi From APp 2')
})

app.listen(port, () => {
  console.log(`app r=nn=ing on ${port}`)
})