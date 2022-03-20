import React, { useState, useEffect } from 'react'
import { faEdit, faSave, faTimes, faInfoCircle, faCancel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useProtectedAxios from '../Auth/useProtectedAxios';
import './ChangeField.scss'
const phone_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
const Updatephone = async (phone,axios) => {
    try {
        await axios.put('/Auth/Edit/Phone',{},{ params:{ phone:phone }}
          )
           
       
  
    } catch (error) {
        alert(error)
    }
}
function Phone() {
    const axios = useProtectedAxios();
    const [perv, setPerv] = useState('')
    const [phone, setphone] = useState('');
    const [editphone, setEditphone] = useState(false);
    const [validphone, setValidphone] = useState(false);
    const [phoneFocus, setEmialFocus] = useState(false);
    useEffect(() => {
        setValidphone(phone_REGEX.test(phone))
    }, [phone])
    return (
        <div className='ChangeField'>
            <div className='controls'>
                <label htmlFor="phone">Phone:</label>
                <input
                    readOnly={!editphone}
                    type="text"
                    id='phone'
                    autoComplete="off"
                    onChange={(e) => setphone(e.target.value)}
                    value={phone}
                    aria-invalid={validphone ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setEmialFocus(true)}
                    onBlur={() => setEmialFocus(false)} />
                <p id="uidnote-mobile" className={phoneFocus && phone && !validphone ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must be valid phone number<br />
                </p>
                {
                    editphone
                        ? <span><button style={{ color: validphone ? 'limegreen' : 'red' }} className='confirm' disabled={!validphone} onClick={() => { Updatephone(phone,axios); setEditphone(false); setPerv('') }}>
                            {validphone ? <>Save </> : <>Unvalid </>} <FontAwesomeIcon icon={faSave} className={validphone ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validphone ? "hide" : "invalid"} />
                        </button>
                            <button className='cancel' onClick={() => { setEditphone(false); setphone(perv); setPerv('') }}>
                                Cancel <FontAwesomeIcon className='invalid' icon={faCancel} />
                            </button>
                        </span>
                        : <span><button className='edit' onClick={() => { setEditphone(true); setPerv(phone) }}>Edit <FontAwesomeIcon icon={faEdit} /></button></span>
                }
            </div>

            <p id="uidnote" className={phoneFocus && phone && !validphone ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must be valid phone number<br />
            </p>
        </div>
    )
}

export default Phone