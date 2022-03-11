const express = require('express');
const server = express();
const route = require('./route');
require('dotenv').config()

// server.use(express.static(__dirname + '/public'));

server.use(route);

var listener = server.listen(process.env.PORT || 3000, (error) => {
    if (error) console.log(err);
    console.log('Your app is listening on port ' + listener.address().port);
});