import React, { useState,useEffect,useRef } from 'react'
import './BookForm.scss'
import useProtectedAxios from '../../Auth/useProtectedAxios';
function BookForm({isnew,book,setBook}) {
const axios = useProtectedAxios();
   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');
   const [isbn, setISBN] = useState('');
   const [img, setImg] = useState('');
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
   const handler = async()=>{
       const newBook = {
           title,
           isbn,
           author,
           description,
           year,
           language:lang,
           nationality:nat,
           imageUrl:img,
           publisher:publ,
           genre
       }
       const res = await axios.post('/Book',newBook);
       newBook.id=res.data.id
       setBook(newBook)
   }
useEffect(() => {
    if(book)
    {
        setTitle(book.title);
        setAuthor(book.author);
        setISBN(book.isbn)
        setDescription(book.description)
        setYear(book.year);
        setLang(book.language)
        setNat(book.nationality)
        setImg(book.imageUrl)
        setPubl(book.publisher)
        setGenre(book.genre)
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
            <label htmlFor="img">ImageUrl:</label>
            <input type="text" readOnly={!isnew} id='img'value={img}onChange={(e)=>setImg(e.target.value)}/></span>
        <span>
            <label htmlFor="genre">Genre:</label>
            <input type="text" readOnly={!isnew} id='genre'value={genre}onChange={(e)=>setGenre(e.target.value)}/></span>
        <span className='textarea-span'>
            <label htmlFor="description">Description:</label>
            <textarea name="description" readOnly={!isnew} cols="60" rows="3" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea></span>
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
        {isnew?<div><button onClick={handler}>Add the Book</button></div>:<></>}
    </div>
  )
}

export default BookForm