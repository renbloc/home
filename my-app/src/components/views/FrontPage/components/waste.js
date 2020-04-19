import React, { useState } from 'react';
import { Grid, Paper, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckedIcon from '@material-ui/icons/Check';


import PaperContent from './components/paperContent';
import ImageContent from './components/imageComponent';

import logo from '../../../files/test.png';
import portrait from '../../../files/portrait.jpeg';
import waves from '../../../files/waves.png';

import ImageComponent from './components/imageComponent';

const useStyles = makeStyles((theme) => ({
    header_text: {
        paddingTop: '10vh',
        fontSize: 35,
        fontWeight: 500,
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
        fontSize: 25,
        fontWeight: 500,
    },
    sub_bread: {
        fontSize: 17,
        fontWeight: 100,
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
    }
}));

export default function Waste() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography className={classes.header_text}>
                Slipp slösa din tid på att <br /> leta efter de bästa villkoren
            </Typography>
            <Grid container spacing={6} className={classes.size_container}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div className={classes.centerer}>
                            <img src={logo} className={classes.image_size}></img>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.sub_header}>
                            Ansök en gång
                        </Typography>
                        <Typography className={classes.sub_bread}>
                            Med en enda enkel ansökan matchas du med branschens högst rankade bolag.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={6} className={classes.size_container}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div className={classes.centerer}>
                            <img src={logo} className={classes.image_size}></img>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.sub_header}>
                            Ansök en gång
                        </Typography>
                        <Typography className={classes.sub_bread}>
                            Med en enda enkel ansökan matchas du med branschens högst rankade bolag.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={6} className={classes.size_container}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div className={classes.centerer}>
                            <img src={logo} className={classes.image_size}></img>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.sub_header}>
                            Ansök en gång
                        </Typography>
                        <Typography className={classes.sub_bread}>
                            Med en enda enkel ansökan matchas du med branschens högst rankade bolag.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={6} className={classes.size_container}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div className={classes.centerer}>
                            <img src={logo} className={classes.image_size}></img>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.sub_header}>
                            Ansök en gång
                        </Typography>
                        <Typography className={classes.sub_bread}>
                            Med en enda enkel ansökan matchas du med branschens högst rankade bolag.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>



    )
}
