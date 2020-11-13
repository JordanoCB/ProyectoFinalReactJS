import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import LogoPokemon from './../../assets/img/pokemon.png';
import Styles from './../../assets/css/styles.scss';

const Header = () => (
    <Fragment>
        <AppBar className = "appBarHeader"  position = "static">
            <Toolbar className = "toolbarHeader">
                <img src = { LogoPokemon } alt = "Logo-Pokemon" className = "LogoPokemon" />
                &nbsp; &nbsp;
                <h4>Proyecto React</h4>
            </Toolbar>
            <Toolbar className = "toobarLink">
                <Link to = {`/`}><b>Inicio</b></Link>
                <Link to = {`/Pokemon`}><b>Pokemon</b></Link>
            </Toolbar>
        </AppBar>
    </Fragment>
);

Header.displayName = 'Header';

export default Header;