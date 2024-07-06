const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send('M.O.K.A Presents: Budgtr')
})

module.exports = app