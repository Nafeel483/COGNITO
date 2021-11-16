import {
  Avatar,
  Collapse,
  Divider,
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  Bookmark,
  BookmarkBorderOutlined,
  Create,
  CreateNewFolder,
  DeleteOutline,
  Description,
  ExitToAppOutlined,
  ExpandLess,
  ExpandMore,
  FileCopyOutlined,
  FolderOpenOutlined,
  Label,
  Lock,
  MonetizationOn,
  Public,
  Share,
  Star,
  SupervisorAccountOutlined,
} from "@material-ui/icons";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { FaFolderOpen } from "react-icons/fa";
import colors from "../../../assets/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { BiBadge } from "react-icons/bi";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import assets from "../../../assets/assets";
import EditFolderDialog from "../../../components/Folders/CreateFolder/EditFolderDialog";
import BuyFolderDialog from "./BuyFolderDialog";
import { HiLockClosed } from "react-icons/hi";

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
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const FolderChip = (props) => {
  const { folder, isSearch } = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  const handleClose = (event) => {
    event.stopPropagation();

    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const [open2, setOpen2] = React.useState(false);
  const [editOpenModel, setEditModel] = React.useState(false);

  const handleClick2 = (event) => {
    event.stopPropagation();
    setAnchorEl2(event.currentTarget);
  };

  const handleEditClick2 = (e) => {
    e.stopPropagation();
    setOpen2(!open2);
  };

  const handleClose2 = (event) => {
    event.stopPropagation();

    setAnchorEl2(null);
  };

  const [anchorEl3, setAnchorEl3] = React.useState(null);

  const [open3, setOpen3] = React.useState(false);

  const handleClick3 = (event) => {
    event.stopPropagation();
    setAnchorEl3(event.currentTarget);
  };

  const handleEditClick3 = (e) => {
    e.stopPropagation();
    setOpen3(!open3);
  };

  const handleClose3 = (event) => {
    event.stopPropagation();

    setAnchorEl3(null);
  };

  const openEditModel = (e) => {
    e.stopPropagation();
    setEditModel(!editOpenModel);
  };

  return (
    <>
      <EditFolderDialog
        open={editOpenModel}
        handleDialogClose={openEditModel}
      />

      <Grid
        container
        className={classes.folderOuterWrapper}
        onClick={props.handleClick}
      >
        <Grid container className={classes.folderChipWrapper} >
          <Grid item xs={3} className={classes.folderIconWrapper}>
            <img
              src={assets.folderImage}
              style={{ width: "20px", height: "14px" }}
            />
            <Typography
              className={classes.itemsCount}
              variant="span"
              component="span"
            >
              {`${folder.items} Items`}
            </Typography>
          </Grid>

          <Grid item xs={9}>
            <Grid
              container
              xs={12}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className={`${classes.contentRows}`}
            >
              <div
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "11rem",
                  height: "2rem",
                }}
              >
                <Typography nowrap color="primary" className={classes.title}>
                  {folder.title}
                </Typography>
              </div>

              {folder.isPremium && <BuyFolderDialog />}

              {!folder.isPremium && folder.isLocked && (
                <Typography className={classes.locked}>
                    <HiLockClosed/> Locked
                </Typography>
              )}

              <MoreVertIcon
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
                style={{ fontSize: 14}}
              />

              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <StyledMenuItem onClick={openEditModel}>
                  <ListItemIcon>
                    <Create fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Edit" />
                  {/* {open ? <ExpandLess className={classes.expand} /> : <ExpandMore className={classes.expand} />} */}
                </StyledMenuItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Divider />
                  {/* <List component="div" disablePadding>
                    <ListItem button onClick={openEditModel}>
                      <ListItemText inset primary="Option 1" />
                    </ListItem>
                    <ListItem button className={classes.menuItem} onClick={e => e.stopPropagation()} >
                      <ListItemText inset primary="Option 2" />
                    </ListItem>
                  </List> */}
                </Collapse>
                <StyledMenuItem>
                  <ListItemIcon>
                    <DeleteOutline fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Delete" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <FileCopyOutlined fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Duplicate" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <Description fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Combine" />
                </StyledMenuItem>
              </StyledMenu>
            </Grid>
            <Grid
              container
              xs={12}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className={`${classes.contentRows}`}
            >
              <Typography
                color="primary"
                variant="span"
                component="span"
                className={classes.user}
              >
              
                &nbsp;@{folder.username}
              </Typography>

              <Typography
                color="primary"
                variant="span"
                component="span"
                className={classes.ratingWrapper}
              >
                <span className={classes.ratings}>
                  <Star className={classes.star} />
                  {folder.rating}
                </span>
                &nbsp;&nbsp;&nbsp;
                <span className={classes.reviews}>
                  {folder.reviews}+ Reviews
                </span>
              </Typography>

              <BookmarkBorderOutlined
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                style={{ fontSize: 12 }}
                onClick={handleClick2}
              />

              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
              >
                <StyledMenuItem onClick={handleEditClick2}>
                  <ListItemIcon>
                    <Lock fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Privacy" />
                  {open2 ? (
                    <ExpandLess className={classes.expand} />
                  ) : (
                    <ExpandMore className={classes.expand} />
                  )}
                </StyledMenuItem>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                  <Divider />
                  <List component="div" disablePadding>
                    <ListItem button onClick={(e) => e.stopPropagation()}>
                      <ListItemText>
                        <Lock fontSize="small" />
                      </ListItemText>
                      <ListItemText inset primary="Private" />
                    </ListItem>
                    <ListItem
                      button
                      className={classes.menuItem}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ListItemText>
                        <Public fontSize="small" />
                      </ListItemText>
                      <ListItemText inset primary="Public" />
                    </ListItem>
                  </List>
                </Collapse>
                <StyledMenuItem>
                  <ListItemIcon>
                    <Share fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Share" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <Create fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Edit" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <DeleteOutline fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Delete" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <ExitToAppOutlined fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Export" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <SupervisorAccountOutlined fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Convert to group" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <FileCopyOutlined fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Duplicate" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <CreateNewFolder fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Combine" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <MonetizationOn fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Monetized" />
                </StyledMenuItem>

                <StyledMenuItem onClick={handleEditClick3}>
                  <ListItemIcon>
                    <Lock fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Updates" />
                  {open3 ? (
                    <ExpandLess className={classes.expand} />
                  ) : (
                    <ExpandMore className={classes.expand} />
                  )}
                </StyledMenuItem>
                <Collapse in={open3} timeout="auto" unmountOnExit>
                  <Divider />
                  <List component="div" disablePadding>
                    <ListItem button onClick={(e) => e.stopPropagation()}>
                      <ListItemIcon>
                        <Lock fontSize="small" />
                      </ListItemIcon>
                      <ListItemText inset primary="Private" />
                    </ListItem>
                    <ListItem
                      button
                      className={classes.menuItem}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ListItemIcon>
                        <Public fontSize="small" />
                      </ListItemIcon>
                      <ListItemText inset primary="Public" />
                    </ListItem>
                  </List>
                </Collapse>
              </StyledMenu>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FolderChip;

const useStyles = makeStyles((theme) => ({
  folderOuterWrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
    overflow: "hidden",
    cursor: "pointer",
    padding: 10
  },
  title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    marginTop:5
  },
  folderChipWrapper: {
    background: colors.white,
    border: "0.5px solid rgba(0, 0, 0, 0.3)",
    borderRadius: 5,
    height: 53,
    borderRadius: 10,
    width: "100%",
    overflow: "hidden",
  },
  folderIconWrapper: {
    height: "100%",
    background: colors.primary,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    color: colors.white,
  },
  itemsCount: {
    fontSize: 8,
    fontWeight: 600,
    marginTop: 10,
    fontFamily: " Arial, Helvetica, sans-serif",
    color: "#C9E2D9",
  },
  contentRows: {
    height: "50%",
    paddingLeft: 10,
    paddingRight: 30,
    flexWrap: 'nowrap',
    paddingTop: 2
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  user: {
    display: "flex",
    alignItems: "center",
    fontSize: 12,
  },
  ratingWrapper: {
    fontSize: 8,
    display: "flex",
    alignItems: "center",
  },
  ratings: {
    display: "flex",
    alignItems: "center",
    color: colors.golden,
  },
  reviews: {
    display: "flex",
    alignItems: "center",
  },
  star: {
    height: 15,
    width: 15,
  },
  expand: {
    color: colors.white,
  },
  locked: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darkGolden,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}));
