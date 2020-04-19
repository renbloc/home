import React, { useState } from 'react';
import { Grid, Paper, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PaperContent from './components/paperContent';
import ImageContent from './components/imageComponent';

import logo from '../../../files/test.png';
import portrait2 from '../../../files/ludvig.jpg';
import portrait3 from '../../../files/sarah.jpg';
import portrait4 from '../../../files/taylor.jpg';

const useStyles = makeStyles((theme) => ({
    header_text: {
        paddingTop: '10vh',
        fontSize: 36,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Varela'
    },
    sub_header: {
        paddingTop: 10,
        fontSize: 16,
        fontWeight: 700,
    },
    bread_text: {
        fontSize: 20,
        fontWeight: 100
    },
    size_container: {
        paddingTop: '10vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    portrait_container: {
        position: 'relative'
    },
    content_style: {
        paddingTop: '25vh'
    },
    paper: {
        color: theme.palette.text.secondary,
        height: 180,
        width: 180,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        boxShadow: 'none',
    },
    paper_pressed: {
        color: theme.palette.text.secondary,
        height: 180,
        width: 180,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        boxShadow: `0 0 30px 15px #e3e3e3`,
    },
    port_paper: {
        width: 450,
        height: 500,
        position: 'absolute',
        left: '50%',
        top: '10vh',
        borderRadius: 45,
        boxShadow: `5px 5px 20px #e3e3e3`,
    },
    image_size: {
        height: 80
    },
    portrait_size: {
        height: 800,
        boxShadow: `5px 5px 30px #e3e3e3`,
    },
    centerer: {
        textAlign: 'center'
    },
    cent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default function Info() {
    const classes = useStyles();
    const [Step, setStep] = useState(1);

    return (
        <React.Fragment>
            <Container>
                <Typography className={classes.header_text}>
                    Here to help you care for...
                </Typography>
                <Grid container spacing={0} className={classes.size_container}>
                    <Grid className={classes.cent} item xs={3}>
                        <Paper className={Step == 1 ? classes.paper_pressed : classes.paper} onClick={() => { setStep(1) }}>
                            <div className={classes.centerer}>
                                <img src={logo} className={classes.image_size}></img>
                                <Typography className={classes.sub_header}>Patients</Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid className={classes.cent} item xs={3}>
                        <Paper className={Step == 2 ? classes.paper_pressed : classes.paper} onClick={() => { setStep(2) }}>
                            <div className={classes.centerer}>
                                <img src={logo} className={classes.image_size}></img>
                                <Typography className={classes.sub_header}>Members</Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid className={classes.cent} item xs={3}>
                        <Paper className={Step == 3 ? classes.paper_pressed : classes.paper} onClick={() => { setStep(3) }}>
                            <div className={classes.centerer}>
                                <img src={logo} className={classes.image_size}></img>
                                <Typography className={classes.sub_header}>Students</Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid className={classes.cent} item xs={3}>
                        <Paper className={Step == 4 ? classes.paper_pressed : classes.paper} onClick={() => { setStep(4) }}>
                            <div className={classes.centerer}>
                                <img src={logo} className={classes.image_size}></img>
                                <Typography className={classes.sub_header}>Veterans</Typography>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <div>
                {
                    (Step == 1) ? (
                        <Container>
                            <Grid container spacing={0} className={classes.size_container}>
                                <Grid item xs={9} className={classes.portrait_container}>
                                    <Paper className={classes.port_paper}>
                                        <PaperContent />
                                    </Paper>
                                    <img src={portrait4} className={classes.portrait_size} />
                                </Grid>
                            </Grid>
                        </Container>

                    ) : (Step == 2) ? (
                        <Container>
                            <Grid container spacing={0} className={classes.size_container}>
                                <Grid item xs={9} className={classes.portrait_container}>
                                    <Paper className={classes.port_paper}>
                                        <PaperContent />
                                    </Paper>
                                    <img src={portrait2} className={classes.portrait_size} />
                                </Grid>
                            </Grid>
                        </Container>

                    ) : (Step == 3) ? (
                        <Container>
                            <Grid container spacing={0} className={classes.size_container}>
                                <Grid item xs={9} className={classes.portrait_container}>
                                    <Paper className={classes.port_paper}>
                                        <PaperContent />
                                    </Paper>
                                    <img src={portrait3} className={classes.portrait_size} />
                                </Grid>
                            </Grid>
                        </Container>

                    ) : (
                                    <Container>
                                        <Grid container spacing={0} className={classes.size_container}>
                                            <Grid item xs={9} className={classes.portrait_container}>
                                                <Paper className={classes.port_paper}>
                                                    <PaperContent />
                                                </Paper>
                                                <img src={portrait4} className={classes.portrait_size} />
                                            </Grid>
                                        </Grid>
                                    </Container>
                                )
                }
            </div>
        </React.Fragment>



    )
}
