import React, { useState } from 'react'
import axios from "axios"
import { apirURL } from '../App'

const Regitration = () => {
    const[fordata,setformdata]=useState({})

    const handleform=()=>{
        setformdata({...fordata,[event.target.name]: event.target.value})

    }

    const regiteruser=async()=>{
        const response=await axios.post(`${apirURL}/user/register`,fordata)
        console.log(response)
    }
  return (
    <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="" onChange={handleform} />

        <label htmlFor="password">Password</label>
        <input type="password" name='password'  onChange={handleform}/>

        <button onClick={regiteruser}>Submit</button>
    </div>
  )
}

export default Regitration