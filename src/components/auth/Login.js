import React from 'react'
import {Link} from 'react-router-dom';


const Login = () => {
  return (
    <div className='auth-container'>
      <form className=''>
            <h3>Login </h3>
            
            <span>Email</span>
            <input  type=' ' placeholder='Joe@example.com' />
            <span>Password</span>
            <input  type=' ' placeholder='Password' />
          
            <input  type='submit' className='btn' value='Sign in' placeholder='Password' />
            <p className=''>Don't hava an account? <span><Link to='/register'>Register </Link></span> </p>
      </form>
    </div>
  )
}

export default Login
