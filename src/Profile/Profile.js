import React, { useState, useEffect } from 'react'
import { faEdit, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RegisterPasswordToggle from ".//../Auth/RegisterPasswordToggle";
import './Profile.scss'
import Email from './Email';
import Phone from './Phone';
import Password from './Password';
import useAuth from '../Auth/useAuth';
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
const UpdatePhone = async (email) => {

}

function Profile() {
  const{auth} = useAuth();

  const [phone, setPhone] = useState('');
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

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
  return (
    <section className='Profile'>
      <form onSubmit={(e) => e.preventDefault()}>
        <article>
          <label className='username'>Hello, {auth.username}</label>
         <Email/>
          <Phone/>
          <Password/>
          <div>

          </div>
        </article>
      </form>
    </section>
  )
}

export default Profile