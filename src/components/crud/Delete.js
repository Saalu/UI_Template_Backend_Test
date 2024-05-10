import React,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Delete = ({ open, setOpen}) => {
    const navigate = useNavigate()
  
        const onDelete = () => {
            console.log('Check me out!')
            navigate('/')
  }

  return (
    <div>
      <div className='delete-container'>
        <div className='card'>
            <p className='msg'>Are sure you want to delete?</p>
            <button  onClick={()=> setOpen(!open)}  className='btn cancel'>No</button>
            <button onClick={() =>onDelete()} className='btn del'>Yes</button>
        </div>
      </div>
    
    </div>
  )
}

export default Delete
