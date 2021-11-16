import React from 'react'
import { makeStyles, Typography, Grid, Button } from '@material-ui/core'
import Plan from './Plan'
import colors from '../../../assets/colors'

const SubscriptionPlan = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.planWrapper}>
            <div className={classes.innerWrapper}>
                <Typography
                    variant="h6"
                    component="h6"
                    gutterBottom
                    className={classes.title}
                >
                    Choose Subscription Plan
                </Typography>

                <Grid container className={classes.plansWrapper}>
                    {Object.keys(plans).map(key => {
                        const plan = plans[key]
                        return <Plan price={plan.price} title={key} options={plan.options} />
                    })}


                    <Grid xs={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Button
                            className={classes.inputs}
                            variant="contained"
                            color="primary"
                            onClick={props.handleNextClick}
                        >
                            Continue
                        </Button>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default SubscriptionPlan

const useStyles = makeStyles({ 
    planWrapper: {
        paddingLeft: "20%",
        paddingRight: "20%",
    },
    innerWrapper: {
        marginTop: 20,
        textAlign: 'center'
    },
    title: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 24,
        color: colors.white
    },
    plansWrapper: {
        marginTop: 5
    },
    inputs: {
        width: '100%',
        background: colors.darkNavy
    }
})


const plans = {
    FREE: {
        price: '',
        options: [
            {
                title: 'No Vertical features',
                included: false
                
            },
    
            {
                title: 'No analytics',
                included: false
            },
    
            {
                title: 'No printing',
                included: false
            },
    
            {
                title: 'Limited Storage',
                included: false
            }
        ]
    },
    GENIUS: {
        price: 2.99,
        options: [
            {
                title: 'Some vocal capabilities',
                included: true
            },
            {
                title: 'Can make content private',
                included: true
            },
            {
                title: 'Limited analytics',
                included: true
            },
            {
                title: 'More storage',
                included: true
            }
        ]
    },
    MASTER: {
        price: 6.99,
        options: [
            {
                title: 'All vocal capabilities',
                included: true
            },
            {
                title: 'Can make content private',
                included: true
            },
            {
                title: 'Printing capabilities',
                included: true
            },
            {
                title: 'Unlimited Storage',
                included: true
            },
            {
                title: 'Access to all analytics',
                included: true
            }
        ]
    }
}