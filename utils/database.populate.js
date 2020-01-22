const menu = require('./foods.json').food
const service = require('../services/food/food.repository')
const imgs = {
    "burgers":"https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000zjFF4EAM/5b68bd9be4b0e90f7b128bf1.jpg&w=710&h=462",
    "salad":"https://www.tablefortwoblog.com/wp-content/uploads/2018/05/quick-chopped-salad-recipe-photos-tablefortwoblog-1.jpg",
    "beverage":"http://fhscandinox.com/Files/Images/Applikationer/L%C3%A6skedrik.jpg",
    "pizza":"https://www.assai.com.br/sites/default/files/styles/blog_destaque/public/blog/pizza-1.jpg?itok=dgidt0aU",
    "chinese":"https://hips.hearstapps.com/del.h-cdn.co/assets/17/23/1496940098-shrimp-veggie-lo-mein-1sm.jpg?crop=1.0xw:1xh;center,top&resize=980:*"
}
menu.forEach((element) =>{
    try{
        console.log(`Trying to insert ${element.title}` )
        let food = Object.assign(element, {"imageLink":imgs[element["cuisine"]]})
        service.create(food)
    }catch(e){
        console.log(`error trying to insert ${element.title}`)
    }
})