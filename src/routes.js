const express = require('express');
const route = express.Router();
const consulta = require('./api/consulta');

route.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

//quando cai na rota ele chama consulta
route.get('/consulta', consulta.getDados);

module.exports = route;