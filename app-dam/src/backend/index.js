//=======[ Settings, Imports & Data ]==========================================

var PORT = 3000;

const cors = require('cors');

var express = require('express');
var app = express();
var pool = require('./mysql-connector');

const routerDispositivo = require('./routes/dispositivos');
const routerMediciones = require('./routes/mediciones');
const routerRiego = require('./routes/riego');


const corsOptions = {
    origin: '*',        // En caso de que se quiera restringir el acceso a la API
}

var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

var authenticator = function (res, res, next) {
    // si el usuario está autenticado,
    // si el usuario ingresó datos válidos
    next()
    // si el usuario ingresó datos incorrectos
    res.send({message: 'Datos inválidos'}).status(403)
}

// to parse application/json
app.use(express.json());
// to serve static files
app.use(express.static('/home/node/app/static/'));
app.use(cors(corsOptions))
app.use(myLogger)

//=======[ Routes ]============================================================

app.use('/dispositivo', routerDispositivo)
app.use('/mediciones', routerMediciones)
app.use('/riego', routerRiego)

//=======[ Main module code ]==================================================


var checkdata = function (req, res, next) {
    console.log('Inicializacion correcta')
    next()
}

var senddata = function (req, res, next) {
    res.send({'mensaje': 'Tamo activo!'}).status(200)
}

app.get('/', [checkdata,senddata]);

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});
