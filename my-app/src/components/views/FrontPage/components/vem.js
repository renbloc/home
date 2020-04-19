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
        paddingTop: '10vh',
        fontSize: 35,
        fontWeight: 500,
    },
    bread_text: {
        fontSize: 20,
        fontWeight: 100,
    },
    sub_header: {
        fontSize: 26,
        fontWeight: 700,
        paddingBottom: 20
    },
    sub_bread: {
        fontSize: 17,
        fontWeight: 500,
        paddingBottom: 30
    },
    size_container: {
        paddingBottom: 100,
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
    centerer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    v_center: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
}));

export default function Vem() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container spacing={0} className={classes.size_container}>
                <Grid item xs={4} className={classes.centerer}>
                    <img src={logo} className={classes.image_size}></img>
                </Grid>
                <Grid item xs={4} className={classes.centerer}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.sub_header}>
                            Slipp slösa din tid på att leta <br/> efter de bäst villkoren!
                        </Typography>
                        <Typography className={classes.sub_bread}>
                            Slipp slösa din tid på att leta <br/> efter de bäst villkoren!
                        </Typography>
                        <VemContent
                            header='Sjuksköterskor och specialistsjuksköterskor'
                        />
                        <VemContent
                            header='Läkare och specialistläkare'
                        />
                        <VemContent
                            header='Studenter inom vårdyrken'
                        />
                        {/* <Typography className={classes.sub_bread}>
                            <CheckedIcon />
                            Läkare och specialistläkare
                        </Typography>
                        <Typography className={classes.sub_bread}>
                            <CheckedIcon />
                            Studenter inom vårdyrken
                        </Typography> */}
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>



    )
}
