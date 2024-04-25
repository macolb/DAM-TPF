const express = require('express')
const pool = require('../../mysql-connector')

const routerRiego = express.Router()

routerRiego.get('/', function (req, res) {
    console.log('GET /riegos');    
    pool.query('Select * from Log_Riegos', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

module.exports = routerRiego