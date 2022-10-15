import React from 'react'
import './search.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search = ({handleChange}) => {
  return (
    <div className='search-wrapper'>
      <div className='search-input'>
        <SearchRoundedIcon />
        <input type='text' placeholder='Search' onChange={handleChange} />
      </div>
    </div>
  )
}

export default Search