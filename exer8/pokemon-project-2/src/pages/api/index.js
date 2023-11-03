import { fetchPokemonData } from './_data.js'

export default function handler(req, res) {
    console.log(fetchPokemonData)
    if (req.method === "GET") {
        fetchPokemonData().then((data) => { res.status(200).json( {name: data.name, sprite: data.sprites.front_default, type: data.types[0].type.name});
  })
  .catch((error) => {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Pokemon data' });
  });

    }
}






