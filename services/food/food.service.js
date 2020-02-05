const Food = require('../../db/models/food')
const repository = require('./food.repository')
const bodyParser = require('body-parser')

exports.getAll = async(req, res) =>{
    let foods
    if(!req.query.substring){
        foods = await repository.getAll()
    }else{
        foods = await repository.getByQuery(req.query.substring)
    }
    res.status(200).send(foods)
}

exports.getByCategory = async(req, res) =>{
    let foods = await repository.getByCategory(req.params.cuisine)
    if(foods){
        res.status(200).send(foods)
    }else{
        res.status(404).json("Most likely there wasnt any items on that category")
    }
}
exports.create = async(req, res) => {
    let food = await repository.create(req.body)
    if(food){
        res.status(201).send(food)
    }else{
        res.status(400).json('Something went wrong')
    }
}

exports.update = async(req, res)=> {
    let food = await repository.update(req.params.title, req.body)
    if(food){
        res.status(200).send(food)
    }else{
        res.status(400).json("something went wrong")
    }
    
}


