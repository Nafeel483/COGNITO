import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import colors from '../../assets/colors'

function StudyFlashCard() {
    const classes = useStyles()
    return (
        <Grid item xs={11} className={classes.flashOuter} >
            <div className={classes.flasbackWrapper}>
                <div className={classes.title}>
                    UI/UX Design
                </div>
                <div className={classes.description}>
                    <Typography
                        variant="p6"
                        component="p6"
                    >
                        User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices

                    </Typography>
                </div>
                <div className={classes.imageWrapper}>
                    <img 
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKbIl-ZeG_IDUqiNNTrWEOIGYjFDqYAnAhjSP3Ljp9DkL5mj1mmmOTGOVzQL38WJU3Sg&usqp=CAU'} 
                        class={classes.image}            
                    />
                </div>
            </div>


            <div className={classes.flasbackWrapper}>
                <div className={classes.title}>
                    UI/UX Design
                </div>
                <div className={classes.description}>
                    <Typography
                        variant="p6"
                        component="p6"
                    >
                        User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices

                    </Typography>
                </div>
                <div className={classes.imageWrapper}>
                    <img 
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKbIl-ZeG_IDUqiNNTrWEOIGYjFDqYAnAhjSP3Ljp9DkL5mj1mmmOTGOVzQL38WJU3Sg&usqp=CAU'} 
                        class={classes.image}            
                    />
                </div>
            </div>
        </Grid>
    )
}

export default StudyFlashCard

const useStyles = makeStyles({
    flashOuter: {
        marginTop: 30
    },
    flasbackWrapper: {
        height: 90,
        padding: 10,
        overflow: 'hidden',
        border: '0.5px solid rgba(0, 0, 0, 0.3)',
        borderRadius: 10,
        display: 'flex',
        marginTop: 10,
        color: colors.primary
    },
    title: {
        flex: 2,
        // background: 'blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRight: '0.5px dotted rgba(0, 0, 0, 0.3)',
        fontWeight: "normal",
        fontSize: 18
    },
    description: {
        flex: 8,
        textAlign: 'justify',
        padding: '10px 20px',
        fontWeight: "normal",
        fontSize: 18
    },
    imageWrapper: {
        flex: 2
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8
    }
})
