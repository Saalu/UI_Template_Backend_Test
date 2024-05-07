import React from 'react'
import {Link, NavLink} from 'react-router-dom';

const Navigation = () => {
  return (
    <div className=' '>
      <nav>
        <ul>
            <div className='group'>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                <li><NavLink to='/blog'>Blogs</NavLink></li>
                <li><NavLink to='/project'>Projects</NavLink></li>
            </div>
            <div className='auth'>
                <li><NavLink to='/users'>Users</NavLink></li>
            </div>
            {/* <li><Link to='/my-tasks'>My Tasks</Link></li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
