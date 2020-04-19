import React, { useState } from 'react';
import { Grid, Paper, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckedIcon from '@material-ui/icons/Check';


import PaperContent from './components/paperContent';
import ImageContent from './components/imageComponent';

import logo from '../../../files/allie.jpg';
import portrait from '../../../files/portrait.jpeg';
import waves from '../../../files/waves.png';

import VemContent from './components/vemContent';

const useStyles = makeStyles((theme) => ({
    header_text: {
        fontSize: 36,
        fontWeight: 700,
    },
    bread_text: {
        fontSize: 20,
        fontWeight: 100,
    },
    sub_header: {
        fontSize: 20,
        fontWeight: 500,
        paddingBottom: 20
    },
    sub_bread: {
        fontSize: 17,
        fontWeight: 100,
    },
    size_container: {
        paddingTop: '10vh',
    },
    portrait_container: {
        position: 'relative'
    },
    content_style: {
        paddingTop: '25vh'
    },
    paper: {
        padding: theme.spacing(2),
        boxShadow: 'none',
    },
    port_paper: {
        width: 350,
        height: 450,
        position: 'absolute',
        left: '60%',
        top: '10vh'
    },
    image_size: {
        height: 600,
        borderRadius: 10,
        boxShadow: `5px 5px 20px #9E9E9E`,
    },
    portrait_size: {
        height: '80vh'
    },
    image: {
        height: '80vh'
    },
    space: {
        paddingBottom: 120
    }
}));

export default function Fragor() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.space}>
                <Grid container spacing={10} className={classes.size_container}>
                    <Grid item xs={4}>
                        <Typography className={classes.header_text}>Få svar på <br /> dina frågor!</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography className={classes.sub_header}>Can I clone myself?</Typography>
                        <Typography className={classes.sub_bread}>One day, after a troubling visit from the giant Catherine Clifford, Chloe leaves her house and sets out in search of three cosy sausages.</Typography>
                        <br/>
                        <br/>
                        <br/>
                        <Typography className={classes.sub_header}>Can I clone myself?</Typography>
                        <Typography className={classes.sub_bread}>One day, after a troubling visit from the giant Catherine Clifford, Chloe leaves her house and sets out in search of three cosy sausages.</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography className={classes.sub_header}>Can I clone myself?</Typography>
                        <Typography className={classes.sub_bread}>One day, after a troubling visit from the giant Catherine Clifford, Chloe leaves her house and sets out in search of three cosy sausages.</Typography>
                        <br/>
                        <br/>
                        <br/>
                        <Typography className={classes.sub_header}>Can I clone myself?</Typography>
                        <Typography className={classes.sub_bread}>One day, after a troubling visit from the giant Catherine Clifford, Chloe leaves her house and sets out in search of three cosy sausages.</Typography>
                    </Grid>
                </Grid>
            </Container>

        </React.Fragment>



    )
}
