const express = require('express')
const pool = require('../../mysql-connector')

const routerMediciones = express.Router()

routerMediciones.get('/:id', function (req, res) {
    console.log('GET /mediciones');
    let id = req.params.id; // Aquí obtenemos el id de los parámetros de la ruta
    pool.query('Select * from Mediciones WHERE dispositivoId = ?', [id] , function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

routerMediciones.put('/', function (req, res) {

    console.log('PUT /mediciones');
    let electrovalvulaId = req.body.electrovalvulaId; // get electrovalvulaId from the request body    
    let valor = req.body.valorSens; // get estado from the request body

    pool.query('INSERT INTO Mediciones (fecha, valor, dispositivoId) VALUES (NOW(), ? , ?)', [valor, electrovalvulaId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

module.exports = routerMediciones

