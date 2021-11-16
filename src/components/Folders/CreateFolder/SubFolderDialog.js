import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '../../Utills/Inputs/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import colors from '../../../assets/colors';

const SubFolderDialog = (props) => {

    const { open , handleDialogClose } = props

  return (
    <div>
      <Dialog open={open} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{ color: colors.primary }}>Create Subfolder</DialogTitle>
        <DialogContent >
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            placeholder="Name"
            fullWidth
            style={{ minWidth: 500}}
          />

        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            placeholder="Description"
            style={{ minWidth: 500, marginTop: 30}}
          />
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
          <Button onClick={handleDialogClose} variant="contained" color="primary">
                Create SubFolder
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SubFolderDialog 