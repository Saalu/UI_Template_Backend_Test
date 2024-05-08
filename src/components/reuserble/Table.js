import React from 'react'
import { Link } from 'react-router-dom'

const Table = ({data}) => {
  return (
    <div>
          <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Dept.</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.position}</td>
                <td>{item.dept}</td>
                <td>{item.salary}</td>
               <tr className='actions'>
                <td className='edit'><Link to='/edit'>Edit</Link></td>
                <td className='delete'><Link to='/delete'>Delete</Link></td>
               </tr>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
