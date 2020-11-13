import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchPokemon = ({ validateQuery }) => (
    <Paper className = "SearchPaper" >
        <TextField
        id = "query"
        label = "Nombre o ID"
        margin = "normal"
        variant = "outlined"
        onKeyPress = { e => validateQuery(e) }
        />
        <IconButton onClick = { e => validateQuery(e) } >
            <SearchIcon />
        </IconButton>
    </Paper>
);

SearchPokemon.displayName = 'SearchPokemon';

export default SearchPokemon;