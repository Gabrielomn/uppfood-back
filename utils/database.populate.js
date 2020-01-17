const menu = require('./foods.json').food
const service = require('../services/food/food.repository')

menu.forEach((element) =>{
    try{
        console.log(`Trying to insert ${element.title}` )
        service.create(element)
    }catch(e){
        console.log(`error trying to insert ${element.title}`)
    }
})