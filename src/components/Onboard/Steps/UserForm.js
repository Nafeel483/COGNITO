import React, { useState, useEffect } from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import TextField from "../../Utills/Inputs/TextField";
import Select from "../../Utills/Inputs/Select";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import colors from "../../../assets/colors";

const UserForm = (props) => {
  const { selectedType } = props;
  const classes = useStyles();

  const [fields, setFields] = useState({
    image: false,
    username: false,
    companyName: false,
    companyWebsite: false,
    industry: false,
    targetDemographics: false,
    firstName: false,
    lastName: false,
    schoolEmail: false,
    accountReferralCode: false,
    instituition: false,
    password: false,
    confirmPassword: false,
  });

  useEffect(() => {
    let data = {
      image: false,
      username: false,
      companyName: false,
      companyWebsite: false,
      industry: false,
      targetDemographics: false,
      firstName: false,
      lastName: false,
      schoolEmail: false,
      accountReferralCode: false,
      instituition: false,
      password: false,
      confirmPassword: false,
    };

    if (selectedType === 0) {
      data = {
        ...data,
        image: true,
        username: true,
        firstName: true,
        lastName: true,
        schoolEmail: true,
        instituition: true,
        password: true,
        confirmPassword: true,
      };
    }

    if (selectedType === 1) {
      data = {
        ...data,
        username: true,
        firstName: true,
        lastName: true,
        schoolEmail: true,
        accountReferralCode: true,
        password: true,
        confirmPassword: true,
      };
    }

    if (selectedType === 2) {
      data = {
        ...data,
        username: true,
        firstName: true,
        lastName: true,
        schoolEmail: true,
        password: true,
        confirmPassword: true,
      };
    }

    if (selectedType === 3) {
      data = {
        ...data,
        username: true,
        companyName: true,
        companyWebsite: true,
        industry: true,
        targetDemographics: true,
        password: true,
        confirmPassword: true,
      };
    }

    setFields(data);
  }, [selectedType]);

  return (
    <div className={classes.userForm}>
      <div className={classes.formInnerWrapper}>
        <Typography
          className={`${classes.titles} ${classes.register}`}
          variant="h6"
          component="h6"
          gutterBottom
        >
          Provide Basic Information
        </Typography>
        <Grid container spacing={3} className={classes.formWrapper}>
          {fields.image && (
            <Grid item xs={12} className={classes.imageSelector}>
              <AddAPhotoIcon className={classes.cameraIcon} />
              <Typography
                variant="span"
                component="span"
                gutterBottom
                className={classes.imageSelectorText}
              >
                Add Profile Picture
              </Typography>
            </Grid>
          )}
          {fields.username && (
            <Grid item xs={12}>
              <TextField placeholder="Username" className={classes.inputs} />
            </Grid>
          )}
          {fields.companyName && (
            <Grid item xs={12}>
              <TextField
                placeholder="Company Name"
                className={classes.inputs}
              />
            </Grid>
          )}
          {fields.companyWebsite && (
            <Grid item xs={12}>
              <TextField
                placeholder="Company Website"
                className={classes.inputs}
              />
            </Grid>
          )}
          {fields.industry && (
            <Grid item xs={12}>
              <TextField placeholder="Industry" className={classes.inputs} />
            </Grid>
          )}
          {fields.targetDemographics && (
            <Grid item xs={12}>
              <TextField
                placeholder="Target Demographics"
                className={classes.inputs}
              />
            </Grid>
          )}
          {fields.firstName && (
            <Grid item xs={12} md={6}>
              <TextField placeholder="First Name" className={classes.inputs} />
            </Grid>
          )}
          {fields.lastName && (
            <Grid item xs={12} md={6}>
              <TextField placeholder="Last Name" className={classes.inputs} />
            </Grid>
          )}
          {fields.schoolEmail && (
            <Grid item xs={12}>
              <TextField
                placeholder="School Email"
                className={classes.inputs}
              />
            </Grid>
          )}
          {fields.accountReferralCode && (
            <Grid item xs={12}>
              <TextField
                placeholder="Account Referral Code"
                className={classes.inputs}
              />
            </Grid>
          )}
          {fields.instituition && (
            <Grid item xs={12}>
              <Select
                placeholder="Instituition"
                className={classes.inputs}
              />
            </Grid>
          )}
          {fields.password && (
            <Grid item xs={12}>
              <TextField placeholder="Password" className={classes.inputs} />
            </Grid>
          )}
          {fields.confirmPassword && (
            <Grid item xs={12}>
              <TextField
                placeholder="Confirm Password"
                className={classes.inputs}
              />
            </Grid>
          )}
          <Grid xs={3}></Grid>
          <Grid item xs={6}>
            <Button
              className={classes.inputs}
              variant="contained"
              color="primary"
              onClick={props.handleNextClick}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default UserForm;

const useStyles = makeStyles({
  titles: {
    fontStyle: "normal",
    fontWeight: 500,
    fontWize: 24,
    },
  userForm: {
    paddingLeft: "20%",
    paddingRight: "20%",
  },
  formInnerWrapper: {
    marginTop: 60,
    textAlign: "center",
    // background: 'red'
  },
  formWrapper: {
    // background: 'green'
  },
  inputs: {
    width: "100%",
  },
  imageSelector: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  imageSelectorText: {
    fontSize: 8,
    marginTop: 5,
  },
  cameraIcon: {
    border: `1px solid ${colors.grey}`,
    padding: 12,
    borderRadius: "50%",
    background: colors.lightGreySecondary,
  },
});
