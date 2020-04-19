import React from 'react'
import { AppBar, MuiThemeProvider, TextField, Button, StylesProvider, Typography, Grid, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from "react";



const useStyles = makeStyles({
    root: {
        textAlign: 'center'
    },
    header: {
        fontSize: 36,
        fontWeight: 100,
        paddingBottom: 20
    },
    sub_header: {
        fontSize: 20,
        fontWeight: 100,
        paddingBottom: 60,
    },
    error_msg: {
        fontSize: 10,
        paddingBottom: '1vh',
        color: 'red'
    },
    field: {
        width: '100%',
    },
    button: {
        margin: 15,
        float: 'right'
    },
    centerer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
    },
    paper_pressed: {
        height: 600,
        width: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 0 30px 15px #e3e3e3`,
    },
    divider: {
        width: 350,
        padding: 10
    },
    buttonMain: {
        background: "#000000",
        color: '#FFF',
        '&:hover': {
            background: "#FFF",
            borderColor: '#000000',
            color: '#000000',
        },
    },
    buttonText: {
        fontSize: 12,
        textTransform: 'none',
        fontWeight: 700,
        padding: 4
    },
    buttonTextDis: {
        fontSize: 16,
        textTransform: 'none',
        fontWeight: 500,
        padding: 8,
        color: 'black'
    },
    widther: {
        width: '100%'
    },
    padder: {
        paddingTop: 40,
        display: 'flex',
    },
    right_bar: {
        marginLeft: 'auto',
        marginRight: 0,
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
        <div>
            <Container>
                <Grid container>
                    <Grid className={classes.centerer} item xs={6}>
                        <div className={classes.widther}>
                            <Typography className={classes.header}>
                                Welcome, Create your profile!
                            </Typography>
                            <Typography className={classes.sub_header}>
                                Enter your email and password
                            </Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={2}>

                                    <TextField
                                        variant="outlined"
                                        select
                                        className={classes.field}
                                        placeholder={props.placeholder}
                                        onChange={(e) => {
                                            props.setData(e.target.value);
                                        }}
                                        value={props.Data}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={10}>

                                    <TextField
                                        variant="outlined"
                                        className={classes.field}
                                        placeholder={props.placeholder}
                                        onChange={(e) => {
                                            props.setData(e.target.value);
                                        }}
                                        value={props.Data}
                                    >
                                    </TextField>
                                </Grid>
                            </Grid>
                            <Grid container spacing={4}>
                                <Grid item xs={6}>

                                    <TextField
                                        variant="outlined"
                                        className={classes.field}
                                        placeholder={props.placeholder}
                                        onChange={(e) => {
                                            props.setData(e.target.value);
                                        }}
                                        value={props.Data}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={6}>

                                    <TextField
                                        variant="outlined"
                                        className={classes.field}
                                        placeholder={props.placeholder}
                                        onChange={(e) => {
                                            props.setData(e.target.value);
                                        }}
                                        value={props.Data}
                                    >
                                    </TextField>
                                </Grid>
                            </Grid>


                            {
                                ValError ?
                                    <Typography className={classes.error_msg}>
                                        {ValidationError}
                                    </Typography>
                                    :
                                    null
                            }
                            <div className={classes.padder}>
                                <div className={classes.right_bar}>
                                    <Button className={classes.buttonMain} variant="contained" color="primary" onClick={() => {

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
                                    }><Typography className={classes.buttonText}>Next Step</Typography></Button>
                                </div>
                            </div>


                            {/* <Paper elevation={3} className={classes.paper_pressed}>
                                <div className={classes.divider}>
                                    <TextField
                                        className={classes.field}
                                        placeholder={props.placeholder}
                                        onChange={(e) => {
                                            props.setData(e.target.value);
                                        }}
                                        value={props.Data}
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
                
                                    <Button className={classes.buttonMain} variant="contained" color="primary" onClick={() => {

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
                                    }><Typography className={classes.buttonText}>Next Step</Typography></Button>
                                    <br/>
                                    <Button disabled><Typography className={classes.buttonTextDis}>Back</Typography></Button>
                                    <Button disabled>Disabled</Button>
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

                            </Paper> */}
                        </div>

                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={4}>

                    </Grid>

                </Grid>
            </Container>
            {/* <Typography className={classes.header}>
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
            </Grid> */}

        </div>
    )
}
