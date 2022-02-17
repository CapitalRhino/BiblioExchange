import React from "react";
const url = 'https://localhost:7260/Auth'
export default function useLogin(details)
{
    let status = 0
    
    const veifyUser = async(userDetails)=>
    {
        const res = await fetch(url+`?userName=${userDetails.username}&password=${userDetails.password}`);
        const data = await res.json();
        status = data

    }
    
    const getStatus =async ()=>
    {
        await veifyUser(details)
        return status
    };
    return getStatus
}