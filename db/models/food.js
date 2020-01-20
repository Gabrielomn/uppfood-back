const mongo = require('../database')

const FoodSchema = mongo.Schema({
    id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    cuisine:{
        type:String,
        required:true
    }
})

mongo.model('food', FoodSchema)
const food = mongo.model('food')
module.exports = food