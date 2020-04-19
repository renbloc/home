import React from 'react'
import { AppBar, MuiThemeProvider, TextField, Button, StylesProvider, List, ListItem, ListItemText, Typography } from '@material-ui/core';
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


export default function ConfirmPage({ ...props }) {
    const classes = useStyles(props);


    function cont() {
        props.nextStep();
    }


    function back() {
        props.prevStep();
    }


    return (
        <div>
            <Typography>
                {props.header}
            </Typography>
            <List>
                <ListItem>
                    <ListItemText
                        primary="First Name"
                        secondary={props.FirstName}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Last Name"
                        secondary={props.LastName}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Phone Number"
                        secondary={props.PhoneNumber}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Email"
                        secondary={props.Email}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Education"
                        secondary={props.Education}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Speciality"
                        secondary={props.Speciality}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Region1"
                        secondary={props.Region1}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Region2"
                        secondary={props.Region2}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Region3"
                        secondary={props.Region3}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Employer"
                        secondary={props.Employer}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Role"
                        secondary={props.Role}
                    />
                </ListItem>

            </List>
        </div>
    )
}
