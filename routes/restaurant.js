const express = require('express')
const router = express.Router()
const Restaurant = require('../controller/restaurant')

// GET RESTAURANT LIST
router.get('/', Restaurant.listRestaurant)

// POST ADD NEW RESTAURANT
router.post('/', Restaurant.createRestaurant)

// GET FIND ONE RESTAURANT
router.get('/find/:objectId', Restaurant.findOneRestaurant)

// PUT UPDATE ONE RESTAURANT
router.put('/update/:objectId', Restaurant.editRestaurant)

// PUT ADD MENU TO ONE RESTAURANT
router.put('/menu/:objectId', Restaurant.addMenuRestaurant)

// DELETE ONE RESTAURANT
router.delete('/delete/:objectId', Restaurant.deleteRestaurant)

module.exports = router