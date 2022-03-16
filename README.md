# calindra-backend

A proposta do desafio e consumir a [api de geolocalizão do google](https://developers.google.com/maps/documentation/geocoding/start)
e retornar as distâncias entre dois ou mais endereços. 

## Tecnologias 
- HTML
- CSS
- JavaScript
- NodeJS
- Express
- [node-geocoder](https://www.npmjs.com/package/node-geocoder)
- [haversine](https://www.npmjs.com/package/haversine)

# Rodando o projeto

```
  - npm install
  - npm start
```
Para usar a api do google é necessario possuir uma chave, [infomações sobre a chave](https://developers.google.com/maps/documentation/geocoding/get-api-key).
Para utilizar a chave no projeto crie um arquivo `.env` e adicione o conteúdo igual ao exemplo.
```
  API_KEY=SUA_CHAVE
```
