import { Grid } from '@material-ui/core'
import React from 'react'
import colors from '../../assets/colors'
import FolderChipMain from '../Utills/Folder/FolderChipMain'
import FolderPriceTag from '../Utills/Folder/FolderPriceTag'

const CartFilters = () => {
    return (
        <>
        {myFolders && myFolders.map(folder => {
            return <> 
            <Grid item xs={12} md={6}>
              <FolderChipMain folder={folder}/>
            </Grid>

            <Grid item xs={12} md={2} style={styles.tagsWrapper}>
              <FolderPriceTag price={99}/>
            </Grid>
            <Grid item xs={12} md={8} style={styles.breakWrapper}>
              <hr style={styles.break}/>
            </Grid>
          </>
        })}
            
        </>
    )
}

export default CartFilters

const styles = {
  tagsWrapper: {
    padding: 10
  },
  break: {
    height: 1,
    backgroundColor: colors.lightGrey,
    border: 'none'
  },
  breakWrapper: { 
    padding: "0px 10px"
  }
  
}



const myFolders = [
    {
      title: 'UI/UX',
      items: 10,
      username: 'Mario',
      rating: 4.9,
      reviews: 400,
      isLocked: true
    },
    {
      title: 'Artificial Intelligence',
      items: 12,
      username: 'Zustom',
      rating: 3.9,
      reviews: 500,
      isLocked: true
    }
  ]
  
  