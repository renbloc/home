import React, { useState } from 'react';
import { Grid, Paper, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckedIcon from '@material-ui/icons/Check';

import logo from '../../../files/test.png';
import portrait from '../../../files/portrait.jpeg';
import waves from '../../../files/waves.png';


const useStyles = makeStyles((theme) => ({
    header_text: {
        paddingTop: '10vh',
        fontSize: 35,
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    bread_text: {
        fontSize: 20,
        fontWeight: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sub_big_header: {
        fontSize: 36,
        fontWeight: 500,
        color: 'purple'
    },
    sub_header: {
        fontSize: 25,
        fontWeight: 500,
    },
    sub_bread: {
        fontSize: 17,
        fontWeight: 100,
    },
    size_container: {
        paddingTop: 160,
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
        height: '10vh',

    },
    portrait_size: {
        height: '80vh'
    },
    image: {
        height: '80vh'
    },
    centerer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cont_divider: {
        paddingBottom: 320,
        paddingTop: 160
    }
}));

export default function Waste() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.cont_divider}>
                <Typography className={classes.header_text}>
                    Hur fungerar tjänsten?
            </Typography>
                <Typography className={classes.bread_text}>
                    Skicka in en ansökan – hitta ditt nästa drömuppdrag. Dessutom har vi samlat <br /> svaren på de flesta frågor som kan uppstå inför ditt kommande uppdrag.
            </Typography>
                <Grid container spacing={6} className={classes.size_container}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <div className={classes.centerer}>
                                <img src={logo} className={classes.image_size}></img>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.sub_big_header}>
                                01
                        </Typography>
                            <Typography className={classes.sub_header}>
                                Pick your test
                        </Typography>
                            <Typography className={classes.sub_bread}>
                                Med en enda enkel ansökan matchas du med branschens högst rankade bolag.
                        </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={6} className={classes.size_container}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.sub_big_header}>
                                02
                        </Typography>
                            <Typography className={classes.sub_header}>
                                Do your test
                        </Typography>
                            <Typography className={classes.sub_bread}>
                                Med en enda enkel ansökan matchas du med branschens högst rankade bolag.
                        </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>

                        <Paper className={classes.paper}>
                            <div className={classes.centerer}>
                                <img src={logo} className={classes.image_size}></img>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={6} className={classes.size_container}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <div className={classes.centerer}>
                                <img src={logo} className={classes.image_size}></img>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.sub_big_header}>
                                03
                        </Typography>
                            <Typography className={classes.sub_header}>
                                Get your results
                        </Typography>
                            <Typography className={classes.sub_bread}>
                                Med en enda enkel ansökan matchas du med branschens högst rankade bolag.
                        </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={6} className={classes.size_container}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.sub_big_header}>
                                04
                        </Typography>
                            <Typography className={classes.sub_header}>
                                Track your progress
                        </Typography>
                            <Typography className={classes.sub_bread}>
                                Med en enda enkel ansökan matchas du med branschens högst rankade bolag.
                        </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>

                        <Paper className={classes.paper}>
                            <div className={classes.centerer}>
                                <img src={logo} className={classes.image_size}></img>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>



    )
}
