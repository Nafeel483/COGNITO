import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Type from "./Type";

import organization from '@material-ui/icons/Group';
import individual from '@material-ui/icons/Accessibility';
import instructor from '@material-ui/icons/ContactMail';
import student from '@material-ui/icons/Person';

const types = [
  {
    id: 0,
    name: "Student",
    icon: student,
  },
  {
    id: 1,
    name: "Educator",
    icon: instructor,
  },
  {
    id: 2,
    name: "Individual",
    icon: individual,
  },
  {
    id: 3,
    name: "Organization",
    icon: organization,
  },
];

const AccountType = (props) => {
  const classes = useStyles();

  const [selected, setSelected] = useState(0)

  const handleClick = (id, selected) => {
    setSelected(id)
  }

  return (
    <div className={classes.accountTypeWrapper}>
      <div className={classes.accountType}>
        <Typography
          className={`${classes.titles} ${classes.register}`}
          variant="h6"
          component="h6"
          gutterBottom
        >
          Select Your Account Type
        </Typography>

        <div className={classes.types}>
          {types.map(type => (
              <Type 
                selected={type.id === selected} 
                type={type}
                handleClick={handleClick}
              />
            )
          )}
        </div>
        <Button
            className={classes.nextButton}
            variant="contained"
            color="primary"
            onClick={() => props.handleNextClick(selected)}
        >
            Next
        </Button>
      </div>
    </div>
  );
};

export default AccountType;

const useStyles = makeStyles({
  accountTypeWrapper: {
    
  },
  accountType: {
    marginTop: 60,
    textAlign: 'center',
    width: '80%',
    maxWidth: 500,
    margin: 'auto'
  },
  nextButton: {
    maxWidth: 300,
    width: 300,
    marginTop: 50
  }
});
