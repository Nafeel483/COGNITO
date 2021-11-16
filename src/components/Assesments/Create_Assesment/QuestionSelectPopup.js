import React from 'react';
import { Button, Grid, makeStyles, Menu, MenuItem } from "@material-ui/core";
import TextField from '../../Utills/Inputs/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import colors from '../../../assets/colors';
import { BiChevronDown } from "react-icons/bi";


const QuestionSelectPopup = (props) => {

  const { open, handleDialogClose, createQuestion, handleClose, anchorEl, handleClick } = props
  // const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();


  return (
    <div>
      <Dialog open={open} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{ color: colors.primary }}>Select Question Type</DialogTitle>
        <DialogContent >
          <Grid
            container
            // justifyContent="center"
            xs={10}
            md={10}
            className={classes.addQuestionWrapper}
          >
            <Button
              className={classes.addQuestion}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              endIcon={<BiChevronDown />}
            >
              {"Select Questions"}
            </Button>
            {/* <Button
              className={classes.addQuestion}
              aria-controls="demo-customized-menu"
              aria-haspopup="true"
              aria-expanded={anchorEl ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<BiChevronDown />}
            >
             {"Select Questions"}
            </Button> */}
            <Menu
              className={classes.menuOptions}
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: {
                  width: 500,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  createQuestion(0);
                }}
              >
               Multiple Choice
          </MenuItem>
              <MenuItem
                onClick={() => {
                  createQuestion(1);
                }}
              >
                Short Answer
          </MenuItem>
              <MenuItem
                onClick={() => {
                  createQuestion(2);
                }}
              >
                True False
          </MenuItem>
              <MenuItem
                onClick={() => {
                  createQuestion(3);
                }}
              >
                Fill in the Blanks
          </MenuItem>
              <MenuItem
                onClick={() => {
                  createQuestion(4);
                }}
              >
                Note
          </MenuItem>
              <MenuItem
                onClick={() => {
                  createQuestion(5);
                }}
              >
                Matching
          </MenuItem>
            </Menu>
          </Grid>

        </DialogContent>

      </Dialog>
    </div>
  );
}

export default QuestionSelectPopup

const useStyles = makeStyles({
  questionsWrapper: {
    marginTop: 20,
  },
  addQuestionWrapper: {
    marginTop: 20,
    marginLeft: 40,
    marginBottom: 20
  },
  menuOptions: {
    width: 500,
    marginTop: 50
  },
  addQuestion: {
    border: "0.5px solid rgba(0, 0, 0, 0.3)",
    borderRadius: 10,
    // padding: '15px 28px',
    width: 500,
    color: colors.primary,
    textAlign: 'left',
    height: 40
  },
  saveButton: {
    padding: '15px 28px',
    width: 185,
    alignItem: 'center',
    marginTop: 20,
    marginLeft: '27%',
    borderRadius: 10,
  }
});