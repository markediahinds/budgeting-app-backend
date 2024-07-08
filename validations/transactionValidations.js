const checkForNameKey = (req, res, next) => {
    if(req.body.hasOwnProperty('item_name')) { 
        next() 
    } else {
        res.send({ error: `Not quite, Transactions must include the item's name`})
    }
}

module.exports = checkForNameKey