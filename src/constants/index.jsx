const base_url = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonId = query => `${base_url}${query}`;