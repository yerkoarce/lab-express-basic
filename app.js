const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/lab-express-basic/public')))

/* Home */
app.get('/home', (req, res, next) => {
  res.sendFile(__dirname + '/views/home.html')
})


const PORT = 3000

app.listen(PORT, () => {
  console.log(`App listen in port ${PORT}`)
})