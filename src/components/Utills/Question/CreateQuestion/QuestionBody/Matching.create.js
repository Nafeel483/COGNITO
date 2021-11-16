import { Button, FormControlLabel, Grid, makeStyles, Radio, RadioGroup, Typography } from '@material-ui/core'
import React from 'react'
import { Add, DeleteOutline } from '@material-ui/icons'

const Matching = (props) => {
  const { question, } = props

  const { options } = question

  const classes = useStyles()

  return (
    <Grid item xs={12} className={classes.innerBody}>
      {options && options.map((option, index) => {
        return (
          <>
            <Grid container xs={12} className={classes.pair}>
              <Grid item xs={5} className={`${classes.single} ${classes.firstColumn}`}>{option.first}</Grid>
              <Grid item xs={5} className={`${classes.single}`}>{option.second}</Grid>
              <Grid item xs={2} className={`${classes.single}`}>
                <DeleteOutline onClick={() => props.handlePairRemove(index, props.id)} />
              </Grid>
            </Grid>

          </>
        )
      })}

      <Grid container xs={12} alignItems="center" justifyContent="center" style={{ marginTop: 20, cursor: 'pointer' }}>
        <Add />
        <Typography onClick={props.handleAdd} variant="span" component="span">
          {"Add Pair"}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Matching

const useStyles = makeStyles({
  innerBody: {
    minHeight: 100,
    padding: '20px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
    // background: 'red'
  },
  pair: {
    background: "rgba(255, 255, 255, 0.1)",
    border: "0.4px solid rgba(0, 0, 0, 0.3)",
    borderRadius: 3.62335,
    padding: 10,
    marginBottom: 10

  },
  single: {
    textAlign: 'center'
  },
  firstColumn: {
    borderRight: '0.5px dotted black'
  }
})
