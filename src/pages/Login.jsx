import React from 'react'
import { useState } from 'react';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const[err,setErr]=useState(false);
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const email = e.target[0].value;
    const password = e.target[1].value;
    try{
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/")
     
    }catch(err){
      setErr(true)
    }
  }
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <div className="logo">Lama Chat</div>
            <div className="title">Login</div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Sign in</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login