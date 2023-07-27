import React from 'react'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../services/profile.jsx' 
import { storeToken } from '../services/LocalStorage.jsx'
import { useNavigate,Link } from 'react-router-dom'


const Login = () => {
    const { register, handleSubmit } = useForm()
    const [Login] = useLoginMutation();
    const navigate = useNavigate();


    const submitForm = async(data) => {
        console.log(data, "8")
        const res = await Login(data)
        console.log(res, "12")
        storeToken(res.data.token)//local storage me dikh rha h
navigate('/UserProfile')


}

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                 <div >
                <label htmlFor='usename' >Username</label>
                <input
                    type='text'
                    {...register('username')}
                    required
                />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    {...register('email')}
                    required
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input
                    type='text'
                    {...register('password')}
                    required
                />
            </div>
                <button type='submit'>Login</button>
                <Link to={"/ForgotPassword"}><button >Forgot Password</button></Link>


            </form>
            
            </>
    )
}

export default Login