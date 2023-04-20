import React from 'react';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {

    const [err,setErr] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;
 

try{
    await signInWithEmailAndPassword(auth, email, password)
    navigate("/")

}catch(err){
  setErr(true)
}
  };
  return (
    <div className='form-container'>
        <div className='form-wrapper'>
            <span className="Logo">Chat App</span>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
              
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder="Password" />
                <button>Sign in</button>
                {err && <span>Something Went Wrong</span>}
            </form>
            <p>You dont have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login