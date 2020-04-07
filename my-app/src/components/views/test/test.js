import React, { useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    fixedHeight: {
        height: 240,
    },
}));

const Test = props => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <Paper className={classes.fixedHeight}>
                    <h1>Hello world</h1>
                </Paper>
            </Grid>
        </Grid>
    );
};


export default Test;
