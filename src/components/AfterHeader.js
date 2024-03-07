import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
const AfterHeader = () => {
 
    const navigate = useNavigate()

    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/')
          }).catch((error) => {
            // An error happened.
          });    
    }
  return (
    <div className='header'>
        <div className='header-img'>
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
        </div>

        <div className='user-info'>
            <div className='user-image'>
                <img src="https://i.pinimg.com/564x/55/2e/93/552e93a53454ed4554a0ac5681b61928.jpg" alt="" />
                <h3>Name</h3>
            </div>
            <button onClick={handleSignOut}>SignOut</button>
        </div>
    </div>
  )
}

export default AfterHeader;