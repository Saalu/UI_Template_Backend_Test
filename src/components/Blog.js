import React from 'react'
import Card from './reuserble/Card';

const Blog = () => {

  
  const tableData = [
    { id: 1, img:'logo192.png', name: 'Saalu Issaka',details:'By provide more details or specific code snippets for a more targeted solution.'},
    { id: 1, img:'logo512.png', name: 'Kofi Ansah',details:'By provide more details or specific code snippets for a more targeted solution.'},
    { id: 1, img:'logo192.png', name: 'Selasi Ekom',details:'By provide more details or specific code snippets for a more targeted solution.'},
   
  ];
  return (
    <div className='blog-container'>
      {
        tableData.map((data)=>(
          <div className='blog-card '>
            <div className='img'><img  src={data.img}/></div>
            <h3>{data.name}</h3>
            <p>{data.details}</p>
            <button className='btn'>Read more</button>
          </div>
        ))
      }
    </div>
  )
}

export default Blog
