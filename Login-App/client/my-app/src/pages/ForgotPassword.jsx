import React from 'react'
import { useGenerateOTPMutation } from '../services/profile.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const ForgotPassword = () => {
  const [email, setEmail] = useState()
  const navigate = useNavigate();

  const [generateOTP] = useGenerateOTPMutation();
  console.log(email,"09")

  const SendOTP = async () => {
    let data = { email }
    const res = await generateOTP(data)
    console.log(res)
    navigate("/VerifyOTP", {state:email})
}

  return (
    <>
      <h1>Forgot password</h1>
      <label>Email</label>
      <input
      
        type='email'
        onChange={(e)=>setEmail(e.target.value)}
      />
      <button onClick={()=>SendOTP()}>Send OTP</button>
    </>
  )
}

export default ForgotPassword