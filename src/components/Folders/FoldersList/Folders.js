import { Grid } from '@material-ui/core'
import React from 'react'
import FolderChipMain from '../../Utills/Folder/FolderChipMain'
import { useHistory } from 'react-router'

const Folders = () => {

  const history = useHistory()

  const handleClick = (folder) => {
    history.push(`/folder/${folder.id | 2}`)
  }

  return (
    <>
      {myFolders &&
        myFolders.map(folder => (
          <Grid item xs={12} md={6} style={{ paddingLeft: 20 }}>
            <FolderChipMain handleClick={() => handleClick(folder)} folder={folder} />
          </Grid>
        ))
      }
    </>
  )
}

export default Folders



const myFolders = [
  {
    title: 'UI/UX',
    items: 10,
    username: 'Mario',
    rating: 4.9,
    reviews: 400
  },
  {
    title: 'Artificial Intelligence',
    items: 12,
    username: 'Zustom',
    rating: 3.9,
    reviews: 500
  },
  {
    title: 'Data Science',
    items: 20,
    username: 'Satic',
    rating: 4.5,
    reviews: 500
  },
  {
    title: 'UI/UX',
    items: 10,
    username: 'Mario',
    rating: 4.9,
    reviews: 400
  },
  {
    title: 'Artificial Intelligence',
    items: 12,
    username: 'Zustom',
    rating: 3.9,
    reviews: 500
  },
  {
    title: 'Data Science',
    items: 20,
    username: 'Satic',
    rating: 4.5,
    reviews: 500
  },
  {
    title: 'UI/UX',
    items: 10,
    username: 'Mario',
    rating: 4.9,
    reviews: 400
  },
  {
    title: 'Artificial Intelligence',
    items: 12,
    username: 'Zustom',
    rating: 3.9,
    reviews: 500
  },
  {
    title: 'Data Science',
    items: 20,
    username: 'Satic',
    rating: 4.5,
    reviews: 500
  },
  {
    title: 'UI/UX',
    items: 10,
    username: 'Mario',
    rating: 4.9,
    reviews: 400
  },
  {
    title: 'Artificial Intelligence',
    items: 12,
    username: 'Zustom',
    rating: 3.9,
    reviews: 500
  },
  {
    title: 'Data Science',
    items: 20,
    username: 'Satic',
    rating: 4.5,
    reviews: 500
  }
]

