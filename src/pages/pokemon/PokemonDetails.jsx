import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const PokemonDetails = ({ id, nombre, sprites }) => (
    <Grid>
        <Paper className = "PokemonPaper" >
            <h2> { nombre } </h2>
            <img src = { sprites[4] } alt = { nombre } />
            <strong>{ id }</strong>
        </Paper>
    </Grid>
);

PokemonDetails.displayName = 'PokemonDetails';

export default PokemonDetails;