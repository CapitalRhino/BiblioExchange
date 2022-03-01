import React,{useCallback} from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Auth/useAuth';
import Navbar from './Navbar'
function Header() {
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
    <header>
        <Navbar/>
        {
          auth?.accessToken
          ?<button style={{float:"right"}} onClick={logout}>Logout</button>
          :<></>
        }
    </header>
  )
}

export default Header