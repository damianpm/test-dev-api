const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

app.use(cors())

app.get('/plain-text', (req, res) => {
  res.send('Hello World!')
})

app.get('/json', (req, res) => {
  res.json({msg: "Hello World!"})
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})