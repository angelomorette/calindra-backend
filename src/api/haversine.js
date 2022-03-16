const haversine = require('haversine');

module.exports = {
    async calcular(coordenadas, address) {

        let listaDistancias = [];
        let count = Object.keys(coordenadas).length;

        //calculando a distancia
        for (let l = 0; l < count; l++) {
            for (let c = l + 1; c < count; c++) {

                const distancia = (haversine(coordenadas[l], coordenadas[c]));

                listaDistancias.push({
                    endereco1: address[l],
                    endereco2: address[c],
                    distancia_km: parseFloat(distancia.toFixed(2))
                });
            }
        }

        //Deixando em ordem crescente
        let listaPorOrdemDeAproximacao = [];

        listaPorOrdemDeAproximacao = listaDistancias.sort(function (a, b) {
            return a.distancia_km < b.distancia_km ? -1 : a.distancia_km > b.distancia_km ? 1 : 0;
        });

        let menorDistancia = listaPorOrdemDeAproximacao[0];
        let maiorDistancia = listaPorOrdemDeAproximacao[listaPorOrdemDeAproximacao.length - 1];

        return { menorDistancia, maiorDistancia, listaPorOrdemDeAproximacao };
    }
}