import { Grid, makeStyles, Typography } from '@material-ui/core'
import { BookmarkBorderOutlined, MoreVert } from '@material-ui/icons'
import React from 'react'
import FolderDetail from './FolderDetail'
import FolderSummary from './FolderSummary'

const FolderView = () => {
    const classes = useStyles()

    return (
        <Grid container>
            <FolderDetail/>
            <FolderSummary/>
        </Grid>
    )
}

export default FolderView

const useStyles = makeStyles({
    
})