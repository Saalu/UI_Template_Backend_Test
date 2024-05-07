import React from 'react'
import {Link} from 'react-router-dom';


const Register = () => {
  return (
    <div className='auth-container'>
      <form className=''>
            <h3>Create account</h3>
            <span>Name</span>
            <input  type=' ' placeholder='Joe Doe' />
            <span>Email</span>
            <input  type=' ' placeholder='Joe@example.com' />
            <span>Password</span>
            <input  type=' ' placeholder='Password' />
            <span>Re-enter Password</span>
            <input  type=' ' placeholder='Password' />
            <input  type='submit' className='btn' value='Sign up' placeholder='Password' />
            <p className=''>Already have an account? <span><Link to='/login'>Login</Link></span> </p>
      </form>
    </div>
  )
}

export default Register
