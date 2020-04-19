import React, { useState } from 'react';
import { Grid, Paper, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckedIcon from '@material-ui/icons/Check';


const useStyles = makeStyles((theme) => ({
    header_text: {
        paddingTop: '10vh',
        fontSize: 35,
        fontWeight: 500,
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
        paddingBottom: 80
    },
    sub_header: {
        fontSize: 20,
        fontWeight: 500,
        padding: 20
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
    }
}));

export default function Questions() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.cont_divider}>
                <Typography className={classes.header_text}>
                    Vanliga frågor inför ditt konsultuppdrag
                </Typography>
                <Typography className={classes.bread_text}>
                    Här har vi samlat de vanligaste frågorna som ställs till oss
                </Typography>
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper elevation={3} className={classes.paper_divider}>
                            <Typography className={classes.sub_header}>
                                Vem kan använda Thriva?
                        </Typography>
                        </Paper>
                        <Typography className={classes.sub_bread}>
                            <br />
                            Precis som vilken arbetsgivare som helst är bemanningsföretagen skyldiga att betala in till din allmänna pension när du jobbar. Det som skiljer sig mest är villkoren som gäller för tjänstepension. Om arbetsgivaren du jobbar för har kollektivavtal är du alltid garanterad tjänstepension förutsatt att du uppfyller vissa krav. Är du född 1978 eller tidigare så måste du jobba minst 416 timmar för att få tjänstepension per kalenderår. Om du är född 1978 eller senare får du tjänstepension från första arbetade timme, men du måste vara 25 år eller äldre. <br /> <br />
                            Vissa arbetsgivare erbjuder dig ett påslag på lönen istället för tjänstepension. Om du väljer ett sådant upplägg är det viktigt att du har ett eget pensionssparande. En vanlig rekommendation är att avsätta 4,5% av din lön till pensionssparande om du inte har tjänstepension.
                    </Typography>
                        <Paper elevation={3}>
                            <Typography className={classes.sub_header}>
                                Vem kan använda Thriva?
                        </Typography>
                        </Paper>
                        <Typography className={classes.sub_bread}>
                            <br />
                            Precis som vilken arbetsgivare som helst är bemanningsföretagen skyldiga att betala in till din allmänna pension när du jobbar. Det som skiljer sig mest är villkoren som gäller för tjänstepension. Om arbetsgivaren du jobbar för har kollektivavtal är du alltid garanterad tjänstepension förutsatt att du uppfyller vissa krav. Är du född 1978 eller tidigare så måste du jobba minst 416 timmar för att få tjänstepension per kalenderår. Om du är född 1978 eller senare får du tjänstepension från första arbetade timme, men du måste vara 25 år eller äldre. <br /> <br />
                            Vissa arbetsgivare erbjuder dig ett påslag på lönen istället för tjänstepension. Om du väljer ett sådant upplägg är det viktigt att du har ett eget pensionssparande. En vanlig rekommendation är att avsätta 4,5% av din lön till pensionssparande om du inte har tjänstepension.
                    </Typography>
                        <Paper elevation={3}>
                            <Typography className={classes.sub_header}>
                                Vem kan använda Thriva?
                        </Typography>
                        </Paper>
                        <Typography className={classes.sub_bread}>
                            <br />
                            Precis som vilken arbetsgivare som helst är bemanningsföretagen skyldiga att betala in till din allmänna pension när du jobbar. Det som skiljer sig mest är villkoren som gäller för tjänstepension. Om arbetsgivaren du jobbar för har kollektivavtal är du alltid garanterad tjänstepension förutsatt att du uppfyller vissa krav. Är du född 1978 eller tidigare så måste du jobba minst 416 timmar för att få tjänstepension per kalenderår. Om du är född 1978 eller senare får du tjänstepension från första arbetade timme, men du måste vara 25 år eller äldre. <br /> <br />
                            Vissa arbetsgivare erbjuder dig ett påslag på lönen istället för tjänstepension. Om du väljer ett sådant upplägg är det viktigt att du har ett eget pensionssparande. En vanlig rekommendation är att avsätta 4,5% av din lön till pensionssparande om du inte har tjänstepension.
                    </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Container>
        </React.Fragment>



    )
}
