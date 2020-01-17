const express = require('express')
const router = express.Router()
const food = require('./services/food/food.router')
router.use('/food', food)
module.exports =  (app) => {
    app.use('/', router)
}