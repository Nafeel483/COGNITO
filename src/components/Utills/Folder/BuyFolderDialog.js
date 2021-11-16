import * as React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import colors from '../../../assets/colors'
import { Badge, Chip, DialogContent, makeStyles, Grid, Button } from '@material-ui/core';
import FolderChipMain from './FolderChipMain';
import FolderPriceTag from './FolderPriceTag';
import TableFolderChip from './TableFolderChip';
import { useHistory } from 'react-router';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const BuyFolderDialog = (props) => {

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const history = useHistory()

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (value) => {
    setOpen(true);
  };

  const handleClickBtn = () => {
    history.push('/cart')
  }

  const folder = {
    title: 'UI/UX',
    items: 10,
    username: 'Mario',
    rating: 4.9,
    reviews: 400,
    isLocked: true,
    price: 99
  }

  return (
    <>
    <Chip onClick={handleClick} className={classes.buyChip} color="primary" label="Buy" variant="outlined" />

    <Dialog fullWidth="sm" onClose={handleClose} open={open}>
      <DialogTitle className={classes.dialogWrapper}>
        <Typography variant="h6" component="h6" color="primary">
          Buy Folder
        </Typography>
      </DialogTitle>

      <DialogContent className={classes.dialogWrapper}>
        <Grid container>
          <Grid item xs={12} md={9}>
            <FolderChipMain folder={folder}/>
          </Grid>
          <Grid item xs={12} md={3} style={{ padding: 10}}>
            <FolderPriceTag price={folder.price}/>
          </Grid>
          <Grid item xs={12} md={7} style={{ padding: 10}}>
            <Typography className={classes.aboutTitle}>
              <b>About</b>
            </Typography>
            <Typography className={classes.aboutTitle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ padding: 10}}>
            <Typography className={classes.aboutTitle}>
              <b>Material</b>
            </Typography>
            <Grid container>
              <Grid item  xs={12}>
                <TableFolderChip folder={folder}/>
                <TableFolderChip folder={folder}/>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} className={classes.btnWrapper}>
            <Button onClick={handleClickBtn} className={classes.cartBtn} color="primary" variant="contained">Add to Cart</Button>
          </Grid>
        </Grid>
      </DialogContent>
      
    </Dialog>
    </>
  );
}

export default BuyFolderDialog

const useStyles = makeStyles({
  buyChip: {
    background: colors.darkGolden,
    border: colors.darkGolden,
    color: 'white'
  },
  dialogWrapper: { 
    paddingLeft: 30 
  },
  aboutTitle: {
    fontSize: 15,
    color: colors.primary
  },
  aboutDescription: {
    fontSize: 12,
    color: colors.primary
  },
  btnWrapper: {
    textAlign: 'center'
  },
  cartBtn: {
    padding: '5px 60px'
  }
})