require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()
const {SERVER_PORT} = process.env
const controller = require('./controllers/controller')
const fruits = require('./data.json')
app.use(express.json())


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} fruits dancing hardcore`))


app.post('/api/fruits', controller.addToCart)
app.get('/api/fruits', controller.getItems)
app.put('/api/fruits/:id', controller.updateItem)
app.delete('/api/fruits/:id', controller.removeFromCart)
app.get('/api/cart', controller.getCartItems)