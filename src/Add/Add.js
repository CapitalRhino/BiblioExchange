import React, { useState } from 'react'
import useAuth from '../Auth/useAuth';
// import SearchMenu from '../Search/SearchMenu/SearchMenu'
import './Add.scss'
import BookForm from './BookForm/BookForm';
import ISBNFile from './ISBNFile/ISBNFile';
import SearchField from './SearchField/SearchField';
import useProtectedAxios from '../Auth/useProtectedAxios'
function Add() {
  //0 not choose, 1 isbn, 2 title, 3 new
  const{auth} = useAuth();
  const [method, setMethod] = useState(0);
  const [isNew, setisNew] = useState(false);
  const [isBook, setsISBook] = useState(false);
  const [book, setBook] = useState(null);
  const [orderDescription, setOrderDescription] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState(0);
  const axios = useProtectedAxios();
  const handler = async()=>{
    const newOffer = {
      bookId:book.id,
      userName: auth.username,
      description:orderDescription,
      imageUrl:img,
      price
    }
    console.log(newOffer);
    const res = axios.post('/Offer',newOffer);
  }
  console.log(book);
  return (
    <section className='Add'>
      <form onSubmit={(e)=>e.preventDefault()} action="">
        <article id='methods'>
          <label htmlFor="methods">Book:</label>
          <input type="radio" name="method" value="ISBN" onChange={() => {setMethod(1);setisNew(false);setsISBook(false)}} /><label htmlFor="ISBN">ISBN</label>
          <input type="radio" name="method" value='Title' onChange={() => {setMethod(2);setisNew(false);setsISBook(false)}} /><label htmlFor="Title" >Title</label>
          <input type="radio" name="method" value='New' onChange={() => {setMethod(3);setisNew(true);setsISBook(true)}} /><label htmlFor="New">New</label>
        </article>
        {
          method !== 0
            ? <>
              {
                method === 1 ?<article> <ISBNFile setBook={setBook}/></article>
                  : method === 2 
                      ?<article><SearchField setBook={setBook}/></article>
                    : (<></>)
              }
              
            
            {book||isBook?<article><BookForm isnew={isNew} book={book} setBook={setBook}/></article>:<></>}
            </>
            : <></>
         
        }
        {
        book?<article className='ad-form'>
        <span className='textarea-span'>
            <label >Ad</label>
            <label htmlFor="description">Description:</label>
            <textarea name="description" cols="60" rows="3" onChange={(e)=>setOrderDescription(e.target.value)} value={orderDescription}></textarea>
            </span>
            <span>
            <label htmlFor="img">ImageUrl:</label>
            <input type="text"  id='img'value={img}onChange={(e)=>setImg(e.target.value)}/></span>
            <span>
            <label htmlFor="price">Price:</label>
            <input  type="number" id='price' value={price}onChange={(e)=>setPrice(e.target.value)}/></span>
            <div><button onClick={handler} className='add-offer' >Add the Offer</button></div>:<></>
        </article>
        :<></>
        }
      </form>
    </section >
  )
}

export default Add