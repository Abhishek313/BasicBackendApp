require('dotenv').config()

const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send(`It's a home page`);
})

app.get('/fun', (req, res) => {
    res.send('this is fun page')
})

app.get('/login', (req, res) => {
    res.send('this is a login page')
})

app.get('/logout', (req, res) => {
    res.send('this is a login page')
})

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`)
})