import React,{useState,useEffect} from 'react'
import useAuth from '../Auth/useAuth'
import axios from '../api/axios';
function Home() {
  return (
    <>
    <h1>This Home page</h1>
    <p> 
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt beatae <br />
        vitae animi possimus deleniti non similique cupiditate, vero molestiae qui nisi <br />
        maxime consectetur exercitationem quas esse commodi odit iusto.
    </p>
    </>
  )
}

export default Home