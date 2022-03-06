import React,{useCallback} from 'react'
import { Link,useNavigate } from "react-router-dom";
import { faHome,faSearch,faPlusCircle,faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from '../../Auth/useAuth';
import useLogout from '../../Auth/useLogout';
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
          <div className='Logo'>
            <h1>BiblioExchange</h1>
          </div>
          <div className='Links'>
            <ul>
                <li>
                    <Link to={"/"}><FontAwesomeIcon icon={faHome}/>Home</Link>
                </li>
                <li>
                <Link to={"/Books"}><FontAwesomeIcon icon={faSearch}/>Search</Link>
                </li>
                <li>
                    <Link to={'/'} ><FontAwesomeIcon icon={faPlusCircle} />Add</Link>
                </li>
                <li>
                    <Link to={'/Login'} ><FontAwesomeIcon icon={faUser} />Profile</Link>
                </li>
            </ul>
            {
          auth?.accessToken
          ?<button  onClick={singout}>Logout</button>
          :<button onClick={()=>{navigate('/Login')}}>Login</button>
        }
        </div>
        </nav>
    )
}

export default Navbar