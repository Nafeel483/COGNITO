import {
  makeStyles, Typography,
  Avatar,
} from '@material-ui/core'
import React, { useState } from 'react'
import colors from '../../../assets/colors'
import ProgressBar from 'react-percent-bar';

const PercentageOption = () => {
  const [percent, updatePercent] = useState(35);
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div className={classes.table}>
        {/* <td class="bTop" colspan="3"> */}
        <Typography className={classes.title} variant="h6" component="h6">
          {"Percentage Completed"}
        </Typography>
        {/* </td> */}

        <div className={classes.row}>
          <div>

          </div>
          <div style={{ marginLeft: '15px', display: 'flex', marginTop: 20, }}>
            <div>
              <ProgressBar borderColor={'#255555'} width={'200px'} height={'10px'} colorShift={false} fillColor="#255555" percent={percent} />
            </div>
            <p style={{ fontSize: '20px', color: '#255555', marginLeft: '10px', marginTop: -6 }}>
              {"30%"}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PercentageOption

const useStyles = makeStyles({
  wrapper: {
    border: `0.5px solid rgba(0, 0, 0, 0.3)`,
    borderRadius: 10,
    // padding: 10,
    marginTop: 20
  },
  small: {
    width: '60px',
    height: '60px',
  },
  title: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 18,
    color: colors.primary,
    marginLeft: 20,
    marginTop: 20,
    opacity: 0.5
  },
  table: {
    width: '100%',
    // fontSize: 15,
    // color: colors.primary
  },
  column: {
    textAlign: 'right'
  },
  row: {
    marginTop: 8,
    marginBottom: 7,
    // fontWeight: 500,
    // fontStyle: "normal",
    // fontSize: 18,
    display: 'flex',
    marginLeft: 20,
  }
})

const detail = [
  {
    key: 'Angela Yu',
    value: 'NY University'
  },
  {
    key: 'Angela Yu',
    value: 'NY University'
  },
  {
    key: 'Angela Yu',
    value: 'NY University'
  },
  {
    key: 'Angela Yu',
    value: 'NY University'
  },
  {
    key: 'Angela Yu',
    value: 'NY University'
  },
]
