const API_URL = 'https://pokeapi.co/api/v2/';

async function fetchPokemonData() {
    const randNum = Math.floor(Math.random() * 1017) + 1; //make out of true number of pokemon
    const res = await fetch(API_URL + 'pokemon/' + randNum + '/');
    const pokemonData = await res.json();
    return pokemonData;
}


async function fetchTypeData(type) {
    const res = await fetch(API_URL + "type/" + type);
    const typeData = await res.json();
    return typeData;
}

async function fetchEvolveData() {
    const res = await fetch(API_URL + "type/");
    const evolveData = await res.json();
    return evolveData;
}


export  { fetchPokemonData, fetchTypeData, fetchEvolveData  };