import React from 'react'
import {useForm} from 'react-hook-form'

const Login = () => {
const {register, handleSubmit} = useForm()

    const submitForm = (data) => {
    console.log(data,"8")
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






            </form>
            
            </>
    )
}

export default Login