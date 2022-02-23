import React, { useContext, useEffect, useState } from 'react'
import { ClientProvider } from '../App';
import { useNavigate } from 'react-router-dom';
import Register from '../Components/Register';
function useClient() {
    const [client, setClient] = useState(null);
    const [logged, setLogged] = useState(false);
    //client -> username,expires_in,token
    const Auth = (url,method,headers,body) => {
        
    }
    const RefreshToken = async (user) => {
        if (user === client?.user) {
            //fetch to endpoint using the old active token to get new  
        }
    }
    const IsLogged=()=>
    {
        return logged;
    }
    const HashPassword=(password)=>
    {
        return password;
    }
    const Login = async (username, password) => {
        const hashedpassword = HashPassword(password);
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "username": username,
            "passwordHashed": hashedpassword
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        const res = await fetch("https://localhost:7260/Auth/Login", requestOptions);
        if(!res.ok) return null;
        const data = res.json();
        setClient(data);
        setLogged(true);
    }


    const Register = async(username,password)=>
    {
        const hashedpassword = HashPassword(password);
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "username": username,
            "passwordHashed": hashedpassword
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };
        const res = await fetch("https://localhost:7260/Auth/Register", requestOptions);
        if(!res.ok) return null;
        await Login(username,password);
    }

    const Logout = ()=>
    {
        setClient(null);
        setLogged(false);
    }
    useEffect(() => {
        if (client !== null) {
            setTimeout(() => {
                RefreshToken(client.user);
            }, client.expires_in * 1000 - 5000);
        }
    }
    , [client])
    return [GetToken,IsLogged,Login,Register,Logout];
}

export default useClient