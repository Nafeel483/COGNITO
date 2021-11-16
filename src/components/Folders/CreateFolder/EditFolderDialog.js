import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '../../Utills/Inputs/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import colors from '../../../assets/colors';

const EditFolderDialog = (props) => {

  const { open, handleDialogClose } = props

  const [folderName, setFolderName] = useState("UI/UX")
  const [folderDes, setFolderDes] = useState("UI/UX for Edit Purpose")


  return (
    <div>
      <Dialog open={open} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{ color: colors.primary }}>Edit Folder</DialogTitle>
        <DialogContent >
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            placeholder="Name"
            value={folderName}
            fullWidth
            style={{ minWidth: 500 }}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            value={folderDes}
            placeholder="Description"
            style={{ minWidth: 500, marginTop: 30 }}
          />
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
          <Button onClick={handleDialogClose} variant="contained" color="primary">
            {"Update Folder"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditFolderDialog 