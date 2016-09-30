'use strict';

require('./config/dbModels');

let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors = require('cors');

let app = express();

// const CryptoJS = require("crypto-js");
//
// require('./config/crypt')(CryptoJS);

// Módulos da API
const NotaAPI = require('./modules/Nota/notaRoutes');

// CORS
app.use(cors());

// body-parser
app.use(bodyParser.json());


// API JSON
app.use('/api/notas', NotaAPI);

// server port listen on
const appListen = app.listen(3420);
console.log('Listen on PORT: ', appListen._connectionKey);
