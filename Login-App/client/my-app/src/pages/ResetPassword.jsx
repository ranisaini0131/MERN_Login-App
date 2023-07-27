import React from 'react'

const ResetPassword = () => {
    return (
        <>
            
            <h1>Reset Password</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                 <div >
                <label htmlFor='email' >Username</label>
                <input
                    type='text'
                    {...register('email')}
                    required
                />
            </div>
            <div>
                <label htmlFor='new_password'>Email</label>
                <input
                    type='text'
                    {...register('new_password')}
                    required
                />
            </div>
                <button>Reset </button>
                <Link to={"/ForgotPassword"}><button >Forgot Password</button></Link>


            </form>
            </>
  )
}

export default ResetPassword