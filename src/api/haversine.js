const haversine = require('haversine');

module.exports = {
    async calcular(coordenadas, address) {
        
        let listaDistancias = [];
        let count = Object.keys(coordenadas).length
        
        for (let l = 0; l < count; l++) {
            for (let c = l + 1; c < count; c++) {
                
                const distancia = (haversine(coordenadas[l], coordenadas[c]));

                listaDistancias.push({
                    endereco1: address[l],
                    endereco2: address[c],
                    distancia: distancia
                });
            }
        }

        let menorDistancia = listaDistancias[0];
        let maiorDistancia = listaDistancias[0];

        for(let i = 1; i < listaDistancias.length; i++){
            if(listaDistancias[i].distancia < menorDistancia.distancia)
            {
                menorDistancia = listaDistancias[i];
            }
            if(listaDistancias[i].distancia > maiorDistancia.distancia){
                maiorDistancia = listaDistancias[i];
            }
        }
        return {menorDistancia, maiorDistancia, listaDistancias};
    }
}