import { Button, FormControlLabel, Grid, makeStyles, Radio, RadioGroup, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Add } from '@material-ui/icons'

const TrueFalse = (props) => {
  const { question } = props
  const classes = useStyles()
  const [data, SetOptions] = useState([
    'True',
    'False',
  ])
  const [radioCheck, setRadioCheck] = useState('')
  const handleChange = (val) => {
    setRadioCheck(val);
  };

  return (
    <RadioGroup aria-label="gender" name="gender1" color="primary" >
      <Grid item xs={12} className={classes.innerBody}>
        {/* <Button className={classes.true}>True</Button>
            <Button className={classes.false}>False</Button> */}
        {/* {data && data.map(option => {
          return ( */}
        <Button className={radioCheck == 'True' ? classes.true : classes.empty}
          onClick={() => handleChange(data[0])}
        >
          {/* <FormControlLabel
                className={classes.boxLabel}
                value={option}
                control={<Radio color="primary" size={'small'} checked={radioCheck === option}
                  onChange={handleChange}
                  value={option} />}
                label={<Typography style={{ fontSize: 12 }}>{option}</Typography>}
              /> */}
          <Typography style={{ fontSize: 16, }}>{data[0]}</Typography>
        </Button>
        <Button className={radioCheck == 'False' ? classes.false : classes.empty}
          onClick={() => handleChange(data[1])}
        >
          {/* <FormControlLabel
                className={classes.boxLabel}
                value={option}
                control={<Radio color="primary" size={'small'} checked={radioCheck === option}
                  onChange={handleChange}
                  value={option} />}
                label={<Typography style={{ fontSize: 12 }}>{option}</Typography>}
              /> */}
          <Typography style={{ fontSize: 16, }}>{data[1]}</Typography>
        </Button>
        {/* )
        })} */}
      </Grid>
    </RadioGroup>
  )
}

export default TrueFalse

const useStyles = makeStyles({
  innerBody: {
    minHeight: 100,
    padding: '20px 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  true: {
    backgroundColor: '#E3FCEF',
    padding: '10px 50px',
    width: '90px',
  },
  false: {
    backgroundColor: '#FEEBE6',
    padding: '10px 50px',
    width: '90px',
  },
  empty: {
    backgroundColor: '#E7E7E7',
    padding: '10px 50px',
    width: '90px',
  },
  boxLabel: {
    marginLeft: '8px'
  }
})
