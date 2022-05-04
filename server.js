const express = require('express');
const app = express();
const port = 8081;

const server = app.listen(port, function () {
    console.log("App listening at port ", port)
})

app.get('/', (req, res) => {
    res.send('Hello from app version 0.0.1');
})