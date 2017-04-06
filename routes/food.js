const express = require('express')
const router = express.Router()
const Food = require('../controller/food')

// GET FOOD LIST
router.get('/', Food.listFood)

// POST ADD NEW FOOD
router.post('/', Food.createFood)

// GET FIND ONE FOOD
router.get('/find/:objectId', Food.findOneFood)

// PUT UPDATE ONE FOOD
router.put('/update/:objectId', Food.editFood)

// DELETE ONE FOOD
router.delete('/delete/:objectId', Food.deleteFood)

module.exports = router