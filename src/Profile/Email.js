import React,{useState,useEffect} from 'react'
import { faEdit, faSave, faTimes ,faInfoCircle,faCancel} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ChangeField.scss'
import useProtectedAxios from '../Auth/useProtectedAxios';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const UpdateEmail = async (email,axios) => {
    try {
        await axios.put('/Auth/Edit/Email',{},{ params:{ email:email }}
          )
           
       
  
    } catch (error) {
        alert(error)
    }
    
}
function Email() {
    const axios=useProtectedAxios();
    const [perv, setPerv] = useState('')
    const [email, setEmail] = useState('');
    const [editEmail, setEditEmail] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmialFocus] = useState(false);
    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email))
    }, [email])
    return (
        <div className='ChangeField'>
            <div className='controls'>
                <label htmlFor="email">Email:</label>
            <input
                readOnly={!editEmail}
                type="email"
                id='email'
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setEmialFocus(true)}
                onBlur={() => setEmialFocus(false)} />
                <p id="uidnote-mobile" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.<br />
                Must countain @ and .
            </p>
            {
                editEmail
                    ? <span><button style={{color:validEmail?'limegreen':'red'}} className='confirm' disabled={!validEmail} onClick={() => { UpdateEmail(email,axios); setEditEmail(false); setPerv('') }}>
                       {validEmail?<>Save </>:<>Unvalid </>} <FontAwesomeIcon icon={faSave} className={validEmail ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validEmail ? "hide" : "invalid"} />
                    </button>
                        <button className='cancel' onClick={() => { setEditEmail(false); setEmail(perv); setPerv('') }}>
                            Cancel <FontAwesomeIcon className='invalid' icon={faCancel} />
                            </button>
                    </span>
                    : <span><button className='edit' onClick={() => { setEditEmail(true); setPerv(email) }}>Edit <FontAwesomeIcon icon={faEdit} /></button></span>
            }
            </div>
            
            <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.<br />
                Must countain @ and .
            </p>
        </div>
    )
}

export default Email