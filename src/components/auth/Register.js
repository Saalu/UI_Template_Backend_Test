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
            <input  type='submit' className='btn' value='Create account' placeholder='Password' />
            {/* <p>Already have an account? <span><Link to='/login'>Sign-in</Link></span> </p> */}
      </form>
    </div>
  )
}

export default Register
