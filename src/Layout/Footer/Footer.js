import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss'
function Footer() {
  return (
    <footer>
        <Link to='/Privacy'>Privacy</Link>
        <Link to='/AboutUs'>About us</Link>
    </footer>
  )
}

export default Footer