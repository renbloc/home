import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckedIcon from '@material-ui/icons/Check';

import logo from '../../../../files/bower-logo.png'

const useStyles = makeStyles((theme) => ({
    sub_header: {
        fontSize: 20,
        fontWeight: 700,
    },
    sub_bread: {
        fontSize: 16,
        fontWeight: 100,
    },
    grid_header: {
        fontSize: 16,
        fontWeight: 100,
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
        padding: 5,
    }
}))

export default function VemContent({ ...props }) {
    const classes = useStyles();
    return (
        <Grid container className={classes.paddinger}>
            <Grid item xs={2}>
                <div className={classes.centerer}>
                    <CheckedIcon />
                </div>
            </Grid>
            <Grid item xs={10}>
                <Typography className={classes.grid_header}>
                    {props.header}
                </Typography>
            </Grid>
        </Grid>
    )
}
