const geocoder = require('./geocoder');
const haversine = require('./haversine');

module.exports = {
    async getDados(req, res) {
        const address = req.body.address;

        //recebendo dados da api do google
        let dadosGoogle = await geocoder.consultaGeocoder(address);

        //verificando pesquisa
        let verificaPesquisa = []
        for (let i = 0; i < address.length; i++) {
            if (dadosGoogle[i].value.raw.status !== 'OK') {
                verificaPesquisa.push({
                    "endereço" : address[i],
                    "tipo de error": dadosGoogle[i].value.raw.status
                });
            }
        }
        if (verificaPesquisa.length !== 0) {
            res.json(verificaPesquisa);

        } else {

            //selecionando logitude e latitude
            let coordenadas = {}

            for (let item in dadosGoogle) {
                coordenadas[item] = {
                    latitude: dadosGoogle[item].value[0].latitude,
                    longitude: dadosGoogle[item].value[0].longitude
                };
            }

            //calculando distancias e retornando o resultado final
            let resultadoCalculo = await haversine.calcular(coordenadas, address);

            res.json(resultadoCalculo);
        }
    }
}