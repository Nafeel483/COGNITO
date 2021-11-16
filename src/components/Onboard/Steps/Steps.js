import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import colors from '../../../assets/colors';


const useQontoStepIconStyles = makeStyles({
  root: {
    color: colors.white,
    display: 'flex',
    height: 35,
    alignItems: 'center',
  },
  active: {
    color: colors.white,
  },
  circle: {
    width: 21,
    border: `1px solid ${colors.white}`,
    height: 20,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  disableCircle: {
    background: colors.lightGreySecondary
  },
  completed: {
    color: colors.white,
    zIndex: 1,
    fontSize: 18,
    border: `1px solid ${colors.lightGreen}`,
    background: colors.lightGreen,
    borderRadius: '50%',
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {(!active && !completed)? <div className={`${classes.circle} ${classes.disableCircle} `} >{props.icon}</div>: completed ? <Check className={classes.completed} /> : <div className={classes.circle} >{props.icon}</div>}
      
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  step: {
    color: 'white',
    "&$completed": {
      color: "white",
    },
    "&$active": {
      color: "white"
    },
    "&$disabled": {
      color: "red"
    },
  },
  alternativeLabel: {},
  active: {}, //needed so that the &$active tag works
  completed: {},
  disabled: {},
  labelContainer: {
    "&$alternativeLabel": {
      marginTop: 0
    },
  },
}));

function getSteps() {
  return ['Account Type', 'Basic Information', 'Subscription Plan'];
}

const Steps = (props) => {
  const classes = useStyles();
  const { activeStep } = props
  const steps = getSteps();


  return (
    <div className={classes.root}>
      <Stepper 
        style={{ background: 'transparent' }} 
        activeStep={activeStep} 
        orientation="vertical"
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={QontoStepIcon}
              style={{ color: colors.white }}
            >
              <span style={styles.step}>{label}</span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default Steps

const styles = {
  step: { 
    color: 'rgb(201, 226, 217)',
    fontSize: 24, 
    fontStyle: 'normal', 
    fontWeight: 500 
  }
}