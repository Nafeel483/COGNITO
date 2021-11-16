import { Fab, Grid, ListItemIcon, ListItemText, Menu, MenuItem, withStyles } from '@material-ui/core'
import { Add, CastConnectedOutlined, ReceiptOutlined, TouchApp } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router'
import CreateFolderButton from '../CreateFolder/CreateFolderButton'
import AboutFolder from './AboutFolder'
import FolderAnalytics from './FolderAnalytics'
import FolderDetail from './FolderDetail'
import FolderSales from './FolderSales'

const FolderSummary = () => {
    
    const history = useHistory()


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleCreate = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleFlashClick = () => {
        history.push('/flashCard')
      }
    
      const handleExamClick = () => {
        history.push('/create-assesment')
      }
      const handleNotesClick = () => {
          history.push('/create-note')
      }


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


    return (
        <Grid item xs={12} md={4}>
            <AboutFolder/>
            <FolderSales/>
            <FolderAnalytics/>
            <div style={styles.create}>
              <CreateFolderButton openDialogCreate={true}/>
            </div>
        </Grid>
    )
}

export default FolderSummary

const styles = {
  create: {
    position: 'absolute',
    right: 80,
    bottom: 50
  }
}
