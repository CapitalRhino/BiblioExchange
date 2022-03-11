import React, { useState,useEffect } from 'react'
import './BookForm.scss'
function BookForm({isnew,book,setBook}) {
   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');
   const [isbn, setISBN] = useState('');
   const [genre, setGenre] = useState('');
   const [description, setDescription] = useState('');
   const [year, setYear] = useState('');
   const [lang, setLang] = useState('');
   const [nat, setNat] = useState('');
   const [publ, setPubl] = useState('');
   const [className, setClassName] = useState('BookForm');
   console.log(className);
   useEffect(() => {
    setClassName(`BookForm ${isnew?'':'ReadOnly'}`)
   }, [isnew]);
useEffect(() => {
    if(book)
    {
        
    }
}, [book]);
  return (
    <div className={className}>
        <label >BOOK</label>
        <span>
            <label htmlFor="title">Title:</label> 
            <input readOnly={!isnew} type="text" id='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </span>
        <span>
            <label htmlFor="author">Author:</label> 
            <input readOnly={!isnew} type="text" id='author'value={author}onChange={(e)=>setAuthor(e.target.value)}/></span>
        <span>
            <label htmlFor="isbn">ISBN:</label>
            <input type="text" readOnly={!isnew} id='isbn'value={isbn}onChange={(e)=>setISBN(e.target.value)}/></span>
        <span>
            <label htmlFor="genre">Genre:</label>
            <input type="text" readOnly={!isnew} id='genre'value={genre}onChange={(e)=>setGenre(e.target.value)}/></span>
        <span className='textarea-span'>
            <label htmlFor="description">Description:</label>
            <textarea name="description" readOnly={!isnew} cols="30" rows="3" onChange={(e)=>setDescription(e.target.value)}>{description}</textarea></span>
        <span>
            <label htmlFor="year">Year:</label>
            <input readOnly={!isnew} type="text" id='year' value={year}onChange={(e)=>setYear(e.target.value)}/></span>
        <span>
            <label htmlFor="lang">Language:</label>
            <input readOnly={!isnew} type="text" id='lang'value={lang}onChange={(e)=>setLang(e.target.value)}/></span>
        <span>
            <label htmlFor="nat">Nationality:</label>
            <input readOnly={!isnew} type="text" id='nat'value={nat}onChange={(e)=>setNat(e.target.value)}/></span>
        <span>
            <label htmlFor="publisher">Publisher:</label>
            <input readOnly={!isnew} type="text" id='publisher'value={publ}onChange={(e)=>setPubl(e.target.value)}/></span>
        {isnew?<div><button>Add the Book</button></div>:<></>}
    </div>
  )
}

export default BookForm