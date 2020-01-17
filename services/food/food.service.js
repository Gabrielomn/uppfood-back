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
