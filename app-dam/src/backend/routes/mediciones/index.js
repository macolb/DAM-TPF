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

routerMediciones.get('/', function (req, res) {

    let dispositivoId = req.query.dispositivoId; // get electrovalvulaId from the request body   
    console.log(`GET /ultima mediciones de ${dispositivoId}`);

    pool.query('SELECT valor FROM Mediciones WHERE dispositivoId = ? ORDER BY fecha DESC LIMIT 1', [dispositivoId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

routerMediciones.put('/', function (req, res) {

    let dispositivoId = req.body.dispositivoId; // get electrovalvulaId from the request body    
    let valor = req.body.valorSens; // get estado from the request body
    console.log(`PUT /ultima medicion de ${dispositivoId} de ${valor}`);

    pool.query('INSERT INTO Mediciones (fecha, valor, dispositivoId) VALUES (NOW(), ? , ?)', [valor, dispositivoId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

module.exports = routerMediciones

