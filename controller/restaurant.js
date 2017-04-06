const Restaurant = require('../models/restaurant')

module.exports = {

  createRestaurant : (req, res)=> {
    let menuArr = req.body.menu ? (req.body.menu).split(',') : req.body.menu
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
    Restaurant
      .find({})
      .populate('menu')
      .exec((err, restaurants)=> {
        if(err) {
          res.send('Request Data to server failed')
        } else {
          res.send(restaurants)
        }
      })
  },
  findOneRestaurant: (req, res)=> {
    Restaurant
      .findOne({ _id : req.params.objectId})
      .populate('menu')
      .exec((err, restaurant)=> {
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
        res.send(`Restaurant ${restaurant.name} deleted`)
      }
    })
  },
  editRestaurant : (req, res)=> {
    let menuArr = req.body.menu ? (req.body.menu).split(',') : req.body.menu
    Restaurant.findOneAndUpdate(
      { _id: req.params.objectId},
      {
        name:  req.body.name,
        owner: req.body.owner,
        address: req.body.address,
        open_status: req.body.open_status,
        menu: menuArr
      }, (err, restaurant)=> {
        if(err) {
          res.send('Update data Failed')
        } else {
          res.send(`Restaurant ${restaurant.name} updated`)
        }
      }
    )
  },
  addMenuRestaurant : (req, res)=> {
    let menuArr = req.body.menu ? (req.body.menu).split(',') : req.body.menu
    Restaurant.findOneAndUpdate(
      { _id: req.params.objectId},
      { menu : menuArr },
      (err, restaurant)=> {
        if(err) {
          res.send('Menu failed to add')
        } else {
          res.send(`Menu added to ${restaurant.name}`)
        }
      }
    )
  }

}