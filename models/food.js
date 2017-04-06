const mongoose = require('mongoose')
const Schema = mongoose.Schema

let foodSchema = new Schema({
  name: String,
  price: Number,
  expired_date: Date
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food
