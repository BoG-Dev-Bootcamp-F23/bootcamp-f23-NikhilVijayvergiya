import { fetchPokemonData } from "./pokemon/[name]";


export default async function handler(req, res) {
    if (req.method === "POST") {
        const body = req.body;
        console.log(body);
        if (!body) {
            res.status(400).json({ Error : "Insufficient Information"});
        }
        try {
            const pokemon1 = body.pokemon1;
            console.log(pokemon1);
            const pokemon2 = body.pokemon2;
            console.log(pokemon2);

            const data1 = await fetchPokemonData(pokemon1);
            console.log(data1?.stats[0].base_stat);
            const data2 = await fetchPokemonData(pokemon2);
            console.log(data2?.stats.base_stat);

            if (!data1 || typeof data1 !== "object" || !data2 || typeof data2 !== "object") {
                res.status(400).json({Error: "Invalid Body"});
            }

            if (data1?.stats[0].base_stat > data2?.stats[0].base_stat) {
                res.status(200).json({ Winner: pokemon1 });
            } else if (data1?.stats[0].base_stat < data2.stats[0].base_stat) {
                res.status(200).json({ Winner: pokemon2 });
            } else {
                res.status(200).json({ Winner: "TIE" })
            }
        } catch (error) {
            res.status(500).json({Error: "Failed to fetch data"});
        }
    }


}