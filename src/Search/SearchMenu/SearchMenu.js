import React,{useState,useEffect,useRef} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faCaretDown } from "@fortawesome/free-solid-svg-icons";
import './SearchMenu.scss'
function SearchMenu({setTitle}) {
  const [book, setBook] = useState('')
  const bookRef = useRef();
  useEffect(() => {
    bookRef.current.focus();
}, [])
  const searchFetch = ()=>
  {
    setTitle(book)
  }
  return (
    <div className='SearchMenu'>
          <input ref={bookRef} 
        className='book'
        placeholder='The name of the book'
         type="text" 
         value={book}
         onChange={(e)=>{setBook(e.target.value)}}
         />
        <button className='Search-Button' onClick={searchFetch}><FontAwesomeIcon icon={ faSearch } /></button>
      </div> 
  )
}

export default SearchMenu