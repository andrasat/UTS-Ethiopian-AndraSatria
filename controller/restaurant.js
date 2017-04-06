const Restaurant = require('../models/Restaurant')

module.exports = {

  createRestaurant : (req, res)=> {
    let menuArr = (req.body.menu).split(',')
    let newRestaurant = Restaurant({
      name:  req.body.name,
      owner: req.body.owner,
      address: req.body.address,
      open_status: req.body.open_status,
      menu: menuArr
    })
    newRestaurant.save((err)=> {
        if(err) {
          res.send('Add new restaurant failed')
        } else {
          res.send(`Restaurant ${req.body.name} added into Database`)
        }
    })
  },
  listRestaurant : (req, res)=> {
    Restaurant.find({}, (err, restaurants)=> {
      if(err) {
        res.send('Request Data to server failed')
      } else {
        res.send(restaurants)
      }
    })
  },
  findOneRestaurant: ()=> {
    Restaurant.findOne({ _id : req.params.objectId}, (err,restaurant)=> {
      if(err) {
        res.send(`Find restaurant ID: ${req.params.objectId} failed`)
      } else {
        res.send(restaurant)
      }
    })
  },
  deleteRestaurant : (req, res)=> {
    Restaurant.findByIdAndRemove(req.params.objectId, (err, restaurant)=> {
      if(err){
        res.send('Delete restaurant failed')
      } else {
        res.send(`Restaurant ${restaurant.title} deleted`)
      }
    })
  },
  editRestaurant : (req, res)=> {
    Restaurant.findOneAndUpdate(
      { _id: req.params.objectId},
      {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }, (err, restaurant)=> {
        if(err) {
          res.send('Update data Failed')
        } else {
          res.send(`Restaurant ${restaurant.title} updated`)
        }
      }
    )
  }

}