import React from 'react'
import { useVerifyOTPMutation } from '../services/profile.jsx';
import { useState } from 'react'
import { useNavigate, useLocation} from 'react-router-dom'

const VerifyOTP = () => {
    const [otp, setEmail] = useState()
  const navigate = useNavigate();
    const { state } = useLocation()
    console.log(state,"10")

  const [generateOTP] = useVerifyOTPMutation();
  console.log(otp,"09")

    const VerifyOTP = async () => {
        let data = { otp , email:state}
        const res = await generateOTP(data)
        console.log(res)
        navigate("/ResetPassword")
    }
      
    return (
      
        <>
            <h1>Verify OTP</h1>
            <div>
        <label>Enter  OTP</label>
        <input
        
          type='email'
          onChange={(e)=>setEmail(e.target.value)}
        />
                <button onClick={() => VerifyOTP()}>Verify</button>
                </div>
      </>
  )
}

export default VerifyOTP