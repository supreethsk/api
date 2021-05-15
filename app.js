const express = require("express");
const bodyParser = require('body-parser')
const mysql = require('mysql')
const app = express();

const PORT = 5000;

app.get('/', function (req, res) {
    res.send('Hello World');
 })

app.listen(PORT, () =>
{
    console.log("Server is ready at"+" "+PORT);
});