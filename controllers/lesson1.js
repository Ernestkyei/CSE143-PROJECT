const ericRoute = (req, res) =>{
    res.send('Sarah seen. hope you are good');
}


const emilyRoute = (req, res) =>{
    res.send('Hello How are you doing... Emily')
}


const hannaRoute = (req, res) =>{
    res.send('Hello How are you doing... Hannah')
}

module.exports = {
    emilyRoute,
    hannaRoute,
    ericRoute

}