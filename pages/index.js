import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import BUtton from '@material-ui/core/Button';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <MuiLink color="inherit" href="https://material-ui.com/">
                Neuroplasticity
            </MuiLink>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Index() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Cool Breeze App
                </Typography>
                <Button variant="contained">Default</Button>
                <Copyright/>
            </Box>
        </Container>
    );
}
