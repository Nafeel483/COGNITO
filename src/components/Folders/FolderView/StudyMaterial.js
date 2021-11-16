import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import FolderChip from '../../Utills/Folder/FolderChip'
import { useHistory } from 'react-router'
import assets from "../../../assets/assets";



const StudyMaterial = (props) => {
  const classes = useStyles()
  const history = useHistory()

  const handleFolderClick = (folder) => {
    if (folder.title == 'Assessments') {
      history.push('/create-assesment')
    }
    else if (folder.title == 'Notes') {
      history.push('/create-note')
    }
    else {
      history.push(`/study`)
    }
  }
  const handleFlashClick = () => {
    history.push('/flashCardEdit')
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

export default StudyMaterial

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
    title: 'Subfolder',
    image: assets.folderImage,
    items: 10,
    username: 'Mario',
    rating: 4.9,
    reviews: 400
  },
  {
    title: 'Flashcards',
    image: assets.FlashCard,
    items: 12,
    username: 'Zustom',
    rating: 3.9,
    reviews: 500
  },
  {
    title: 'Assessments',
    image: assets.Assesment,
    items: 20,
    username: 'Satic',
    rating: 4.5,
    reviews: 500
  },
  {
    title: 'Notes',
    image: assets.Notes,
    items: 10,
    username: 'Mario',
    rating: 4.9,
    reviews: 400
  },
  {
    title: 'Flashcards',
    image: assets.FlashCard,
    items: 12,
    username: 'Zustom',
    rating: 3.9,
    reviews: 500
  },
  {
    title: 'Assessments',
    image: assets.Assesment,
    items: 20,
    username: 'Satic',
    rating: 4.5,
    reviews: 500
  },
]
