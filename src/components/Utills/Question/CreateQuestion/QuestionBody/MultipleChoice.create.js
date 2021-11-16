import { FormControlLabel, Grid, makeStyles, Radio, RadioGroup, Typography } from '@material-ui/core'
import React from 'react'
import { Add, DeleteOutline } from '@material-ui/icons'

const MultipleChoice = (props) => {
  const { question: { options } } = props
  const classes = useStyles()
  return (
    <Grid item xs={12} className={classes.innerBody}>
      <RadioGroup aria-label="gender" name="gender1" color="primary">
        {options && options.map((option, index) => {
          return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <FormControlLabel value={option} control={<Radio color="primary" />} label={option} />
              <DeleteOutline onClick={() => props.handleMultipleChoiceRemove(index, props.id)} />
            </div>
          )
        })}
      </RadioGroup>

      <Grid container xs={12} alignItems="center" justifyContent="center"
        style={{ cursor: 'pointer' }}
      >
        <Add />
        <Typography onClick={props.handleAdd} variant="span" component="span">
          {"Add Choice"}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default MultipleChoice

const useStyles = makeStyles({
  innerBody: {
    minHeight: 100,
    padding: '20px 30px'
  }
})
