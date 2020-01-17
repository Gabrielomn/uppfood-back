const Food = require('../../db/models/food')
const repository = require('./food.repository')
const bodyParser = require('body-parser')

exports.getAll = async(req, res) =>{
    let foods = await repository.getAll()
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
