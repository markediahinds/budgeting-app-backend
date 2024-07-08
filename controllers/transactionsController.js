const express = require('express')
const transactions = express.Router()
const transactionsArr = require('../models/transactions')


transactions.post('/', (req, res) => {
    transactionsArr.push(req.body)
    res.status(201).json(transactionsArr[transactionsArr.length - 1])
})

transactions.get('/', (req, res) => {
    res.json(transactionsArr)
})

transactions.get('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    if (transactionsArr[arrayIndex]) {
        res.status(200).json(transactionsArr[arrayIndex])
    } else {
        res.status(404).json({ error: `Transaction Not Found` })
    }
})

transactions.put('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    transactionsArr[arrayIndex] = req.body
    res.status(200).json(transactionsArr[arrayIndex])
})

transactions.delete('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    if(transactionsArr[arrayIndex]) {
        transactionsArr.splice(arrayIndex, 1)
        res.status(200).json({ message: `Successfully deleted a Transaction`}) // insert image of Pirate
    } else {
        res.status(404).json({ error: `Transaction Not Found` })
    }
})


module.exports = transactions