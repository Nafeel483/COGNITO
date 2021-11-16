import { Button, Grid, makeStyles, Typography, Switch } from '@material-ui/core'
import React from 'react'
import colors from '../../../assets/colors'
import NewAssesmentList from './NewAssesmentList'
import { FaChevronLeft, FaSeedling } from 'react-icons/fa'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router';



function NewAssesment() {
  const [toogleValue, setToogleValue] = React.useState(false);
  const history = useHistory()
  const classes = useStyles()

  const onChangeToogle = () => {
    setToogleValue(!toogleValue)
  }
  const handleBackClick = () => {
    history.goBack()
  }
  return (
    <>
      <Grid container style={{ color: colors.primary }}>
        <Grid item xs={12} className={classes.back} onClick={handleBackClick}>
          <FaChevronLeft /> &nbsp;&nbsp;&nbsp;Back
            </Grid>
        <Grid item xs={12}>

          <div className={classes.title}>
            <Typography variant="h5" color="primary">
              <b>Create Assessment</b>
            </Typography>
          </div>


          <Grid container>
            <Grid item xs={4} md={3}></Grid>
            <Grid item xs={12} md={7}>
              <NewAssesmentList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default NewAssesment

const useStyles = makeStyles({
  title: {
    fontSize: 24,
    fontWeight: 600,
    marginTop: 15
  },
  back: {
    display: 'flex',
    alignItems: 'center',
    color: colors.primary,
    cursor: 'pointer',
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 18
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  switchWrapper: {
    display: "flex",
    alignItems: "center",
  },
})