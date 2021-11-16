import Fab from '@material-ui/core/Fab';
import React, { useEffect, useState } from 'react'
import Folders from './Folders'
import FolderTags from './FolderTags'

import { Grid, makeStyles, Typography } from '@material-ui/core'
import CreateFolderButton from '../CreateFolder/CreateFolderButton';
import SearchView from '../SearchView/SearchView';


function FolderList() {
  const classes = useStyles()
  const [time, setTime] = React.useState(0);
  const [saved, setSaved] = useState('false')

  // useEffect(() => {
  //   // storing input name
  //   const chaeck = localStorage.getItem("clicks");
  //   if (chaeck != null) {
  //     setSaved(chaeck)
  //   }
  // }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time + 1)
      const chaeck = localStorage.getItem("clicks");
      if (chaeck != null) {
        setSaved(chaeck)
      }
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <>
      {
        saved == 'true' ?
          <SearchView />
          :

          <Grid container>
            <Grid item xs={12}>
              <FolderTags />
              <Typography className={classes.title} color="primary" variant="h6" component="h6">
                {"Home"}
              </Typography>
              <Grid container className={classes.foldersWrapper}>
                <Folders />
              </Grid>
              <div className={classes.create}>
                <CreateFolderButton openDialogCreate={false} />

              </div>
            </Grid>
          </Grid>
      }
    </>
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
  create: {
    position: 'absolute',
    right: 80,
    bottom: 50
  }
})
