import React,{useState,useEffect} from 'react'
import SearchBar from './SearchBar/SearchBar'
import './Home.scss'
function Home() {
  return (
    <section className='Home'>
      <SearchBar/>
      <article>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officia quidem vitae illo perspiciatis rem unde corrupti eos sequi possimus officiis laudantium molestiae pariatur inventore vel earum, ex ipsam! Accusantium?</p> */}
      </article>
    </section>
  )
}

export default Home