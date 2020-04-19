import React from 'react'
import { AppBar, MuiThemeProvider, TextField, Button, StylesProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    button: {
        margin: 15
    }
})


export default function SuccessPage({...props}) {
    const classes = useStyles(props);


    function cont() {
        props.nextStep();
    } 


    return (
        <div>
            <TextField 
                placeholder="First Name" 
                onChange={(e) => props.setFirstName(e.target.value)} 
                defaultValue={props.FirstName}>  
            </TextField>
            <br/>
            <TextField 
                placeholder="Last Name" 
                onChange={(e) => props.setLastName(e.target.value)} 
                defaultValue={props.LastName}>  
            </TextField>
            <br/>
            <Button variant="contained" color="primary" onClick={cont}>Continue</Button>
        </div>
    )
}
