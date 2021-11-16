import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Add } from '@material-ui/icons'
import TextField from '../../../Inputs/TextField';

const ShortAnswer = (props) => {
  const { question } = props
  const { options } = question

  const classes = useStyles()
  const handleChangeMultiName = (e) => {

  }
  return (
    <Grid item xs={12} className={classes.innerBody}>
      {/* <Grid xs={12} className={classes.shortAnswerWrapper}> */}
      {/* <Typography variant="span">
          {options[0]}
        </Typography> */}
      <TextField
        autoFocus
        margin="dense"
        placeholder="Type Option"
        onChange={handleChangeMultiName}
        value={options[0]}
        fullWidth
      // style={{  }}
      />
      {/* </Grid> */}
    </Grid>
  )
}

export default ShortAnswer

const useStyles = makeStyles({
  innerBody: {
    minHeight: 100,
    padding: '20px 30px'
  },
  shortAnswerWrapper: {
    textAlign: 'justify',
    background: '#FAFBFC',
    border: '2px solid #DFE1E6',
    boxSizing: 'border-box',
    borderRadius: 3,
    fontSize: 12,
    padding: 13
  }
})
