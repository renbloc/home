import React from 'react'
import { AppBar, MuiThemeProvider, TextField, Button, StylesProvider, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from "react";



const useStyles = makeStyles({
    root: {
        textAlign: 'center'
    },
    header: {
        fontSize: 25,
        paddingBottom: '4vh'
    },
    error_msg: {
        fontSize: 10,
        paddingBottom: '1vh',
        color: 'red'
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

    const [ValidationError, setValidationError] = useState('');
    const [ValError, setValError] = useState(false);


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
                onChange={(e) => {
                    props.setData(e.target.value);
                }}
                value={props.Data}
                variant="outlined"
            >
            </TextField>

                             {
                    ValError ?
                        <Typography className={classes.error_msg}>
                            {ValidationError}
                        </Typography>
                        :
                        null
                } 
            <Grid container direction={'row'}>
                <Grid item xs={6} align='left'>
                </Grid>
                <Grid item xs={6} align='right'>
                    <Button variant="contained" color="primary" onClick={() => {

                        if (props.Data.match(/^[a-zA-Z]+$/)) {
                            setValError(false)
                            setValidationError('');
                            cont()
                        } else if (props.Data.length == 0) {
                            setValError(true)
                            setValidationError('Please enter your name before proceeding');
                        } else {
                            setValError(true)
                            setValidationError('Please only enter letters');
                        }
                    }
                    }>Continue</Button>
                </Grid>
            </Grid>

        </div>
    )
}
