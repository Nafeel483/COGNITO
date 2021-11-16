import { Chip } from '@material-ui/core'
import React, { useState } from 'react'
import colors from '../../../assets/colors'

const tags = [
  'All',
  'Recently Viewed',
  'Shared'
]

const FolderTags = () => {

  const [selected, setSelected] = useState(tags[0])

  const handleChange = newSelected => {
    setSelected(newSelected)
  }
  return (
    <div>
      {tags.map(tag => {
        return (
          <Chip
            label={tag}
            style={{ background: selected === tag ? colors.accent : 'inherit', fontStyle: "normal", fontWeight: "normal", fontSize: 14 }}
            onClick={() => handleChange(tag)}
          />
        )
      })}
    </div>
  )
}

export default FolderTags
