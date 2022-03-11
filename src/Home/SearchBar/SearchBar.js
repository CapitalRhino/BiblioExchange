import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './SearchBar.scss'
import { useNavigate } from 'react-router-dom';
function SearchBar() {
  const navigate = useNavigate();
  return (
    <div className='SearchBar'>
        <input onFocus={()=>{navigate('/Search')}} type="text" />
        <span><FontAwesomeIcon icon={ faSearch } /></span>
    </div>
  )
}

export default SearchBar