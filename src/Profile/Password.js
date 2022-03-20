import React,{useState,useEffect} from 'react'
import { faEdit, faSave, faTimes ,faInfoCircle,faCancel,faCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RegisterPasswordToggle from '../Auth/RegisterPasswordToggle';
import './Password.scss'
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const UpdatePwd = async (pwd) => {

}
function Password() {
    const [editPwd, setEditPwd] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
  
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    return(
        <div className='ChangePassword'>
            {!editPwd
            ?<button className='ChangeButton' onClick={()=>setEditPwd(true)}>Change Password</button>
            :<>
                <div className='controls'>
                 <label className='pwd' htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <RegisterPasswordToggle params={{password:"password",pwd:pwd,setPwd:setPwd,required:false,describedby:"pwdnote",validPwd:validPwd,setPwdFocus:setPwdFocus}}/>
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <RegisterPasswordToggle params={{password:"password",pwd:matchPwd,setPwd:setMatchPwd,required:false,describedby:"confirmnote",validPwd:validMatch,setPwdFocus:setMatchFocus}}/>
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p></div>
                        <span className='buttons'><button style={{color:(validPwd&&validMatch)?'limegreen':'red'}} className='confirm' disabled={!(validPwd&&validMatch)} onClick={() => { UpdatePwd(); setEditPwd(false); }}>
                       {(validPwd&&validMatch)?<>Save </>:<>Unvalid </>} <FontAwesomeIcon icon={faSave} className={(validPwd&&validMatch) ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={(validPwd&&validMatch) ? "hide" : "invalid"} />
                    </button>
                        <button className='cancel' onClick={() => { setEditPwd(false); }}>
                            Cancel <FontAwesomeIcon className='invalid' icon={faCancel} />
                            </button>
                            </span>
            </>
        }
        </div>
    );
}

export default Password