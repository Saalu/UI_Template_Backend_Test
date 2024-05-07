import React from 'react'
import {Link, NavLink} from 'react-router-dom';

const Navigation = () => {
  return (
    <div className=''>
      <nav>
        <ul>
            <div className='group'>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/blog'>Blogs</Link></li>
                <li><Link to='/users'>Users</Link></li>
                <li><Link to='/project'>Projects</Link></li>
            </div>
            <div className='auth'>
                <li className='nav-btn'><Link to='/login'>Login</Link></li>
                <li className='nav-btn'><Link to='/register'>Sign up</Link></li>
            </div>
            {/* <li><Link to='/my-tasks'>My Tasks</Link></li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
