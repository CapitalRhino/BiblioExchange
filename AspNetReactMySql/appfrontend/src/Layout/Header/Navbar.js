import React,{useState,useCallback} from 'react'
import { Link,useNavigate } from "react-router-dom";
import { faHome,faSearch,faPlusCircle,faUser,faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from '../../Auth/useAuth';
import useLogout from '../../Auth/useLogout';
// import variables from  './Header.scss'
const Navbar = () => {
    const {auth} = useAuth();
    const navigate = useNavigate();
    const logout = useLogout();
    const [menuDown, setMenuDown] = useState(false)
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
          ?<button className='Auth' onClick={singout}>Logout</button>
          :<button className='Auth' onClick={()=>{navigate('/Login')}}>Login</button>
        }
        <button  className='menu-icon' onClick={()=>setMenuDown(perv=>!perv)}><FontAwesomeIcon  icon={faBars}/></button>
        </div>
        <div id='mobile-nav'>
        <ul style={{display:menuDown?'block':'none'}}>
                <li>
                    <Link to={"/"}><FontAwesomeIcon icon={faHome}/><span>Home</span> </Link>
                </li>
                <li>
                <Link to={"/Books"}><FontAwesomeIcon icon={faSearch}/><span>Search</span> </Link>
                </li>
                <li>
                    <Link to={'/'} ><FontAwesomeIcon icon={faPlusCircle} /><span>Add</span> </Link>
                </li>
                <li>
                    <Link to={'/Login'} ><FontAwesomeIcon icon={faUser} /><span>Profile</span> </Link>
                </li>
            </ul>
          </div>
        </nav>
    )
}

export default Navbar