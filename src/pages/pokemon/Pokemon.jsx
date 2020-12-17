import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import PokemonDetails from './PokemonDetails';
import Mesagge from '../../components/common/Message';

const Pokemon = ({ text, pokemon }) => (
    <Fragment>
        <Mesagge text = { text }  />
        <div>
            <Grid container spacing = { 6 } justify = "center" >
                {
                    pokemon.map(pokemon =>{
                        const {
                            id,
                            name,
                            sprites
                        } = pokemon;
                        return(
                            <PokemonDetails
                            key = { id }
                            nombre = { name }
                            image = { sprites.front_default }
                            />
                        );
                    })
                }
            </Grid>
        </div>
    </Fragment>
);

Pokemon.displayName = 'Pokemons';

export default Pokemon;