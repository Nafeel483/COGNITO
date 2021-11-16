import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import colors from '../../assets/colors'
import assets from '../../assets/assets'
import Steps from './Steps/Steps'
import AccountType from './Steps/AccountType'
import UserForm from './Steps/UserForm'
import SubscriptionPlan from './Steps/SubscriptionPlan'
import { useHistory } from 'react-router'

const Onboard = () => {
    const classes = useStyles()

    const history = useHistory()

    const [step, setStep] = useState(0)
    const [selectedType, setselectedType] = useState(0)

    const accountHandleNext = (selected) => {
        setStep(1)
        setselectedType(selected)
    }

    const formNextClick = () => {
        setStep(2)
    }


    const planNextClick = () => {
        history.push('/success')
    }


    return (
        <div className={classes.onboarding}>
            <div className={classes.steps}>
                <div className={classes.logoWrapper}>
                    <img src={assets.logo1} alt="logo" style={{ width: '150px', height: '60px' }} />
                </div>
                <div className={classes.stepsWrapper}>
                    <Steps
                        activeStep={step}
                    />
                </div>
            </div>
            <div className={classes.onBoardingWrapper} style={{ background: step === 2 ? colors.primary : colors.white }}>
                {step === 0 &&
                    <AccountType
                        handleNextClick={accountHandleNext}
                    />
                }
                {step === 1 &&
                    <UserForm
                        selectedType={selectedType}
                        handleNextClick={formNextClick}
                    />
                }
                {step === 2 &&
                    <SubscriptionPlan
                        handleNextClick={planNextClick}
                    />
                }
            </div>
        </div>
    )
}


export default Onboard

const useStyles = makeStyles(theme => ({
    onboarding: {
        display: 'flex',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        }
    },
    logoWrapper: {
        height: '30%',
        paddingLeft: 40,
        paddingTop: 40
    },
    stepsWrapper: {
        paddingLeft: 40
    },
    steps: {
        background: colors.primary,
        width: '30vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            width: '100vw'
        }
    },
    onBoardingWrapper: {
        width: '70vw',
        height: '100vh',
        overflowY: 'scroll',
        [theme.breakpoints.down('md')]: {
            width: '100vw',
            height: 'auto',
            paddingBottom: 30
        }
    }
}))
