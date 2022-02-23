import React from "react";
const url = 'https://localhost:7260/Auth'
export default function useLogin(details)
{
    const veifyUser = async(userDetails)=>
    {
        const res = await fetch(url+`?userName=${userDetails.username}&password=${userDetails.password}`);
        if(!res.ok)
        {
            const error = await res.json();
        }
        const data = await res.json();
        return data

    }
    
    const getStatus =async ()=>
    {
        await veifyUser(details)
        return 
    };
    return getStatus
}