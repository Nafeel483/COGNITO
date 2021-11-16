import React from 'react'
import SubFolderDialog from './SubFolderDialog';



import { withStyles } from '@material-ui/core/styles';
import { FaFolderOpen, FaPencilAlt } from 'react-icons/fa'
import colors from '../../../assets/colors'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { BiBadge, BiCopy } from 'react-icons/bi'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

import { Avatar, Collapse, Divider, Fab, Grid, List, ListItem, makeStyles, Typography } from '@material-ui/core'
import { Add, Bookmark, BookmarkBorderOutlined, Create, CreateNewFolder, DeleteOutline, Description, DescriptionOutlined, ExitToAppOutlined, ExpandLess, ExpandMore, FileCopyOutlined, FolderOpenOutlined, Label, Lock, MonetizationOn, Public, Share, Star, SupervisorAccountOutlined } from '@material-ui/icons'
// import CreateFolder from '../CreateFolder/CreateFolderDialog';
import { useHistory } from 'react-router';








const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);






const CreateFolderButton = (props) => {


  const { openDialogCreate } = props

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false)

  const handleClick = (event) => {

    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleEditClick = (e) => {
    e.stopPropagation()
    setOpen(!open)
  }

  const handleClose = (event) => {
    event.stopPropagation();

    setAnchorEl(null);
  };



  const [show, setShow] = React.useState(false);

  const handleClickOpen = (event) => {
    event.stopPropagation();
    setShow(true);
  };

  const handleDialogClose = () => {
    setShow(false);
  };

  const history = useHistory()



  return (
    <>
      <SubFolderDialog open={show} handleDialogClose={handleDialogClose} />
      {
        openDialogCreate == true ?
          < Fab
            color="primary"
            variant="extended"
            aria-controls="customized-menu"
            aria-haspopup="true"
            color="primary"
            onClick={handleClick}
          >
            <Add />
            {"Create"}
          </Fab> :
          < Fab
            color="primary"
            variant="extended"
            aria-controls="customized-menu"
            aria-haspopup="true"
            color="primary"
            onClick={handleClickOpen}
          >
            {"New Folder"}
          </Fab>

      }
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          openDialogCreate == true ?

            // <StyledMenuItem onClick={handleClickOpen}>
            //   <ListItemIcon>
            //     <FolderOpenOutlined fontSize="small" />
            //   </ListItemIcon>
            //   <ListItemText primary="Folder" />
            // </StyledMenuItem>


            <>
              <StyledMenuItem onClick={handleClickOpen}>
                <ListItemIcon>
                  <FolderOpenOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Subfolder" />
              </StyledMenuItem>
              <StyledMenuItem onClick={() => history.push('/flashCard')}>
                <ListItemIcon>
                  <BiCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Flashcards" />
              </StyledMenuItem>
              {/* assesment */}
              <StyledMenuItem
                onClick={() => history.push('/new-assesment')}
                // onClick={() => history.push('/assesment')}
              >
                <ListItemIcon>
                  <DescriptionOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Assesments" />
              </StyledMenuItem>
              <StyledMenuItem onClick={() => history.push('/create-note')}>
                <ListItemIcon>
                  <FaPencilAlt fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Notes" />
              </StyledMenuItem>
            </>
            : null
        }
      </StyledMenu>
    </>
  )
}

export default CreateFolderButton
