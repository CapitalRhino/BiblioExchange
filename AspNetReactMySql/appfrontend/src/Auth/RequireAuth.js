import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from './useAuth'

function RequireAuth({allowedroles}) {
    const {auth} = useAuth();
    const location = useLocation();
    console.log(allowedroles);
  return (
    auth?.roles?.find(role=>allowedroles.includes(role))
    ?<Outlet/>
    :auth?.accessToken
    ?<Navigate to="/UnAuthorized" state={{from:location}} replace />
    :<Navigate to='/Login' state={{from:location}} replace/>
  )
}

export default RequireAuth