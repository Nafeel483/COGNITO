import React from "react";
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { BookmarkBorderOutlined, MoreVert } from '@material-ui/icons'
import StudyMaterial from "./StudyMaterial";
import colors from "../../../assets/colors";

const FolderDetail = () => {
    const classes = useStyles()
  return (
    <Grid container xs={12} md={8}>
      <Grid item xs={12} md={8} className={classes.folderDetail}>
        <Typography className={classes.folderTitle} color="primary" variant="h6" component="h6">
          UI/UX
        </Typography>
        <Typography
          class={classes.description}
          color="primary"
          variant="p6"
          component="p6"
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} className={classes.options}>
        <MoreVert />
        <BookmarkBorderOutlined />
      </Grid>

        <StudyMaterial/>




    </Grid>
  );
};

export default FolderDetail;

const useStyles = makeStyles({
    folderDetail: {
        textAlign: 'justify'
    },
    folderTitle: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 30
    },
    description: {
        fontSize: 18,
        color: colors.primary,
        fontStyle: "normal",
        fontWeight: "normal",
    },
    options: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
