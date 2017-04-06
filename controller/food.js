const Food = require('../models/food')

module.exports = {

  createFood : (req, res)=> {
    let newFood = Food({
      name:  req.body.name,
      price: req.body.price,
      expired_date: req.body.expdate
    })
    newFood.save((err)=> {
        if(err) {
          res.send('Add new food failed')
        } else {
          res.send(`Food ${req.body.name} added into Database`)
        }
    })
  },
  listFood : (req, res)=> {
    Food.find({}, (err, foods)=> {
      if(err) {
        res.send('Request Data to server failed')
      } else {
        res.send(foods)
      }
    })
  },
  findOneFood: ()=> {
    Food.findOne({ _id : req.params.objectId}, (err,food)=> {
      if(err) {
        res.send(`Find food ID: ${req.params.objectId} failed`)
      } else {
        res.send(food)
      }
    })
  },
  deleteFood : (req, res)=> {
    Food.findByIdAndRemove(req.params.objectId, (err, food)=> {
      if(err){
        res.send('Delete food failed')
      } else {
        res.send(`Food ${food.title} deleted`)
      }
    })
  },
  editFood : (req, res)=> {
    Food.findOneAndUpdate(
      { _id: req.params.objectId},
      {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }, (err, food)=> {
        if(err) {
          res.send('Update data Failed')
        } else {
          res.send(`Food ${food.title} updated`)
        }
      }
    )
  }

}