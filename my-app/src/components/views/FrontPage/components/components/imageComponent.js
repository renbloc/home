import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import waves from '../../../../files/waves.png';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    size_container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 500,
    }



}))


export default function ImageComponent() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.size_container}>
                <img src={waves} className={classes.image} />
            </div>
            <Typography className={classes.size_container}>
                Innovative assessment platform and <br /> mobile engagement
            </Typography>
            <Typography className={classes.size_container}>
                Start using simple, effective tools to detect risk, and reach out at the right time.
            </Typography>
        </React.Fragment>
    )
}
