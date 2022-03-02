import React,{useCallback} from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Auth/useAuth';
import Navbar from './Navbar'
function Header() {

  
  return (
    <header>
        <Navbar/>
    </header>
  )
}

export default Header