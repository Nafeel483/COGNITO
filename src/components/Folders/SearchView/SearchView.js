import { Grid, makeStyles, Typography } from '@material-ui/core'
import { BookmarkBorderOutlined, MoreVert } from '@material-ui/icons'
import React from 'react'
import FolderDetail from './SearchDetail'
import SearchSummary from '../FolderView/SearchSummary';

const FolderView = () => {
    const classes = useStyles()

    return (
        <Grid container>
            <FolderDetail/>
            <SearchSummary/>
        </Grid>
    )
}

export default FolderView

const useStyles = makeStyles({
    
})