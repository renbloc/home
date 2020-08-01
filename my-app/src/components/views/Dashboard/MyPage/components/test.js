import React, { useState } from 'react';
import { Grid, Paper, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckedIcon from '@material-ui/icons/Check';


const useStyles = makeStyles((theme) => ({
    header_text: {
        paddingTop: '3vh',
        paddingBottom: '1vh',
        fontSize: 24,
        fontWeight: 500,
        textAlign: 'left'
    },
    bread_text: {
        fontSize: 20,
        fontWeight: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 80
    },
    sub_header: {
        fontSize: 20,
        fontWeight: 500,
        padding: 20
    },
    sub_bread: {
        fontSize: 17,
        fontWeight: 100,
        paddingBottom: 80
    },
    portrait_container: {
        position: 'relative'
    },
    content_style: {
        paddingTop: '25vh'
    },
    paper: {
        padding: theme.spacing(2),
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
        paddingBottom: 160
    },
    paper: {
        color: theme.palette.text.secondary,
        height: 200,
        width: '100%',
        boxShadow: `5px 5px 10px #e3e3e3`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    paper2: {
        color: theme.palette.text.secondary,
        height: 400,
        width: '100%',
        boxShadow: `5px 5px 10px #e3e3e3`,

    },
}));

export default function Test() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.cont_divider}>
                <Typography className={classes.header_text}>
                    Welcome back you twat!
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <div>
                                <Typography className={classes.sub_header}>
                                    $25,000
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <div>
                                <Typography className={classes.sub_header}>
                                    $25,000
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <div>
                                <Typography className={classes.sub_header}>
                                    $25,000
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={8}>
                        <Paper className={classes.paper2}>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper2}>
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </React.Fragment>



    )
}
