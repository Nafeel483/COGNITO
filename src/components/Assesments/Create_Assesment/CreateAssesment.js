import { Button, Grid, makeStyles, Typography, Switch } from '@material-ui/core'
import React, { useEffect } from 'react'
import colors from '../../../assets/colors'
import AssesmentList from './AssesmentList'
import MidTermAssesment from './MidTermAssesment';
import { BookmarkBorderOutlined, MoreVert } from '@material-ui/icons'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router';
import PercentageOption from './PercentageOption';


function CreateAssesment() {
  const [toogleValue, setToogleValue] = React.useState(false);

  const classes = useStyles()
  const history = useHistory()

  const onChangeToogle = () => {
    setToogleValue(!toogleValue)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Grid container style={{ color: colors.primary }}>
      <Grid item xs={12}>
        <Grid item xs={12} className={classes.back}>
          <Grid item xs={12} md={7} style={{ display: 'flex' }}>
            <div className={classes.title}>
              <Typography variant="h5" color="primary">
                <b>Midterm</b>
              </Typography>
            </div>
            <div style={{ marginTop: 5 }}>
              <BookmarkBorderOutlined />
            </div>
          </Grid>
          <Grid item xs={12} md={2} className={classes.switchWrapper}>
            <Typography className={classes.longTitle} style={{ fontSize: 15 }} variant="span" component="span">
              Hide Answers
           </Typography>
            <Switch
              checked={toogleValue}
              onChange={onChangeToogle}
              color="primary"
              name="checkedA"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Grid>
          <div style={{ marginLeft: '50px' }}>
            <Grid item xs={12} md={3} className={classes.btnWrapper}>
              <Button
                variant="contained"
                onClick={() => history.push('/edit-assesment')}
                variant="contained"
                aria-controls="learn-menu"
                aria-haspopup="true"
              >
                {"Edit"}
              </Button>
              <Button
                // onClick={handleClick}
                style={{ marginLeft: '20px' }}
                variant="contained"
                aria-controls="learn-menu"
                aria-haspopup="true"
                color="primary"
              >
                {"Study"}
              </Button>
            </Grid>

          </div>
        </Grid>


        <Grid container>
          {/* <Grid item xs={4} md={3}></Grid> */}
          <Grid item xs={12} md={8}>
            {/* <AssesmentList /> */}
            <MidTermAssesment />
          </Grid>
          <Grid item xs={4} md={4} style={{ marginTop: 20 }}>
            <PercentageOption />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CreateAssesment

const useStyles = makeStyles({
  title: {
    fontSize: 24,
    fontWeight: 600
  },
  back: {
    display: 'flex',
    alignItems: 'center',
    color: colors.primary,
    cursor: 'pointer',
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 18,
    marginTop: '20px'
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  switchWrapper: {
    display: "flex",
    alignItems: "center",
    marginLeft: '30px'
  },
})