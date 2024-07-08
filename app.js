const express = require('express')
const transactionsController = require('./controllers/transactionsController')
const app = express()

app.use(express.json())

app.use('/transactions', transactionsController)

app.get('/', (req, res) => {
    res.send('M.O.K.A Presents: Budgtr')
})


module.exports = app