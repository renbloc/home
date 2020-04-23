import React, { useState } from 'react';
import { Grid, Paper, Container, Typography, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import portrait4 from '../../../files/taylor.jpg';


const useStyles = makeStyles((theme) => ({
    header_text: {
        paddingTop: '10vh',
        fontSize: 36,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bread_text: {
        fontSize: 20,
        fontWeight: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40
    },
    sub_header: {
        paddingTop: 160,
        fontSize: 36,
        fontWeight: 700,
    },
    sub_bread: {
        paddingTop: 20,
        fontSize: 17,
        fontWeight: 700,
        textAlign: 'center'
    },
    sub_sub_bread: {
        paddingTop: 20,
        fontSize: 17,
        fontWeight: 100,
        paddingBottom: 80,
        textAlign: 'center'
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
        justifyContent: 'center',
        paddingTop: 60
    },
    cont_divider: {
        paddingBottom: 160
    },
    avatar_size: {
        height: 200,
        width: 200
    },
    avatar_padder: {
        paddingRight: 80
    }
}));

export default function About() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.cont_divider}>
                <Typography className={classes.header_text}>
                    Vårt team.
                </Typography>
                <Typography className={classes.bread_text}>
                    Vi är faktiskt alldeles fantastiska. Och det behövs, så att vi ska kunna <br /> ge dig den absolut bästa, mest fantastiska tjänsten någonsin (nåja).
                </Typography>
                <Typography className={classes.sub_header}>
                    Sugen på att bli en av oss?
                </Typography>
                <div className={classes.centerer}>
                    <div className= {classes.avatar_padder}>
                        <Avatar alt="Remy Sharp" src={portrait4} className={classes.avatar_size}/>
                        <Typography className={classes.sub_bread}>
                            Oscar Stein
                        </Typography>
                        <Typography className={classes.sub_sub_bread}>
                        Full-stack Developer <br/> glumme96@gmail.com
                        </Typography>
                    </div>
                    <div>
                        <Avatar alt="Remy Sharp" src={portrait4} className={classes.avatar_size}/>
                        <Typography className={classes.sub_bread}>
                            Oscar Stein
                        </Typography>
                        <Typography className={classes.sub_sub_bread}>
                        Full-stack Developer <br/> glumme96@gmail.com
                        </Typography>
                    </div>
                </div>
            </Container>
        </React.Fragment>



    )
}
