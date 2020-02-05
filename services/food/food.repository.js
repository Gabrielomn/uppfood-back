const Food = require('../../db/models/food')
const convertToTitleCase = require('../../utils/titleCase.script.js').convertToTitleCase
exports.create = async(body) => {
    const food = await new Food(body).save().catch((err)=>{
        console.log(err)
    })
    return food;
}

exports.getAll = async() =>{
    let foods = await Food.find().catch(err => {
        console.log('didnt found anything')
    })
    return foods

}

exports.getByCategory = async(category) =>{
    let foods = await Food.find({cuisine:category})
    return foods
}

exports.getByQuery = async(query) => {
    query = convertToTitleCase(query)
    return Food.find({title : { $regex : query }});
}

exports.update = async(title, body) => {
    let food = await Food.findOneAndUpdate({title: title}, body)
    return food
}