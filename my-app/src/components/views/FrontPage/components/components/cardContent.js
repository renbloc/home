import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../../../files/bower-logo.png'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 30
    },
    sub_header: {
        fontSize: 20,
        fontWeight: 700,
    },
    sub_bread: {
        fontSize: 16,
        fontWeight: 100,
    },
    grid_header: {
        fontSize: 24,
    },
    grid_bread: {
        fontSize: 13,
    },
    grid_border: {
        borderRightWidth: 5, borderColor: 'red', borderStyle: 'solid'
    },
    image_size: {
        height: 50,
    },
    grid_margin: {
        paddingBottom: 30
    },
    paddinger: {
        padding: 30,
    }
}))

export default function CardContent({ ...props }) {
    const classes = useStyles();
    return (
        <Grid container className={classes.paddinger}>
            <Grid item xs={3}>
                <div className={classes.centerer}>
                    <img src={logo} className={classes.image_size}></img>
                </div>
            </Grid>
            <Grid item xs={8}>
                <Typography className={classes.sub_header}>
                    {props.header}
                </Typography>
                <Typography className={classes.sub_bread}>
                    {props.bread}
                </Typography>
            </Grid>
            <Grid item xs={1}>
            </Grid>
        </Grid>
    )
}
