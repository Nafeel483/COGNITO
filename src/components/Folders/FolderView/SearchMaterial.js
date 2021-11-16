import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import FolderChip from '../../Utills/Folder/Searchchip'
import { useHistory } from 'react-router'
import assets from "../../../assets/assets";

const SearchMaterial = (props) => {
    const classes = useStyles()
    const history = useHistory()

    const handleFolderClick = (folder) => {
        history.push(`/study`)
    }

    return (
        <Grid item xs={12} md={9} className={classes.studyMaterialWrapper} >
            <Typography className={classes.title} color="primary" variant="h6" component="h6">
                {"Study Material"}
            </Typography>

            {studyMaterial &&
                studyMaterial.map(folder => {
                    return (
                        <FolderChip handleClick={() => handleFolderClick(folder)} folder={folder} />
                    )
                })
            }

        </Grid>
    )
}

export default SearchMaterial

const useStyles = makeStyles({
    studyMaterialWrapper: {
        marginTop: 0
    },
    title: {
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: 600,
    }
})


const studyMaterial = [
    {
        title: 'Midterm',
        image: assets.folderImage,
        items: "5 Items",
        username: '@Mario',
        rating: 4.9,
        reviews: 400
    },
    {
        title: 'Midterm',
        image: assets.question,
        items: "5 Questions",
        username: '@Mario',
        rating: 3.9,
        reviews: 500
    },
    {
        title: 'Midterm',
        image: assets.question,
        items: "5 Questions",
        username: '@Mario',
        rating: 4.5,
        reviews: 500
    },
    {
        title: 'Midterm',
        image: assets.question,
        items: "5 Questions",
        username: '@Mario',
        rating: 4.9,
        reviews: 400
    },
]
