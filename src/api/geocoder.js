const NodeGeocoder = require('node-geocoder');
require('dotenv').config();

const geocoder = NodeGeocoder({
    provider: 'google',
    apiKey: `${process.env.API_KEY}`
});

module.exports = {
    async consultaGeocoder(address) {
        const dados = geocoder.batchGeocode(address, function (err, results) {
            if (err) console.log(err);
            return results;
        });
        return dados;
    }
}