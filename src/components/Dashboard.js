import React,{useEffect, useState} from 'react'
import Card from './reuserble/Card'
import Project from './Project'

const Dashboard = () => {
  const [item, setItem] = useState({
    tittle:'Completed',
    number:'37/300'
  })

  useEffect(( ) =>{
      setItem()
  },[item])


  const items = [
     {id:1,tittle: 'Pending Tasks', number: '167/300', colour:'red'},
     {id:2,tittle: 'In Progress Tasks', number: '103/300', colour:'blue'},
     {id:3,tittle: 'Completed Tasks', number: '67/300' , colour:'green'},
  ]

  return (
    <div className='dashboard'>
     <div className='card-container'>
       {
         items.map((item =>(
          <Card item={item}/>

        )))
       }
     </div>
      <Project/>
    </div>
  )
}

export default Dashboard
