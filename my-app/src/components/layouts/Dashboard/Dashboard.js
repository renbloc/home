import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Avatar } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import {testAction} from '../../../actions/testAction'

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
        backgroundColor: '#495867'
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
        boxShadow: 'none',
        borderBottomWidth: 1,
        borderColor: '#EAEAEA',
        borderBottomStyle: 'solid',
    },
    appbar2: {
        background: 'transparent',
        boxShadow: 'none',
        borderBottomWidth: 1,
        borderColor: '#EAEAEA',
        borderBottomStyle: 'solid',
        boxShadow: `0 10px 10px -5px #e3e3e3`,
    },
    centerer: {
        justifyContent: 'space-evenly',
        paddingTop: 5,
        paddingBottom: 5,
        width: '60vw'
    },
    buttonMain: {
        color: '#878787',
        '&:hover': {
            background: "#FFF",
        },
    },
    buttonSecond: {
        '&:hover': {
            background: "#FFF",
        },
    },
    buttonText: {
        fontSize: 13,
        textTransform: 'none',
        fontWeight: 700,
        padding: 8,
        color: '#878787',
    },
    text_bar: {
        fontSize: 13,
        textTransform: 'none',
        fontWeight: 700,
        color: '#878787',
    },
    image_bar: {
        height: 50
    },
    left_bar: {
        marginRight: 'auto',
        marginLeft: 0
    },
    right_bar: {
        marginLeft: 'auto',
        marginRight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appbar_padder: {
        paddingTop: 5,
        paddingBottom: 5
    },
    container_centerer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

export default function Dashboard({ ...props }) {
    const dispatch = useDispatch();
    const state = useSelector(state => state.form)
    const classes = useStyles();

    const fetchData = () => {
        dispatch(testAction())
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                    <Toolbar className={classes.appbar_padder}>
                        <div className={classes.left_bar}>
                            <Typography className={classes.text_bar}>For Service Members</Typography>
                        </div>

                        <div className={classes.right_bar}>
                            <Avatar alt="Remy Sharp" src={Bower} className={classes.small} />
                            <Typography className={classes.text_bar}>For Service Members</Typography>
                        </div>
                    </Toolbar>
            </AppBar>
            <AppBar position="static" className={classes.appbar2}>
                <Container className={classes.container_centerer}>
                    <Toolbar className={classes.centerer}>
                        <Button onClick={() => fetchData()} className={classes.buttonMain} startIcon={<MenuIcon></MenuIcon>}><Typography className={classes.buttonText}>Overview</Typography></Button>
                        <Button component={Link} to='dashboard_users' className={classes.buttonMain} startIcon={<MenuIcon></MenuIcon>}><Typography className={classes.buttonText}>Users</Typography></Button>
                        <Button component={Link} to='dashboard_mypage' className={classes.buttonMain} startIcon={<MenuIcon></MenuIcon>}><Typography className={classes.buttonText}>My Page</Typography></Button>
                        <Button className={classes.buttonMain} startIcon={<MenuIcon></MenuIcon>}><Typography className={classes.buttonText}>Progress</Typography></Button>
                        <Button className={classes.buttonMain} startIcon={<MenuIcon></MenuIcon>}><Typography className={classes.buttonText}>Assets</Typography></Button>
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