import React, { useState } from 'react';
import { Grid, Paper, Container, Typography, Button, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckedIcon from '@material-ui/icons/Check';

import Gif from '../../../../files/gif.gif'


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
        height: 35

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
    listitem_pos: {
        textAlign: 'right'
    },
    item_size: {
        padding: 10
    }
}));

export default function Title() {
    const classes = useStyles();
    return (
        <div className={classes.item_size}>
            <ListItem>
                <ListItemAvatar>
                    {/* <Avatar>
                        <img src={Gif}/>
                    </Avatar> */}
                    <img src={Gif} className={classes.image_size}/>
                </ListItemAvatar>
                <ListItemText
                    primary="Företag Smith"
                    secondary={'Kort pitch'}
                />
                <ListItemText className={classes.listitem_pos}
                    secondary='Kontakta'
                />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>

    )
}
