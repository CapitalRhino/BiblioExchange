import React,{useCallback} from 'react'
import { Link,useNavigate } from "react-router-dom";
import useAuth from '../../Auth/useAuth';
import useLogout from '../../Auth/useLogout';
import './Header.css'
const Navbar = () => {
    const {auth} = useAuth();
    const navigate = useNavigate();
    const logout = useLogout();
    const singout=useCallback(
      async () => {
        await logout();
        navigate('/');
      },
      []
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
          ?<button  onClick={singout}>Logout</button>
          :<></>
        }
        </nav>
    )
}

export default Navbar