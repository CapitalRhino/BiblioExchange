import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faCaretDown } from "@fortawesome/free-solid-svg-icons";
import './SearchMenu.scss'
function SearchMenu() {
  const [adName, setAdName] = useState('');
  const [book, setBook] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const searchFetch = ()=>
  {

  }
  return (
    <div className='SearchMenu'>
      <div className='inputs'>
         <input 
        className='ad'
         type="text" 
         placeholder='AdName'
         value={adName}
         onChange={(e)=>{setAdName(e.target.value)}}
         />
          <input 
        className='author'
        placeholder='Author'
         type="text" 
         value={author}
         onChange={(e)=>{setAuthor(e.target.value)}}
         /> 
         <input 
        className='genre'
        placeholder='Genre'
         type="text" 
         value={author}
         onChange={(e)=>{setAuthor(e.target.value)}}
         />
          <input 
        className='book'
        placeholder='Book'
         type="text" 
         value={author}
         onChange={(e)=>{setAuthor(e.target.value)}}
         />
         
      </div>
       
        <button className='Search-Button' onClick={searchFetch}><FontAwesomeIcon icon={ faSearch } /></button>
      </div> 
  )
}

export default SearchMenu