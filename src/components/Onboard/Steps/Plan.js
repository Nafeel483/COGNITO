import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import colors from "../../../assets/colors";

const Plan = (props) => {
  const classes = useStyles();
  const { options, title, price } = props;

  return (
    <Grid xs={12} className={classes.planWrapper}>
      <div className={classes.planTitle}>
        <span>{title}</span>
        {price && <span className={classes.planPrice}>${price}</span>}
      </div>
      <Grid container className={classes.planOptions}>
        {options &&
          options.map((option) => {
            return (
              <Grid xs={12} md={6} className={classes.option}>
                {option.included ? (
                  <CheckIcon className={classes.check} />
                ) : (
                  <CloseIcon className={classes.close} />
                )}
                <Typography
                  variant="span"
                  component="span"
                  gutterBottom
                  className={classes.optionText}
                >
                  {option.title}
                </Typography>
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
};

export default Plan;

const useStyles = makeStyles({
  planWrapper: {
    background: colors.white,
    marginTop: 10,
    marginBottom: 10,
    boxShadow: "0px 4px 15px 10px rgba(0, 0, 0, 0.06)",
    borderRadius: 8,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    minHeight: 130,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18
  },
  planPrice: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18
  },
  planTitle: {
    display: "flex",
    justifyContent: "space-between",
    color: colors.primary,
  },
  planOptions: {
    textAlign: "left",
    marginTop: 20,
  },
  option: {
    display: "flex",
    alignItems: "center",
  },
  check: {
    fontSize: 20,
    color: colors.lightGreen,
  },
  close: {
    fontSize: 20,
    color: colors.lightRed,
  },
  optionText: {
    paddingLeft: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18
  },
});
