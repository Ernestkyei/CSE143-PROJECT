//express web server
const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Ernest Hello');
})

const port = 3000

app.listen(process.env.port || port);
console.log('Web Server is listening  at ' + (process.env.port || port));