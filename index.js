const express = require('express')
const app = express()
const port = 80

const calculator = require('./calculator')

app.get('/', (req, res) => {
const { temperature, time } = req.query

const calculatedResult = calculator(parseInt(temperature, 0), parseInt(time, 0))

  res.json(calculatedResult)
})

app.listen(port, () => {
  console.log(`Temperature calculator app listening at http://localhost:${port}`)
})