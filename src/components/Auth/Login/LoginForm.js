import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router";
import colors from "../../../assets/colors";
import TextField from "../../Utills/Inputs/TextField";

const LoginForm = () => {
  const classes = useStyles();
  const history = useHistory()

  return (
    <div className="form-container">
      <Typography className={classes.titles} variant="h5" component="h5">
        Welcome Back!
      </Typography>

      <Typography
        className={classes.titles}
        variant="h5"
        component="h5"
        gutterBottom
      >
        Login to your account
      </Typography>

      <div className={classes.loginForm}>
        <TextField placeholder="Email" className={classes.inputs} />
        <TextField
          type="password"
          placeholder="Password"
          className={classes.inputs}
        />
        <Button
          className={classes.loginButton}
          variant="contained"
          color="primary"
          onClick={() => {
            history.push('/onboard')
          }}
        >
          Login
        </Button>
        <Typography
          className={`${classes.titles} ${classes.register}`}
          variant="span"
          component="span"
          gutterBottom
        >
          Do you have any account? <b>Register</b>
        </Typography>
      </div>
    </div>
  );
};

export default LoginForm;



const useStyles = makeStyles({
  titles: {
    color: colors.textPrimary,
    fontWeight: 500,
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
  inputs: {
    marginTop: 20,
  },
  loginButton: {
    marginTop: 30,
  },
  register: {
    marginTop: 5,
    weight: 400,
  },
});
