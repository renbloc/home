import React, { useState } from 'react';
import { Grid, Paper, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../../files/test.png';


const useStyles = makeStyles((theme) => ({
    header_text: {
        paddingTop: '10vh',
        fontSize: 35,
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        align: 'center',
    },
    bread_text: {
        fontSize: 20,
        fontWeight: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        align: 'center',
    },
    sub_header: {
        fontSize: 25,
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    sub_bread: {
        fontSize: 20,
        fontWeight: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        align: 'center',
        padding: 20
    },
    size_container: {
        paddingTop: '10vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    portrait_container: {
        position: 'relative'
    },
    content_style: {
        paddingTop: '25vh'
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        boxShadow: 'none'
    },
    port_paper: {
        width: 350,
        height: 450,
        position: 'absolute',
        left: '60%',
        top: '10vh'
    },
    image_size: {
        height: '10vh',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    portrait_size: {
        height: '80vh'
    },
    image: {
        height: '80vh'
    },
}));

export default function Info() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography className={classes.header_text}>
                Hur fungerar tjänsten?
            </Typography>
            <Typography className={classes.sub_bread}>
                Skicka in en ansökan – hitta ditt nästa drömuppdrag. Dessutom har vi samlat <br /> svaren på de flesta frågor som kan uppstå inför ditt kommande uppdrag.
            </Typography>
            <Grid container spacing={6} className={classes.size_container}>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <img src={logo} className={classes.image_size}></img>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <img src={logo} className={classes.image_size}></img>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <img src={logo} className={classes.image_size}></img>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={6}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3}>
                        <Typography className={classes.sub_header}>
                            Vem kan använda Thriva?
                        </Typography>
                        <Typography className={classes.sub_bread}>
                            Jo, det ska jag ta och berätta... Lärare kan använda tjänsten, brandmän, läkare, taxichaufförer och många fler kan använda tjänsten! 
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>
        </React.Fragment>



    )
}
