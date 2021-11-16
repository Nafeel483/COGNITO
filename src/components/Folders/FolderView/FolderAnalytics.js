import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colors from '../../../assets/colors';
import LinearProgress from '@material-ui/core/LinearProgress';

const FolderAnalytics = () => {
    const classes = useStyles()
    const percentage = 53;
    return (
        <div className={classes.wrapper}>
            <Typography className={classes.title} variant="h6" component="h6">
                Analytics
            </Typography>
            <div className={classes.progress}>
                <CircularProgressbar 
                    value={percentage} 
                    text={`${percentage}%`} 
                    styles={buildStyles({
                        pathColor: colors.primaryRed,
                        textColor: colors.darkColor
                      })}
                
                />
            </div>
            <Typography className={classes.statistics} variant="h6" component="h6">
                Flash card Statistics
            </Typography>
            <LinearProgress variant="determinate" value={percentage} />
            <Typography className={classes.progressTitle} variant="span" component="span">
                Progress
            </Typography>
            
        </div>
    )
}

export default FolderAnalytics



const useStyles = makeStyles({
    wrapper: {
        border: `0.5px solid rgba(0, 0, 0, 0.3)`,
        borderRadius: 10,
        padding: 10,
        color: colors.primary,
        marginTop: 20
    },
    title: {
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 24
    },
    progress: { 
        marginTop: 30,
        width: 100, 
        height: 100, 
        display: 'flex', 
        justifyContent: 'center', 
        width: '100%' 
    },
    statistics: {
        fontSize: 18,
        fontWeight: 600,
        marginTop: 10,
        marginBottom: 15
    },
    progressTitle: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 14
    }
})

