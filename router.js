const express = require('express')
const router = express.Router()
const food = require('./services/food/food.router')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json')


router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use('/food', food)
module.exports =  (app) => {
    app.use('/', router)
}