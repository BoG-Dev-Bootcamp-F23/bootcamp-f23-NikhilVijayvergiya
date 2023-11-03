
// import { fetchTypeData } from "../_data";

const API_URL = 'https://pokeapi.co/api/v2/type/';


async function fetchTypeData(type) {
    const res = await fetch(`${API_URL}${type}`);
    const typeData = await res.json();
    return typeData;
}


export default async function handler(req, res) {
    const { type } = req.query;
    // const pokemonTypes = [];
    console.log(req.query);
    
    if (req.method === "GET") {
        try {
            const typeData = await fetchTypeData(type);
            if (!typeData) {
                res.status(400).json({Error: "Invalid Entry"});
            }
            const newData = typeData.pokemon.map((element) => element.pokemon.name);
            res.status(200).json({ pokemon: newData });
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch pokemon data'});
        }
        // const data = await fetchTypeData(typeName);
        // data.pokemon.forEach((element) => {
        //     pokemonTypes.push(element.pokemon.name);
        // });
        }

    }
    