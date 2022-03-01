import React from 'react'
import { Link } from "react-router-dom";
import useAuth from '../../Auth/useAuth';
const Navbar = () => {
    const { auth } = useAuth();
    return (
        <>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                {
                auth?.accessToken
                ?<></>
                :<li><Link to={"/Login"}>Login</Link> </li>
                }
                <li>
                    <Link to={"/Books"}>Books</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar