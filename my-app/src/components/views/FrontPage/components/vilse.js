import React, { useState } from 'react';
import { Grid, Paper, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PaperContent from './components/paperContent';
import ImageContent from './components/imageComponent';

import logo from '../../../files/bower-logo.png';

import CardContent from './components/cardContent';

const useStyles = makeStyles((theme) => ({
    header_text: {
        paddingTop: '10vh',
        paddingBottom: 10,
        fontSize: 36,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bread_text: {
        fontSize: 20,
        fontWeight: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sub_header: {
        fontSize: 24,
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sub_bread: {
        fontSize: 16,
        fontWeight: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    size_container: {
        paddingTop: 40,
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
    circButton: {
        borderRadius: 25,
        background: "#f00",
        color: '#FFF',
        '&:hover': {
            background: "#FFF",
            borderColor: '#f00',
            color: '#f00',
        }
    },
    paper: {
        padding: theme.spacing(2),
        boxShadow: 'none',
    },
    paper_gray: {
        boxShadow: 'none',
        background: '#f9fafb',
        borderRadius: 10
    },
    port_paper: {
        width: 350,
        height: 450,
        position: 'absolute',
        left: '60%',
        top: '10vh'
    },
    image_size: {
        height: 90,

    },
    portrait_size: {
        height: '80vh'
    },
    image: {
        height: '80vh'
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 600,
        textTransform: 'none',
        padding: 4
    },
    centerer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40
    },
    space: {
        paddingBottom: 100
    }
}));

export default function Vilse() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.space}>
                <Typography className={classes.header_text}>
                    Vilse i bemanningsdjungeln?
            </Typography>
                <Typography className={classes.bread_text}>
                    Vi står på din sida. Oavsett var och hur mycket du vill jobba så ser Thriva till att <br /> du alltid får de bästa villkoren och den bästa ersättningen. I samma, fina tjänst.
            </Typography>
                <Grid container spacing={3} className={classes.size_container}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper_gray} elevation={0}>
                            <CardContent
                                header="Skapa en gratis profil"
                                bread="Fyll i dina uppgifter och dina önskemål om ditt kommande uppdrag"
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper_gray} elevation={0}>
                            <CardContent
                                header="Matchning"
                                bread="Fyll i dina uppgifter och dina önskemål om ditt kommande uppdrag"
                            />
                        </Paper>
                        {/* <Paper className={classes.paper}>
                        <div className={classes.centerer}>
                            <img src={logo} className={classes.image_size}></img>
                        </div>
                        <Typography className={classes.sub_header}>
                            Analyze results
                        </Typography>
                        <Typography className={classes.sub_bread}>
                            Skapa en gratis profil
                        </Typography>
                    </Paper> */}
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper_gray} elevation={0}>
                            <CardContent
                                header="Jobbet är ditt"
                                bread="Fyll i dina uppgifter och dina önskemål om ditt kommande uppdrag"
                            />
                        </Paper>
                    </Grid>
                </Grid>

                <div className={classes.centerer}>
                    <Button className={classes.circButton} variant="outlined" color="secondary"><Typography className={classes.buttonText}>Läs Mer</Typography></Button>
                </div>
            </Container>

        </React.Fragment>



    )
}
