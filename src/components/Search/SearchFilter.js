import React, { useState } from 'react'
import Select from 'react-select'

const options = [
    { value: 'All', label: 'All' },
    { value: 'Notes', label: 'Notes' },
    { value: 'Folders', label: 'Folders' },
    { value: 'Groups', label: 'Groups' },
    { value: 'Flashcards', label: 'Flashcards' }
]

const Option = (props) => {
  

    const {
        ...
        data
    } = props
    return (
        <div>
            <input type="checkbox" />
            <span style={styles.label}>{data.label}</span>
        </div>
    )
}

const styles = {
    label: {
        marginLeft: 10,
        fontSize: 15
    }
}



const SearchFilter = () => {
    const [seeOptions, setOptions] = useState(null)
    return (
        <Select hideSelectedOptions={false} value={seeOptions} onChange={data => setOptions(data)} options={options} isMulti={true} components={{ Option: Option }} />
    )
}

export default SearchFilter
