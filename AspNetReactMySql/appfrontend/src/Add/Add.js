import React, { useState } from 'react'
// import SearchMenu from '../Search/SearchMenu/SearchMenu'
import './Add.scss'
import SearchField from './SearchField/SearchField';
function Add() {
  //0 not choose, 1 isbn, 2 title, 3 new
  const [method, setMethod] = useState(0);
  return (
    <section className='Add'>
      <form action="">
        <article id='methods'>
          <label htmlFor="methods">Book:</label>
          <input type="radio" name="method" value="ISBN" onChange={() => setMethod(1)} /><label htmlFor="ISBN">ISBN</label>
          <input type="radio" name="method" value='Title' onChange={() => setMethod(2)} /><label htmlFor="Title" >Title</label>
          <input type="radio" name="method" value='New' onChange={() => setMethod(3)} /><label htmlFor="New">New</label>
        </article>
        {
          method !== 0
            ? <><article>
              {
                method === 1 ? <input type="file" />
                  : method === 2 
                      ?<SearchField />
                    : (<></>)
              }
              
            </article>
            <article>
            <div className='imgalign'>
                <img src='https://d2pzhy4sc0lwtr.cloudfront.net/post_image_sections/high_density/450/381da12109ca6d44b928b85f6b819b50.png' ></img>
              </div>
              <div className='cover'>
                <h1>Test</h1>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>  
                </div> 
            </article>
            </>
            : <></>
         
        }
      </form>
    </section >
  )
}

export default Add