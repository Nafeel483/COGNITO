import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";
import { DialogContent, Grid } from "@material-ui/core";
import TextField from "../Utills/Inputs/TextField";
import colors from "../../assets/colors";
import { SettingsSystemDaydreamRounded } from "@material-ui/icons";

const emails = ["username@gmail.com", "user02@gmail.com"];
const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  body: {
    padding: "10px 20px",
  },
  inputWrapper: {
    paddingTop: 30
  },
  input: {
    width: "100%",
  },
  title: {
      color: colors.primary,
      fontSize: 24,
      fontWeight: 'bold'
  },
  btn: {
      padding: "5px 70px"
  }
};

const AddPaymentDialog = (props) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [num, setNum] = React.useState("");
  const [expiry, setExpiry] = React.useState("");
  const [cvc, setCvc] = React.useState("false");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (value) => {
    setOpen(true);
  };

  const handleSubmit = () => {
    setOpen(false)
    props.handleSubmit(name, num, expiry, cvc)
  }

  return (
    <>
      <Button onClick={handleOpen} variant="contained" color="primary">
        Add Payment Method
      </Button>
      <Dialog fullWidth="sm" open={open} onClose={handleClose}>
        <DialogTitle >
            <Typography style={styles.title}>
                Add Payment method
            </Typography>
        </DialogTitle>
        <DialogContent style={styles.body}>
          <Grid container>
            <Grid item xs={12}>
              <TextField value={name} onChange={e => setName(e.target.value)} placeholder="Name" style={styles.input} />
            </Grid>

            <Grid item xs={12} style={styles.inputWrapper}>
              <TextField  value={num} onChange={e => setNum(e.target.value)}  placeholder="Card Number" style={styles.input} />
            </Grid>


            <Grid item xs={12} md={6} style={styles.inputWrapper}>
              <TextField  value={expiry} onChange={e => setExpiry(e.target.value)}  placeholder="Expiry" style={styles.input} />            
            </Grid>
            
            <Grid item xs={12} md={6} style={{...styles.inputWrapper, paddingLeft: 10}}>
                <TextField  value={cvc} onChange={e => setCvc(e.target.value)}  placeholder="CVC" style={styles.input} />
            </Grid>
            
            <Grid item xs={12} md={12} style={{...styles.inputWrapper, textAlign: "center"}}>
              <Button onClick={handleSubmit} color="primary" variant="contained" style={styles.btn}>
                  Add Card
              </Button>
            </Grid>
            
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddPaymentDialog;
