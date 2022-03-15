const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const route = require('./routes');
require('dotenv').config()

server.use('/public', express.static(__dirname + '/public'));
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use(route);

let listener = server.listen(process.env.PORT || 3000, (error) => {
    if (error) console.log(err);
    console.log('Your app is listening on port ' + listener.address().port);
});