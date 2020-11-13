import React, { Fragment, useContext } from 'react';
import { PokemonContext } from './../../contexts/PokemonContexts';
import SearchPokemon from './../../pages/pokemon/SearchPokemon';
import Pokemon from './../../pages/pokemon/Pokemon';
import ProgressBar from './../../components/common/ProgressBar';
import Mesagge from './../../components/common/Message';

const Pkm = () => {
    const { doneFetch, pokemon, validateQuery, text } = useContext(PokemonContext);

    return(
        <Fragment>
            <SearchPokemon validateQuery = { validateQuery } />
            {
                doneFetch ?
                (pokemon.length ? <Pokemon text = { text } pokemon = { pokemon } /> : <Mesagge text = { text } />)
                :
                    <ProgressBar />
            }
        </Fragment>
    );
};

Pkm.displayName = 'Pkm';

export default Pkm;