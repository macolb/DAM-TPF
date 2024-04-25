const express = require('express')
const pool = require('../../mysql-connector')

const routerMediciones = express.Router()

routerMediciones.get('/', function (req, res) {
    console.log('GET /mediciones');
    pool.query('Select * from Mediciones', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

module.exports = routerMediciones