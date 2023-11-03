import { fetchPokemonData } from "../pokemon/[name].js";

const API_URL = `https://pokeapi.co/api/v2/evolution-chain/`;



async function fetchEvolveData(id) {
    const res = await fetch(API_URL + id);
    const evolveData = await res.json();
    return evolveData;
}


export default async function handler(req, res) {
    if (req.method === "GET") {
        const { name } = req.query;
        const tempData = await fetchPokemonData(name);
        if (!tempData || typeof tempData !== 'object') {
            res.status(400).json({Error: "Invalid Data"});
        } else {
            const id = tempData.id;
            console.log(id);
            try {
                const newData = await fetchEvolveData(id);
                if (!newData.chain.evolves_to[0]?.species.name) {
                    res.status(200).json({next_evolution: newData.chain.species.name});
                } else {
                    res.status(200).json({Next_Evolution: newData.chain.evolves_to[0].species.name});
                }
            } catch (error) {
                res.status(500).json({error: "failed to fetch data"});
            }

    }


}
}