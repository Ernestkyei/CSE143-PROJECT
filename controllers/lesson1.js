const sarahRoute = (req, res) =>{
    res.send('Sarah seen. hope you are good');
}


const emilyRoute = (req, res) =>{
    res.send('Hello How are you doing...')
}


const hannaRoute = (req, res) =>{
    res.send('Hello How are you doing...')
}

module.exports = {
    emilyRoute,
    hannaRoute,
    sarahRoute

}