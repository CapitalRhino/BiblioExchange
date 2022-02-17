import React,{useState,useEffect} from 'react'
import {Link } from "react-router-dom";
import useLogin from '../hooks/useLogin';
const SubmitHandler = async(e,getStatus)=>
{
    e.preventDefault()
    const IsAuth = await getStatus();
    if(IsAuth==0)console.log("You are logged");
    else if(IsAuth==1)console.log('Wrong password');
    else console.log('Wrong username');
}
function Login () {
    const [details, setDetails] = useState({username:"",password:""});

    const getStatus = useLogin(details)
return (
    <>
    <form onSubmit={(e)=>SubmitHandler(e,getStatus)}>
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" onChange={(e)=>setDetails({...details,username:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" onChange={(e)=>setDetails({...details,password:e.target.value})}/>
        </div>
        <button type="submit">Login </button>
    </form>
    <Link to={"/Register"}>Don't have account?</Link>
    </>
)
}

export default Login