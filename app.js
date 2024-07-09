const express = require('express')
const cors = require('cors')

const transactionsController = require('./controllers/transactionsController')
const app = express()

app.use(cors())
app.use(express.json())


app.use('/transactions', transactionsController)

app.get('/', (req, res) => {
    res.send('M.O.K.A Presents: Budgt')
})


module.exports = app