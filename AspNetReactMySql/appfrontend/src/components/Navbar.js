import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <ul>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/Login"}>Search</Link>
        </li>
        <li>
            <Link to={"/Books"}>Chats</Link>
        </li>
    </ul>
    <Outlet/>
</>
  )
}

export default Navbar