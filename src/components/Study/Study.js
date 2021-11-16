import { Button, Grid, ListItemIcon, ListItemText, makeStyles, Menu, MenuItem, Switch, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import { FaChevronLeft, FaSeedling } from 'react-icons/fa'
import colors from '../../assets/colors'
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { TouchApp } from '@material-ui/icons';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CastConnectedIcon from '@material-ui/icons/CastConnected';
import StudyMenu from './StudyMenu';
import StudyFlashCard from './StudyFlashCard';
import { useHistory } from 'react-router';

const Study = () => {
  const classes = useStyles()
  const history = useHistory()

  const handleBackClick = () => {
    history.goBack()
  }

  return (
    <Grid container>
      <Grid item xs={12} className={classes.back} onClick={handleBackClick}>
        <FaChevronLeft /> &nbsp;&nbsp;&nbsp;Back
            </Grid>

      <StudyMenu />

      <StudyFlashCard />

      <Grid item xs={11} className={classes.continue}>
        <Button variant="contained" color="primary">Continue</Button>
      </Grid>

    </Grid>
  )
}

export default Study

const useStyles = makeStyles({
  back: {
    display: 'flex',
    alignItems: 'center',
    color: colors.primary,
    cursor: 'pointer',
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 18
  },
  continue: {
    marginTop: 15,
    textAlign: 'right'
  }
})
