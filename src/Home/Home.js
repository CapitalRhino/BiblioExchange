import React,{useState,useEffect} from 'react'
import SearchBar from './SearchBar/SearchBar'
import './Home.scss'
import BookListRnd from '../Books/BookListRnd'
function Home() {
  return (
    <section className='Home'>
      <SearchBar/>
      <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officia quidem vitae illo perspiciatis rem unde corrupti eos sequi possimus officiis laudantium molestiae pariatur inventore vel earum, ex ipsam! Accusantium?</p>
        <BookListRnd/>
      </article>
    </section>
  )
}

export default Home