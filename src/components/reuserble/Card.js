import React from 'react'

const Card = ({item:{tittle, number,colour}}) => {
  return (
    <div className='card'>
      <h3 style={{color:{colour}}}>{tittle}</h3>
      {/* <h3>Pending Tasks</h3>
      <span>161/300</span> */}
      <span>{number}</span>
    </div>
  )
}

export default Card
