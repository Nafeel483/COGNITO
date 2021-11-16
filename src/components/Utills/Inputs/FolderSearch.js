import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Select from 'react-select'
import SearchFolderChip from '../Folder/SearchFolderChip'
import { makeStyles, TextField } from '@material-ui/core'
import assets from "../../../assets/assets";

import './styles.css'

const myFolders = [
  {
    title: 'UI/UX',
    items: 10,
    username: 'Mario',
    rating: 4.9,
    reviews: 400
  },
  {
    title: 'Artificial',
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


const Option = (props) => {

  const history = useHistory()

  const handleClick = () => {
    history.push('/search')
  }
  const {
    ...
    data
  } = props
  console.log("Nafeel::_", data)
  return (
    <>
      {/* <SearchFolderChip handleClick={handleClick} folder={data.data} /> */}
    </>
  )
}

const FolderSearch = () => {
  const history = useHistory()
  const classes = useStyles()
  const [search, setSearch] = useState('')
  const [showData, setShowData] = useState(false)


  const handleChangeStart = (e) => {
  
    let text = e.target.value
    if (text.length >= 3) {
      setShowData(true)
      setSearch(text)
      handleFocus()
    }
    else {
      setShowData(false)
      setSearch(text)
      handleBlur()
    }
  }
  const handleFocus = () => {
    localStorage.setItem('clicks', 'true');
  }
  const handleBlur = () => {
    console.log('handleBlur_____ i s')
    localStorage.setItem('clicks', 'false');

  }

  const handleClick = () => {
    setShowData(false)
    history.push('/search')
  }
  return (
    <>
      {/* <Select
        className={classes.title}
        options={myFolders}
        onChange={handleChange}
        components={{ Option: Option }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={"Search"}
      /> */}
     
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          placeholder="Search"
          value={search}
          onChange={handleChangeStart}
          InputProps={{
            startAdornment: (
              <img src={assets.SearchIconfrom} style={{ width: '20px', height: '20px', marginRight: 10 }} />
            ),
          }}
        />
        {
          showData ?
            <div style={{
              backgroundColor: 'white', position: 'relative',
              display: 'inline-block', zIndex: 1,
              boxShadow: "0px 3px 5px rgba(9, 30, 66, 0.2)",
              borderRadius: '3px'
              //             box-shadow: 0px 3px 5px rgba(9, 30, 66, 0.2);
              // border-radius: 3px;
            }}>
              {
                myFolders.map((data) => {
                  return (
                    <>
                      <SearchFolderChip handleClick={handleClick} folder={data} />
                    </>
                  )
                })
              }
            </div>
            : null
        }
    </>
  )
}

export default FolderSearch
const useStyles = makeStyles({
  title: {
    width: '280px',
    marginLeft: -40,
  },

})