import React from 'react'
import { AppBar, MuiThemeProvider, TextField, Button, StylesProvider, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    root: {
        textAlign: 'center',
    },
    header: {
        fontSize: 25,
        paddingBottom: '4vh'
    },
    field: {
        width: '100%',
        paddingBottom: '4vh'
    },
    button: {
        margin: 15,
        float: 'right'
    }
})


export default function FormUserDetails({ ...props }) {
    const classes = useStyles(props);

    


    function cont() {
        props.nextStep();
    }


    return (
        <div className={classes.root}>
            <Typography className={classes.header}>
                {props.header}
            </Typography>
            <TextField
                className={classes.field}
                placeholder={props.placeholder}
                onChange={(e) => props.setData(e.target.value)}
                value={props.Data}
                variant="outlined"
            >

            </TextField>
            <Grid container direction={'row'}>
                <Grid item xs={6} align='left'>
                    <Button onClick={cont}>Back</Button>
                </Grid>
                <Grid item xs={6} align='right'>
                    <Button variant="contained" color="primary" onClick={cont}>Continue</Button>
                </Grid>
            </Grid>
        </div>
    )
}
