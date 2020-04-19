import React, { useState } from 'react';
import { Grid, Paper, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header_text: {
        fontSize: 48,
        fontWeight: 700
    },
    bread_text: {
        fontSize: 20,
        fontWeight: 500,
        paddingTop: 10,
        paddingBottom: 20
    },
    size_container: {
        height: '10vh'
    },
    buttonText: {
        fontSize: 16,
        textTransform: 'none',
        fontWeight: 500,
        padding: 8
    },
    content_style: {
        paddingTop: '25vh'
    },
    buttonMain: {
        borderRadius: 25,
        background: "#f00",
        color: '#FFF',
        '&:hover': {
            background: "#FFF",
            borderColor: '#f00',
            color: '#f00',
        },
    },
}));

export default function Landing() {
    const classes = useStyles();
    return (
        <Container className={classes.size_container}>
            <Grid container className={classes.content_style}>
                <Grid item xs={11}>
                    <Typography className={classes.header_text}>
                        Charting the future of <br /> behavioral healthcare.
                    </Typography>
                    <Typography className={classes.bread_text}>
                        Voi's AI-driven solutions help prevent suicide <br /> and solve behavioral health challenges.
                    </Typography>
                    <Button className={classes.buttonMain} variant="outlined" color="secondary"><Typography className={classes.buttonText}>Learn More</Typography></Button>
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
        </Container>

    )
}
