const express = require('express')
const pool = require('../../mysql-connector')

const routerRiego = express.Router()

routerRiego.get('/:id', function (req, res) {
    console.log('GET /riego');    
    let id = req.params.id; // Aquí obtenemos el id de los parámetros de la ruta    
    pool.query('Select * from Log_Riegos WHERE electrovalvulaId = ?', [id], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

routerRiego.put('/', function (req, res) {

    console.log('PUT /riego');
    let electrovalvulaId = req.body.electrovalvulaId; // get electrovalvulaId from the request body    
    let estado = req.body.stateValve; // get estado from the request body

    pool.query('INSERT INTO Log_Riegos (estado, fecha, electrovalvulaId) VALUES (?, NOW() , ?)', [estado, electrovalvulaId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

module.exports = routerRiego