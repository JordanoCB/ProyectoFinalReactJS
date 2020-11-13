import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Footer = () => (
    <Grid item xs={12}>
        <Paper>
            <footer className = "footer">
                <p> <strong>Jordano Contreras  -  { new Date().getFullYear() }</strong></p>
            </footer>
        </Paper>
    </Grid>
);

Footer.displayName = 'Footer';

export default Footer;