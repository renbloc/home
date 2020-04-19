import React, { useState } from 'react';
import { Grid, Paper, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckedIcon from '@material-ui/icons/Check';


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
    }
}));

export default function About() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.cont_divider}>
                <Typography className={classes.header_text}>
                    Vanliga frågor inför ditt konsultuppdrag
                </Typography>
            </Container>
        </React.Fragment>



    )
}
