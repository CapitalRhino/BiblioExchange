import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import './PasswordField.scss'
function RegisterPasswordToggle({ params }) {
    const [type, setType] = useState("password");
    const { id, pwd, setPwd, describedby, validPwd, setPwdFocus } = params
    return (
        <div className="PasswordField">
        <input
            type={type}
            id={id}
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby={describedby}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
        />
        <button
        onClick={(e)=>{e.preventDefault()}}
         onMouseDown={()=>setType("text")}
         onMouseUp={()=>setType("password")}
         onMouseLeave={()=>setType("password")}
         onFocus={() => setPwdFocus(true)}
         onBlur={() => setPwdFocus(false)}
         ><FontAwesomeIcon icon={ faEye } /></button>
        </div>
    )
}

export default RegisterPasswordToggle