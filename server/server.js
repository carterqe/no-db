require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()
const {SERVER_PORT} = process.env

app.use(express.json())


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} fruits dancing hardcore`))


app.post('/api/fruit', (req, res) => res.send('POST works'))
app.get('/api/fruit', (req, res) => res.send('GET works'))
app.put('/api/fruit/:id', (req, res) => res.send('PUT works'))
app.delete('/api/fruit/:id', (req, res) => res.send('DELETE works'))