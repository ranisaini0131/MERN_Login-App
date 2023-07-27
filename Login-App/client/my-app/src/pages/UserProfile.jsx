import React from 'react'
import { useForm } from 'react-hook-form'
import { useUserProfileQuery } from '../services/profile.jsx'
import { getToken, removeToken } from '../services/LocalStorage.jsx'
import { useNavigate } from 'react-router-dom'


const UserProfile = () => {
  const navigate = useNavigate();

  let token = getToken('token')
  console.log(token,"9")
  const { data } = useUserProfileQuery(token);
  console.log(data)

  const onLogout = () => {
    removeToken("token");
    navigate('/Login')
}


  return (
    <>
      <h1>User Profile</h1>
      <div>
        {data?.username}
      </div>
      <button onClick={()=>onLogout()}>Logout</button>


    </>
  )
}

export default UserProfile