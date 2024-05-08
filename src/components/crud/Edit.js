import React,{useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';


const Edit = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        fullname: '' ,
        position: '',
        dept: '',
        salary: ''
    })

    const onSubmit = (e) =>{
        e.preventDefault()


        navigate('/dashboard')

    }

    useEffect(() =>{

        // setData({
        //     fullname: fullname ,
        //     position: position,
        //     dept: dept,
        //     salary: salary
        // })


    },[])

  return (
   
    <div className='auth-container'>
      <form onSubmit={onSubmit} className='' style={{width:'50rem'}}>
            <h3>Update Employee Info</h3>
            <span>Fullname</span>
            <input  type=' ' placeholder='Joe Doe' />
            <span>Position</span>
            <input  type=' ' placeholder='Field Engineer' />
            <span>Department</span>
            <input  type=' ' placeholder='Managed Service' />
            <span>Salary</span>
            <input  type=' ' placeholder='20000' />
            <input  type='submit' style={{background:'#25D366'}} className='btn' value='Save' placeholder='' />
      </form>
    </div>
  )
}

export default Edit
