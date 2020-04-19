import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 45
    },
    header: {
        fontSize: 26,
        paddingBottom: 10,
        fontWeight: 700
    },
    bread: {
        fontSize: 16,
        paddingBottom: 20
    },
    grid_header: {
        fontSize: 40,
        fontWeight: 100,
        color: 'purple'
    },
    grid_bread: {
        fontSize: 13,
    },
    grid_border: {
        borderRightWidth: 5, borderColor: 'red', borderStyle: 'solid'
    },
    grid_margin: {
        paddingBottom: 30
    },
    buttonMain: {
        borderRadius: 25,
        width: '100%',
        background: "#FFF",
        borderColor: 'purple',
        color: 'purple',
        '&:hover': {
            background: "purple",
            color: '#FFF',
        },
    },
    buttonText: {
        fontSize: 16,
        textTransform: 'none',
        fontWeight: 500,
        padding: 8,
    },
}))

export default function PaperContent() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography className={classes.header}>
                Students
            </Typography>
            <Grid container spacing={2} className={classes.grid_margin}>
                <Grid item xs={6}>
                    <Typography className={classes.grid_header}>
                        1,100
                    </Typography>
                    <Typography className={classes.grid_bread}>
                        suicides occur at <br /> colleges per year.

                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.grid_header}>
                        1.5
                    </Typography>
                    <Typography className={classes.grid_bread}>
                        out of 100 students have <br/> attempted suicide.
    
                    </Typography>
                </Grid>
            </Grid>
            <Typography className={classes.bread}>
                Students enter colleges and universities at a time of significant psychological and social development. They face new independence and new stressors with a reduction of familiar support systems. Voi assists institutions in identifying students at risk and providing ongoing monitoring and behavioral support for peace of mind.
            </Typography>
            <Button className={classes.buttonMain} variant="outlined" color="secondary"><Typography className={classes.buttonText}>Apply for jobs now!</Typography></Button>
        </div>

    )
}
