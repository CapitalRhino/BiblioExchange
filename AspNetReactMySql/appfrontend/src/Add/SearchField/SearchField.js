import React from 'react'
import './SearchField.scss'
function SearchField() {
  return (
    <div className='SearchFieldBar' >
      <input type="text" placeholder={'Search by Title'}/>
    </div>
  )
}

export default SearchField