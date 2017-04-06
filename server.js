const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 3000 || process.env.PORT

const app = express()

/* MONGOOSE CONNECT */

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/restaurant')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', ()=> {
  console.log('Mongo Database Connection established')
})

/* APP CONFIGURATION */

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/* APP ROUTES */
const food = require('./routes/food')
const restaurant = require('./routes/restaurant')

app.use('/food', food)
app.use('/rest', restaurant)

/* LISTEN PORT */
app.listen(port)
console.log('listening to port'+port)