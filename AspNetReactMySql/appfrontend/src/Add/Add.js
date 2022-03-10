import React, { useState } from 'react'
// import SearchMenu from '../Search/SearchMenu/SearchMenu'
import './Add.scss'
import BookForm from './BookForm/BookForm';
import ISBNFile from './ISBNFile/ISBNFile';
import SearchField from './SearchField/SearchField';
function Add() {
  //0 not choose, 1 isbn, 2 title, 3 new
  const [method, setMethod] = useState(0);
  const [isNew, setisNew] = useState(false);
  const [book, setsBook] = useState(false);
  const [orderDescription, setOrderDescription] = useState();
  const [price, setPrice] = useState(0);
  return (
    <section className='Add'>
      <form onSubmit={(e)=>e.preventDefault()} action="">
        <article id='methods'>
          <label htmlFor="methods">Book:</label>
          <input type="radio" name="method" value="ISBN" onChange={() => {setMethod(1);setisNew(false)}} /><label htmlFor="ISBN">ISBN</label>
          <input type="radio" name="method" value='Title' onChange={() => {setMethod(2);setisNew(false)}} /><label htmlFor="Title" >Title</label>
          <input type="radio" name="method" value='New' onChange={() => {setMethod(3);setisNew(true)}} /><label htmlFor="New">New</label>
        </article>
        {
          method !== 0
            ? <><article>
              {
                method === 1 ? <ISBNFile/>
                  : method === 2 
                      ?<SearchField />
                    : (<></>)
              }
              
            </article>
            <article>
              <BookForm isnew={isNew}/>
            </article>
            </>
            : <></>
         
        }
        <article className='ad-form'>
        <span className='textarea-span'>
            <label >Ad</label>
            <label htmlFor="description">Description:</label>
            <textarea name="description" cols="30" rows="3" onChange={(e)=>setOrderDescription(e.target.value)} value={orderDescription}></textarea>
            </span>
            <span>
            <label htmlFor="price">Price:</label>
            <input  type="text" id='price' value={price}onChange={(e)=>setPrice(e.target.value)}/></span>
        </article>
      </form>
    </section >
  )
}

export default Add