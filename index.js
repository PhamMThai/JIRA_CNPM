const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 5000

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})