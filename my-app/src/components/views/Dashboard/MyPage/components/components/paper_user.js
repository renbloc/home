import React, { useState } from 'react';
import { Grid, Paper, Container, Typography, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckedIcon from '@material-ui/icons/Check';

import Bower from '../../../../../files/bower-logo.png'


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
        textAlign: 'left'
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
        height: 250,
        width: '100%',
        boxShadow: `5px 5px 10px #e3e3e3`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paddinger: {
        paddingBottom: 20
    },
    full_width: {
        width: '100%',
    }
}));

export default function Test() {
    const classes = useStyles();
    const [Extended, setExtended] = useState(false);

    return (
        <React.Fragment>
            <div onClick={() => setExtended(!Extended)} className={classes.paddinger}>
                {
                    Extended ?
                        <Paper className={classes.paper2}>
                            <div className={classes.full_width}>
                                <Grid container spacing={0}>
                                    <Grid item xs={2} className={classes.centerer}>
                                        <Avatar alt="Remy Sharp" src={Bower} className={classes.image_size} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography className={classes.sub_header}>
                                            Name: Oscar Stein
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1} className={classes.centerer}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography className={classes.sub_header}>
                                            Education: Harvard
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1} className={classes.centerer}>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={0}>
                                    <Grid item xs={2} className={classes.centerer}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography className={classes.sub_header}>
                                            Experience: None
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1} className={classes.centerer}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography className={classes.sub_header}>
                                            Bio: They may take away our lives, but they'll never take our freedom!
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1} className={classes.centerer}>
                                    </Grid>
                                </Grid>
                            </div>

                        </Paper>
                        :
                        <Paper className={classes.paper}>
                            <Grid container spacing={0}>
                                <Grid item xs={2} className={classes.centerer}>
                                    <Avatar alt="Remy Sharp" src={Bower} className={classes.image_size} />
                                </Grid>
                                <Grid item xs={3} className={classes.centerer}>
                                    <div className={classes.full_width}>
                                    <Typography className={classes.sub_header}>
                                        Name: Christoffer Lindbom
                                    </Typography>
                                    </div>

                                </Grid>
                                <Grid item xs={1} className={classes.full_width}>
                                </Grid>
                                <Grid item xs={3} className={classes.centerer}>
                                    <div className={classes.full_width}>
                                    <Typography className={classes.sub_header}>
                                        Education: Lund
                                    </Typography>
                                    </div>

                                </Grid>
                                <Grid item xs={1} className={classes.full_width}>
                                </Grid>
                            </Grid>
                        </Paper>
                }
            </div>
        </React.Fragment>



    )
}
