import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [registation, setRegistation] = useState({Name: "", Email: "", Password: ""})
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setRegistation({...registation, [e.target.name]: e.target.value})
    }

    const handleRegistered = async ()=>{
        
        if(!registation.Name && !registation.Email && !registation.Password){
            alert('fill a fields')
        }
        else{
            await fetch('http://localhost:3000/users',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(registation)
        })
        alert("Registered Successfully")
        navigate('/')

        }

    }

  return (
    <div className='register-container d-flex card'>
            <div className='header'>
                <div className='text'>Register</div>
            </div>
            <div className="inputs">
                <div className="input">
                    <i className="bii bi-person-fill"></i>
                    <input name="Name" type="text" placeholder='Name' onChange={handleChange} required/>
                </div>
                
                <div className="input">
                    <i className="bii bi-envelope-fill"></i>
                    <input name="Email" type="email"  placeholder='Email Id' onChange={handleChange} required/>
                </div>
                <div className="input">
                    <i className="bii bi-lock-fill"></i>
                    <input name="Password" type="password"  placeholder='Password' onChange={handleChange} required/>
                </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={handleRegistered}>Register</div>
            </div>
        </div>
  )
}

export default Login