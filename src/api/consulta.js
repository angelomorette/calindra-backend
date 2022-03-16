const geocoder = require('./geocoder');
const haversine = require('./haversine');

module.exports = {
    async getDados(req, res) {
        const address = req.body.address;

        //recebendo dados da api do google
        let dadosGoogle = await geocoder.consultaGeocoder(address);

        //verificando os dados de retorno
        let verificaDadosGoogle = [];

        for (let i = 0; i < address.length; i++) {
            if (dadosGoogle[i].value.raw.status !== 'OK') {

                verificaDadosGoogle.push({
                    "endereco": address[i],
                    "tipo de error": dadosGoogle[i].value.raw.status
                });
            }
        }
        if (verificaDadosGoogle.length !== 0) {
            res.json(verificaDadosGoogle);

        } else {

            //selecionando logitude e latitude
            let coordenadas = {};

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