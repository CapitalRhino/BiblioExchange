import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import './PasswordField.scss'
function LoginPasswordToggle({ params }) {
    const [type, setType] = useState("password");
    const { id, pwd, setPwd } = params
    return (
        <div className="PasswordField">
        <input
            type={type}
            id={id}
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
        />
        <button
        onClick={(e)=>{e.preventDefault()}}
         onMouseDown={()=>setType("text")}
         onMouseUp={()=>setType("password")}
         onMouseLeave={()=>setType("password")}
         ><FontAwesomeIcon icon={ faEye } /></button>
        </div>
    )
}

export default LoginPasswordToggle