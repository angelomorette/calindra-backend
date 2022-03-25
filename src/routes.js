const express = require('express');
const route = express.Router();
const consulta = require('./api/consulta');

route.get('/consulta', consulta.getDados);

module.exports = route;