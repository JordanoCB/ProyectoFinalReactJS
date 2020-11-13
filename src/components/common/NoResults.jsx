import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LogoNoResults from './../../assets/img/noresults.png';

const NoResults = () => (
    <Grid item xs={12}>
        <Paper className="paperNoResults">
        <h3> Contenido No Encontrado </h3>
        <img src = { LogoNoResults } alt = "LogoNoResults" className = "LogoNoResults" />
        </Paper>
    </Grid>
);

NoResults.displayName = 'NoResults';

export default NoResults;