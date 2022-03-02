import React,{useCallback} from 'react'
import { Link,useNavigate } from "react-router-dom";
import useAuth from '../../Auth/useAuth';
import './Header.css'
const Navbar = () => {
    const {auth,setAuth} = useAuth();
    const navigate = useNavigate();
    const logout=useCallback(
      async () => {
        //revoke refresh token
        setAuth({});
        navigate('/')
      },
      [setAuth]
    );
    return (
        <nav>
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
            {
          auth?.accessToken
          ?<button  onClick={logout}>Logout</button>
          :<></>
        }
        </nav>
    )
}

export default Navbar