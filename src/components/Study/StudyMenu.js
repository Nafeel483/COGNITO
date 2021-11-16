import { Button, Grid, ListItemIcon, ListItemText, makeStyles, Menu, MenuItem, Switch, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import { FaChevronLeft, FaSeedling } from 'react-icons/fa'
import colors from '../../assets/colors'
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { TouchApp } from '@material-ui/icons';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CastConnectedIcon from '@material-ui/icons/CastConnected';
import { useHistory } from 'react-router';

function StudyMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [toogleValue, setToogleValue] = React.useState(false);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

  const history = useHistory()

  const handleFlashClick = () => {
    history.push('/flashCardEdit')
  }

  const handleExamClick = () => {
    history.push('/assesment')
  }

  const onChangeToogle = () => {
    setToogleValue(!toogleValue)
  }
  return (
    <>
      <Grid item xs={12} md={3} className={classes.innerWrapper}>
        <Typography className={classes.studyTitle} variant="h6" component="h6">
          <b>Study</b>
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} className={classes.innerWrapper}>
        <Typography className={classes.uiTitle} variant="h6" component="h6">
          <b>UI/UX</b>
        </Typography>
      </Grid>
      <Grid item xs={12} md={2} className={classes.switchWrapper}>
        <Typography className={classes.longTitle} style={{ fontSize: 15 }} variant="span" component="span">
          Study starred card
        </Typography>
        <Switch
          checked={toogleValue}
          onChange={onChangeToogle}
          color="primary"
          name="checkedA"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </Grid>
      <Grid item xs={3} className={classes.btnWrapper}>
        <Button
          variant="contained"
          onClick={handleFlashClick}
          variant="contained"
          aria-controls="learn-menu"
          aria-haspopup="true"
        >
          Edit
        </Button>
        <Button
          onClick={handleClick}
          variant="contained"
          aria-controls="learn-menu"
          aria-haspopup="true"
          color="primary"
        >
          Learn
        </Button>
        <Menu
          style={{ marginTop: 60 }}
          id="learn-menu"
          anchorEl={anchorEl}
          keepMounted
          open={true}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem onClick={handleFlashClick}>
            <ListItemIcon>
              <TouchApp fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Review Flash Card" />
          </StyledMenuItem>

          <StyledMenuItem>
            <ListItemIcon>
              <CastConnectedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Regular Paractice" />
          </StyledMenuItem>

          <StyledMenuItem onClick={handleExamClick}>
            <ListItemIcon>
              <ReceiptIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Exam" />
          </StyledMenuItem>
        </Menu>
      </Grid>
    </>
  );
}

export default StudyMenu;

const useStyles = makeStyles({
  back: {
    display: "flex",
    alignItems: "center",
    color: colors.primary,
  },
  innerWrapper: {
    marginTop: 10,
  },
  studyTitle: {
    fontWeight: 500,
    fontSize: 24
  },
  uiTitle: {
    fontWeight: 500,
    fontSize: 20
  },
  longTitle: {
    fontWeight: 500,
    fontSize: 16
  },
  switchWrapper: {
    display: "flex",
    alignItems: "center",
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
  },
});
