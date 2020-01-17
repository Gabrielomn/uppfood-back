const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const cors = require('cors')
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, access-control-allow-origin");
    next();
});
require('./router')(app)
app.listen (PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})