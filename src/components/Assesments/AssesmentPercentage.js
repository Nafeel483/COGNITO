import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { FaNewspaper } from 'react-icons/fa'
import colors from '../../assets/colors'
import LinearProgress from '@material-ui/core/LinearProgress';


const AssesmentPercentage = () => {
    const classes = useStyles()
    return (
        <div className={classes.outerWrapper}>
            <div className={classes.titleWrapper}>
                <div className={classes.logoWrapper}>
                    <FaNewspaper className={classes.logo}/>
                    <Typography className={classes.smallTitle}>
                        5 Questions
                    </Typography>
                </div>
                <Typography className={classes.title} variant="h5" >
                    <b>Midterm</b> &nbsp;
                </Typography>
            </div>
            <div className={classes.percentageWrapper}>
                <Typography className={classes.percentageTitle} variant="h5" >
                    Percentage Completed
                </Typography>
                <div className={classes.percentageInnerWrapper}>
                    <LinearProgress style={{ flex: 10 }} variant="determinate" value={30} />
                    <Typography className={classes.percentageValue} variant="h5" >
                        &nbsp;30%
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default AssesmentPercentage

const useStyles =  makeStyles({
    outerWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: "10px 50px"
    },
    titleWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 80
    },
    title: {
        fontWeight: "bold", 
        fontSize: 30 
    },
    logo: {
        fontSize: 30
    },
    logoWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    smallTitle: {
        fontSize: 11,
        fontWeight: 'bold'
    },
    percentageWrapper: {
        height: 452,
        maxWidth: 285,
        border: "0.5px solid rgba(0, 0, 0, 0.3)",
        borderRadius: 10,
        padding: "35px 20px"
    },
    percentageInnerWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    percentageTitle: {
        fontWeight: 'normal',
        fontSize: 18,
        opacity: 0.5
    },
    percentageValue: {
        fontWeight: 'normal',
        fontSize: 20
    }
})