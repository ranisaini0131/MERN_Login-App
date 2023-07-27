import React from 'react'
import { BrowserRouter, Route,Routes, Link } from 'react-router-dom'

import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import UserProfile from './pages/UserProfile.jsx'
import UpdateUserProfile from './pages/UpdateUserProfile.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import VerifyOTP from './pages/VerifyOTP.jsx'
import ResetPassword from './pages/ResetPassword.jsx'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
        <Route path='/Signup' element={ <Signup/>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/UserProfile' element={<UserProfile />} />
          <Route path='/UpdateProfile' element={<UpdateUserProfile />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
          <Route path='/VerifyOTP' element={<VerifyOTP />} />
          <Route path='/ResetPassword' element={<ResetPassword />} />
          </Routes>
      
      </BrowserRouter>

    </div>
    
  )
}

export default App
