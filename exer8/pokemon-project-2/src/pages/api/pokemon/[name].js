const API_URL = 'https://pokeapi.co/api/v2/';

export async function fetchPokemonData(name) {
    const res = await fetch(API_URL + 'pokemon/' + name);
    const pokemonData = await res.json();
    return pokemonData;
}


export default function handler(req, res) {

    if (req.method === "GET") {
        console.log(req.query);
        const { name } = req.query;
        if (req.method === "GET") {
            fetchPokemonData(name).then((data) => { res.status(200).json({ name: data.name, sprite: data.sprites.front_default, type: data.types[0].type.name});
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch Pokemon data' });
      });
        }
    }
}