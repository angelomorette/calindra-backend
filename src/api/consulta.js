const geocoder = require('./geocoder')
module.exports = {
    async getDados(req, res) {
        const address = req.query.add;
        console.log(address)
        colection = await geocoder.consultaGeocoder(address);

        res.json(colection)
    }
}