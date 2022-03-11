import React,{useState,useEffect,useRef} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faCaretDown } from "@fortawesome/free-solid-svg-icons";
import './SearchField.scss'
import axios from '../../api/axios';
function SearchField({setBook}) {
  const [title, setTitle] = useState('');
  const bookRef = useRef();
  useEffect(() => {
    bookRef.current.focus();
}, [])
  const searchFetch = async()=>
  {
    const res = await axios.get(`/Search/Book/title`,
    {
      params:{
        query:title,
        curPage:0,
        pageSize:1
      }
    })
    const data = res.data
   if(data!=[]){
     setBook(data[0])
   }
  }
  return (
    <div className='SearchFieldBar'>
          <input ref={bookRef} 
        className='book'
        placeholder='The name of the book'
         type="text" 
         value={title}
         onChange={(e)=>{setTitle(e.target.value)}}
         />
        <button className='Search-Button' onClick={searchFetch}><FontAwesomeIcon icon={ faSearch } /></button>
      </div> 
  )
}

export default SearchField