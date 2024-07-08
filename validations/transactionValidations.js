const checkForNameKey = (req, res, next) => {
    if(req.body.hasOwnProperty('name')) { // if there are no errors
        next() // move on to the next function inside that sequence
    } else {
        
    }
}