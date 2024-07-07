const express = require('express')
const transactions = express.Router()
const transactionsArr = require('../models/transactions')

transactions.get('/', (req, res) => {
    res.json(transactionsArr)
})

module.exports = transactions