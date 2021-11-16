import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Add } from '@material-ui/icons'
import TextField from "../../../Inputs/TextField";

const ShortAnswer = (props) => {
  const { question } = props
  const { options } = question
  const [addCardName, setAddCardName] = React.useState("");

  const classes = useStyles()

  const handleChange = (e) => {
    setAddCardName(e.target.value)
  }

  return (
    <Grid item xs={12} className={classes.innerBody}>
      <Grid xs={12}>
        <TextField
          placeholder="Answer..."
          size="small"
          className={classes.searchInput}
          onChange={handleChange}
          value={addCardName}
          inputProps={{
            className: classes.searchInput,
          }}
        />
        {/* <Typography variant="span">
                        {options[0]}
                    </Typography> */}
      </Grid>
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
    background: 'white',
    border: '2px solid #DFE1E6',
    boxSizing: 'border-box',
    borderRadius: 3,
    fontSize: 12,
    padding: 13
  },
  searchInput: {
    width: "100%",
    height: 12,
    marginTop: 10,
  },
})
