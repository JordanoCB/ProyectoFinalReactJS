import React, { createContext, useState } from 'react';
import { getPokemonId } from './../constants';
import NoResults from './../components/common/NoResults';

export const PokemonContext = createContext();

const PokemonContextProvider =({ children }) => {
    const [ doneFetch, setDoneFetch ] = useState(true);
    const [ pokemon, setPokemon ] = useState([]);
    const [ currentQuery, setCurrentQuery ] = useState('');
    const [ text, setText ] = useState('Ingresa el nombre o ID del pokemon');

    const getPokemon = query => {
        fetch(getPokemonId(query))
        .then(res => res.json())
        .then(data => {
            const PokemonData = data;
            console.log(PokemonData);
            setPokemon(PokemonData);
            console.log(pokemon);
            setDoneFetch(true);
            setText(PokemonData.length ? 'Results' : NoResults );
        })
        .catch(err => console.log(err));
    }

    const validateQuery = (e, query = document.querySelector('#query').value.toLowerCase().trim()) => {
        if(e.type === 'keypress' && e.key !== 'Enter') return;

        if(query && query !== currentQuery){
            setCurrentQuery(query);
            setDoneFetch(false);
            getPokemon(query);
        }
    }

    return(
        <PokemonContext.Provider value = {{ doneFetch, pokemon, validateQuery, text }}>
            { children }
        </PokemonContext.Provider>
    );

};

PokemonContextProvider.displayName = 'PokemonContextProvider';

export default PokemonContextProvider;