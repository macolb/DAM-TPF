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

routerRiego.get('/', function (req, res) {

    let dispositivoId = req.query.dispositivoId; // get electrovalvulaId from the request body   

    console.log(`GET /ultimo estado de ${dispositivoId}`);    

    pool.query('SELECT estado FROM Log_Riegos WHERE electrovalvulaId = ? ORDER BY fecha DESC LIMIT 1', [dispositivoId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

routerRiego.put('/', function (req, res) {

    let dispositivoId = req.body.dispositivoId; // get electrovalvulaId from the request body    
    let estado = req.body.stateValve; // get estado from the request body
    console.log(`PUT /ultimo estado de ${dispositivoId} en ${estado}`);


    pool.query('INSERT INTO Log_Riegos (estado, fecha, electrovalvulaId) VALUES (?, NOW() , ?)', [estado, dispositivoId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

module.exports = routerRiego