import React,{useState} from 'react'
import useRegister from '../hooks/useRegister'
const SubmitHandler = async(e,postUser,password,comfirt)=>
{
    e.preventDefault()
    if(password==comfirt)await postUser();
    else console.log('not mactching passwords');
    
}
const Register = () => {
    const [details, setDetails] = useState({username:"",email:"",phono:"",password:""});
    const [comfirt, setComfirt] = useState("")
    const postUser = useRegister(details);
  return (
    <form onSubmit={(e)=>SubmitHandler(e,postUser,details.password,comfirt)}>
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" onChange={(e)=>setDetails({...details,username:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" onChange={(e)=>setDetails({...details,email:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="phono">Phono:</label>
            <input type="text" name="phono" id="phono" onChange={(e)=>setDetails({...details,phono:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" onChange={(e)=>setDetails({...details,password:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="confirmedpassword">Password:</label>
            <input type="password" name="confirmedpassword" id="confirmedpassword" onChange={(e)=>setComfirt(e.target.value)}/>
        </div>
        <button type="submit">Register </button>
    </form>
  )
}

export default Register