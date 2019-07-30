const express = require('express')
const fs = require('fs')
const app = express()
const port = 3001

let file_name_array
fs.readdir('./books', (err, data) => {
  if(err) {

  }
  else {
    file_name_array = data
  }
})

app.get('/api/get_books', (req, res) => {
  res.send(file_name_array)
})
app.use(express.static('./books'))

app.listen(port, () => console.log(`app listening on ${port}`))