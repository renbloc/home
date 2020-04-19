import React, { useState } from 'react';
import { Grid, Paper, Container, Typography, Button, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

import ListThing from './components/list_item';


const useStyles = makeStyles((theme) => ({
    header_text: {
        paddingTop: '40vh',
        fontSize: 35,
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bread_text: {
        fontSize: 20,
        fontWeight: 100,
        paddingBottom: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sub_header: {
        fontSize: 20,
        fontWeight: 500,
        padding: 20
    },
    sub_bread: {
        fontSize: 17,
        fontWeight: 100,
    },
    portrait_container: {
        position: 'relative'
    },
    content_style: {
        paddingTop: '25vh'
    },
    paper: {
        padding: theme.spacing(2),
    },
    port_paper: {
        width: 350,
        height: 450,
        position: 'absolute',
        left: '60%',
        top: '10vh'
    },
    image_size: {
        height: '10vh',

    },
    portrait_size: {
        height: '80vh'
    },
    image: {
        height: '80vh'
    },
    centerer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cont_divider: {
        paddingBottom: 160
    },
    list_style: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e3e3e3',
    }
}));

export default function Companies() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.cont_divider}>
                <Grid container spacing={0}>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6" className={classes.sub_header}>
                            Utvalda
                    </Typography>
                        <div className={classes.demo}>
                            <List className={classes.list_style} dense={true}>
                                <ListThing />
                                <ListThing />
                                <ListThing />
                            </List>
                        </div>
                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                </Grid>

                <Grid container spacing={0}>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6" className={classes.sub_header}>
                            Alla bemanningsföretag
                    </Typography>
                        <div className={classes.demo}>
                            <List className={classes.list_style} dense={true}>
                                <ListThing />
                                <ListThing />
                                <ListThing />
                            </List>
                        </div>
                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                </Grid>
            </Container>
        </React.Fragment >



    )
}
