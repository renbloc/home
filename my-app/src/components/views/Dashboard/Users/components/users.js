import React, { useState, useEffect } from 'react';
import { Grid, Paper, Container, Typography, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckedIcon from '@material-ui/icons/Check';
import PAPER_USER from './components/paper_user';
import { useDispatch, useSelector } from 'react-redux';

import { testAction } from '../../../../../actions/testAction'

import Bower from '../../../../files/bower-logo.png'


const useStyles = makeStyles((theme) => ({
    header_text: {
        paddingTop: '3vh',
        paddingBottom: '1vh',
        fontSize: 24,
        fontWeight: 500,
        textAlign: 'left'
    },
    bread_text: {
        fontSize: 20,
        fontWeight: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 80
    },
    sub_header: {
        fontSize: 20,
        fontWeight: 500,
    },
    sub_bread: {
        fontSize: 17,
        fontWeight: 100,
        paddingBottom: 80
    },
    portrait_container: {
        position: 'relative'
    },
    content_style: {
        paddingTop: '25vh'
    },
    port_paper: {
        width: 350,
        height: 450,
        position: 'absolute',
        left: '60%',
        top: '10vh'
    },
    image_size: {
        height: '6vh',
        width: '6vh'
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
        justifyContent: 'center',
    },
    cont_divider: {
        paddingBottom: 160
    },
    paper: {
        color: theme.palette.text.secondary,
        height: 100,
        width: '100%',
        boxShadow: `5px 5px 10px #e3e3e3`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    paper2: {
        color: theme.palette.text.secondary,
        height: 400,
        width: '100%',
        boxShadow: `5px 5px 10px #e3e3e3`,

    },
}));


export default function Test() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector(state => state.form)
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        dispatch(testAction()).then(() => {
            setLoaded(true)
        })
    }, []);


    return (
        <React.Fragment>
            <Container className={classes.cont_divider}>
                <Typography className={classes.header_text}>
                    Welcome back you twat!
                </Typography>

                {
                    Loaded ?
                        state.users.map((user, index) => {
                            return (
                                <div key={index}>
                                    <PAPER_USER 
                                        name={user.username}
                                        role={user.role}
                                    />
                                </div>
                            )
                        })
                        :
                        null

                }

                {/* <PAPER_USER/>
                <PAPER_USER/>
                <PAPER_USER/>
                <PAPER_USER/> */}

            </Container>
        </React.Fragment>



    )
}
