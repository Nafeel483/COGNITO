import React from 'react'
import FolderChipMain from '../Utills/Folder/FolderChipMain'

const SearchResult = () => {
    return (
        <>
        {myFolders && myFolders.map(folder => {
            return <FolderChipMain folder={folder}/>
        })}
            
        </>
    )
}

export default SearchResult




const myFolders = [
    {
      title: 'UI/UX',
      items: 10,
      username: 'Mario',
      rating: 4.9,
      reviews: 400,
      isPremium: true
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
  
  