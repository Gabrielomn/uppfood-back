const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
require('./router')(app)
app.listen (PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})