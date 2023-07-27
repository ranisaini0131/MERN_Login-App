import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useDispatch } from 'react'
import {useGetAllUserQuery,useRegisterationMutation} from '../services/profile.jsx'

const Signup = () => {

    const { register, handleSubmit } = useForm()
    // const { data } = useGetAllUserQuery();   
    const [Signup] = useRegisterationMutation();

    const submitForm = async (DATA) => {
        const res = await Signup(DATA)
        console.log(res,"16")
    }
   
    return (
        <>
        <h1>Register User</h1>
        <form onSubmit={handleSubmit(submitForm)} >
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
            <button type='submit'>SignUp</button>

        </form>
        </>

    )
}

export default Signup