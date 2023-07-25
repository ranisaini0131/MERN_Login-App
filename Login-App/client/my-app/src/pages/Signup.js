import React from 'react'
import { useState } from 'react'

const Signup = () => {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [firstName, setFirstNmae] = useState()
    const [lastName, setLastName] = useState()
    const [mobile, setMobile] = useState()
    const [address, setAddress] = useState()
    const [profile, setProfile] = useState()

    const onSubmit = () => {
        let data = { username, email, password, firstName, lastName, mobile, address, profile }
        console.log(data)
    }


    return (
        <>
            {/* <div>Signup</div>
            <label>Username<
            <input type='text' onChange={(e) => { setUsername(e.target.value) }} />

                <label>Email</label>
                <input type='text' onChange={(e) => { setEmail(e.target.value) }} />

                <label>Password</label>
                <input type='text' onChange={(e) => { setPassword(e.target.value) }} />

                <label>FirstName</label>
                <input type='text' onChange={(e) => { setFirstNmae(e.target.value) }} />

                <label>LastName</label>
                <input type='text' onChange={(e) => { setLastName(e.target.value) }} />

                <label>Mobile</label>
                <input type='text' onChange={(e) => { setMobile(e.target.value) }} />

                <label>Address</label>
                <input type='text' onChange={(e) => { setAddress(e.target.value) }} />

                <label>Profile</label>
                <input type='text' onChange={(e) => { setProfile(e.target.value) }} />

                <button onClick={() => onSubmit()}>SignUp</button> */}
        </>

    )
}

export default Signup