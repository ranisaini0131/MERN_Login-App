import React from 'react'
import { BrowserRouter, Route,Routes, Link } from 'react-router-dom'

import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import UserProfile from './pages/UserProfile.jsx'
import UpdateUserProfile from './pages/UpdateUserProfile.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
        <Route path='/Signup' element={ <Signup/>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/User-Profile' element={<UserProfile />} />
          <Route path='/Update-Profile' element={<UpdateUserProfile />} />
          <Route path='/Forgot-Password' element={<ForgotPassword />} />
          </Routes>
      
      </BrowserRouter>

    </div>
    
  )
}

export default App
