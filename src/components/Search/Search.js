import Fab from '@material-ui/core/Fab';
import React, { useState } from 'react'
// import TextField from '../Utills/Inputs/TextField'
import { Grid, makeStyles, Typography, TextField } from '@material-ui/core'
import SearchFilter from './SearchFilter';
import SearchResult from './SearchResult';
import { Button } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import assets from "../../assets/assets";


const FolderList = () => {
  const [search, setSearch] = useState('Hist')
  const classes = useStyles()


  const handleChangeStart = (e) => {
    setSearch(e.target.value)
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography className={classes.title1} color="primary" variant="h6" component="h6">
          {"Search"}
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6} className={`${classes.actionWrapper}`}>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Search Folder"
              value={search}
              onChange={handleChangeStart}
              InputProps={{
                startAdornment: (
                  <img src={assets.SearchIconfrom} style={{ width: '20px', height: '20px', marginRight: 10 }} />
                ),
              }}
            />
            {/* <TextField
              autoFocus
              // margin="dense"
              fullWidth
              placeholder="Search Folder"
              startAdornment={
                <InputAdornment position="start"
                style={{
                  maxHeight: 'none',
                  height: 'auto',
                  marginTop: '-1px',
                  marginRight: '-10px',
                  marginBottom: '-1px',
                 }}>
                  <img src={assets.SearchIconfrom} style={{ width: '20px', height: '20px' }} />
                </InputAdornment>
              }
            /> */}
          </Grid>
          <Grid item xs={12} md={4} className={classes.actionWrapper}>
            <SearchFilter />
          </Grid>
          <Grid item xs={2} className={classes.actionWrapper}>
            <Button
              className={classes.addQuestion}
              color="primary"
              variant="contained"
            >
              Search
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.titleWrapper}>
          <Grid item xs={12} className={classes.foldersTitle}>
            <Typography gutterBottom className={classes.title} color="primary" variant="h6" component="h6">
              {"Results"}
            </Typography>
            <Typography color="primary" className={classes.count} component="span" variant="span">
              (10)
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>
            <SearchResult />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FolderList

const useStyles = makeStyles({
  title: {
    marginTop: 10,
    fontStyle: "normal",
    fontWeight: 600,
    fontWize: 24
  },
  title1: {
    marginTop: 10,
    marginBottom: 15,
    fontStyle: "normal",
    fontWeight: 600,
    fontWize: 24
  },
  create: {
    position: 'absolute',
    right: 80,
    bottom: 50
  },
  titleWrapper: {
    marginTop: 20
  },
  foldersTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  count: {
    marginLeft: 5
  },
  actionWrapper: {
    padding: 3
  },
  field: {
    height: 20
  },
})

