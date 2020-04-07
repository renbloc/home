import React from 'react'
import { AppBar, MuiThemeProvider, TextField, Button, StylesProvider, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    root: {
        textAlign: 'center'
    },
    header: {
        fontSize: 25,
        paddingBottom: '4vh'
    },
    field: {
        width: '100%',
        paddingBottom: '4vh'
    },
    input_field: {
        width: '100%',
        paddingBottom: '2vh'
    },
    button: {
        margin: 15,
        float: 'right'
    }
})


export default function FormExp({ ...props }) {
    const classes = useStyles(props);


    function cont() {
        props.nextStep();
    }

    function back() {
        props.prevStep();
    }


    return (
        <div className={classes.root}>
            <Typography className={classes.header}>
                {props.header}
            </Typography>
            <TextField
                className={classes.input_field}
                placeholder="Previous Employer"
                onChange={(e) => props.setData1(e.target.value)}
                value={props.Data1}
                variant="outlined"
            >
            </TextField>
            <TextField
                className={classes.field}
                placeholder="Role"
                onChange={(e) => props.setData2(e.target.value)}
                value={props.Data2}
                variant="outlined"
            >
            </TextField>
            <Grid container direction={'row'}>
                <Grid item xs={6} align='left'>
                    <Button variant="contained" color="primary" onClick={back}>Back</Button>
                </Grid>
                <Grid item xs={6} align='right'>
                    <Button variant="contained" color="primary" onClick={cont}>Continue</Button>
                </Grid>
            </Grid>
        </div>
    )
}
