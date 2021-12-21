const fetch = require('node-fetch');

exports.handler =  async () => {
    const Poke_Api = "https://pokeapi.co/api/v2/pokedex/kanto"
    const response = await fetch(Poke_Api)
    const data = await  response.json()
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}

