import {
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";
const MultipleChoice = (props) => {
  const {
    question: { options },
  } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.innerBody}>
      <RadioGroup aria-label="gender" name="gender1" color="primary">
        {options &&
          options.map((option) => {
            return (
              <FormControlLabel
                value={option}
                control={<Radio color="primary" />}
                label={option}
                className={classes.radioLabel}
              />
            );
          })}
      </RadioGroup>
    </Grid>
  );
};

export default MultipleChoice;

const useStyles = makeStyles({
  innerBody: {
    minHeight: 100,
    padding: "20px 30px",
    fontWeight: "normal",
    fontSize: 19
  },
  radioLabel: {
    fontWeight: "normal",
    fontSize: 19
  }
});
