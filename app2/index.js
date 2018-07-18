const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log("request to app2")
  res.json({message: "app2 standing by!"})}
)

app.listen(3000, () => console.log('Example app listening on port 3000!'))