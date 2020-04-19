import React, { useState } from 'react';
import { Grid, Paper, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckedIcon from '@material-ui/icons/Check';


const useStyles = makeStyles((theme) => ({
    header_text: {
        paddingTop: '40vh',
        fontSize: 35,
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bread_text: {
        fontSize: 20,
        fontWeight: 100,
        paddingBottom: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sub_header: {
        fontSize: 20,
        fontWeight: 500,
        padding: 20
    },
    sub_bread: {
        fontSize: 17,
        fontWeight: 100,
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
    }
}));

export default function Title() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography className={classes.header_text}>
                Bolag
            </Typography>
            <Typography className={classes.bread_text}>
                Text 'här'
            </Typography>
        </React.Fragment>



    )
}
