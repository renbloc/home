import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Twitter from '../../files/twitter.png';
import Amazon from '../../files/amazon.png';
import Insta from '../../files/insta.png';
import Bower from '../../files/bower-logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header_text: {
        paddingTop: '10vh',
        fontSize: 35,
        fontWeight: 500,
        color: 'white'
    },
    bread_text: {
        fontSize: 20,
        fontWeight: 100,
        color: 'white'
    },
    sub_header: {
        fontSize: 26,
        fontWeight: 700,
        paddingBottom: 20,
        color: 'white'
    },
    sub_bread: {
        fontSize: 15,
        fontWeight: 500,
        paddingBottom: 20,
        color: 'white'
    },
    sub_bread2: {
        fontSize: 15,
        fontWeight: 500,
        paddingBottom: 10,
        color: 'white'
    },
    sub_header1: {
        fontSize: 18,
        fontWeight: 700,
        paddingBottom: 10,
        paddingTop: 60,
        color: 'white'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    footer: {
        height: 340,
        backgroundColor: '#e4bdaf'
    },
    image: {
        height: 60,
    },
    sub_image: {
        height: 40,
        paddingRight: 20,
        paddingTop: 10
    },
    appbar: {
        background: 'transparent',
        boxShadow: 'none'
    },
    centerer: {
        justifyContent: 'space-evenly'
    },
    buttonMain: {
        borderRadius: 25,
        background: "#FFF",
        color: '#FFF',
        '&:hover': {
            background: "#f00",
            borderColor: '#f00',
            color: '#f00',
        },
    },
    buttonSecond: {
        color: '#FFF',
        '&:hover': {
            background: "#FFF",
        },
    },
    buttonText: {
        fontSize: 13,
        textTransform: 'none',
        fontWeight: 700,
        padding: 8,
        color: 'black'
    },
    image_bar: {
        height: 50
    }
}));

export default function Landing({ ...props }) {
    const classes = useStyles();
    const state = useSelector(state => state.auth)

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Container>
                    <Toolbar className={classes.centerer}>
                        <img className={classes.image_bar} src={Bower} />
                        <Button component={Link} to='how' className={classes.buttonSecond}><Typography className={classes.buttonText}>How it works</Typography></Button>
                        <Button component={Link} to='about' className={classes.buttonSecond}><Typography className={classes.buttonText}>About</Typography></Button>
                        {
                            state.isAuthenticated ?
                                <Button component={Link} to='dashboard_users' className={classes.buttonSecond}><Typography className={classes.buttonText}>Dashboard</Typography></Button>
                                :
                                null
                        }

                        <Button component={Link} to='companies' className={classes.buttonSecond}><Typography className={classes.buttonText}>Companies</Typography></Button>
                        <Button component={Link} to='faq' className={classes.buttonSecond}><Typography className={classes.buttonText}>FAQ</Typography></Button>
                        <Button component={Link} to='improve' className={classes.buttonSecond}><Typography className={classes.buttonText}>Improve</Typography></Button>
                        {
                            state.isAuthenticated ?
                                <Button component={Link} to='signin' variant="outlined" className={classes.buttonMain}><Typography className={classes.buttonText}>Log out</Typography></Button>
                                :
                                <Button component={Link} to='signin' variant="outlined" className={classes.buttonMain}><Typography className={classes.buttonText}>Log in</Typography></Button>
                        }

                    </Toolbar>
                </Container>
            </AppBar>
            {props.children}
            <div className={classes.footer}>
                <Container>
                    <Grid container spacing={10}>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={Amazon} className={classes.image} />
                            <Typography className={classes.sub_bread}>Charting the future of behavioral healthcare</Typography>
                            <Typography className={classes.sub_bread2}>Copyright © Voi, inc. 2017-2018</Typography>
                            <Typography className={classes.sub_bread2}>4 Currier Place, Suite 302 <br /> Hanover, NH 03755</Typography>
                            <img src={Twitter} className={classes.sub_image} />
                            <img src={Insta} className={classes.sub_image} />
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography className={classes.sub_header1}>Solution for</Typography>
                            <Typography className={classes.sub_bread}>Service Members <br /> Patients <br /> Students <br /> Veterans</Typography>
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography className={classes.sub_header1}>Information</Typography>
                            <Typography className={classes.sub_bread}>About Voi <br /> Leadership <br /> North</Typography>
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}