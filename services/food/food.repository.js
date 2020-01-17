const Food = require('../../db/models/food')

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
    return Food.find({title : { $regex : query }});
}