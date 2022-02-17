import React from 'react'
const url = 'https://localhost:7260/Auth'
const useRegister = (details) => {
    const CreateUser = async(userDetails)=>
    {
        const res = await fetch(url+`?userName=${userDetails.username}&email=${userDetails.email}
        &phono=${userDetails.phono}&password=${userDetails.password}`,{method:'POST'});
    }
    const PostUser =async ()=>
    {
        await CreateUser(details)
    };
    return PostUser
}

export default useRegister