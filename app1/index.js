const express = require('express')
const fetch = require("node-fetch")
const app = express()

app.get('/', (req, res) => {
  console.log("request to app1")
  fetch(process.env.APP2)
    .then(app2message => app2message.ok ? app2message.json() : Promise.reject())
    .then(app2message => {
      res.json({ id: 1234, ...app2message })
    })
    .catch(err => {
      res.json({ err })
    })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))