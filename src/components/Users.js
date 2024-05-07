import React from 'react'

const Users = () => {


  const tableData = [
    { id: 1, name: 'Saalu Issaka',email:'saalu@gmail.com',password:'2323r' },
    { id: 2, name: 'John Doe',email:'doe@gmail.com',password:'214242' },
    { id: 3, name: 'George Lawson',email:'george@gmail.com',password:'er3432' },
    { id: 4, name: 'Rasford Qhay',email:'Rasford@gmail.com',password:'234fdtq423' },
    { id: 5, name: 'Rose Lawson',email:'rose@example.com',password:'1233' },
    
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
            
          </tr>
        </thead>
        <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                
               <tr className='actions'>
                <td className='edit'>EDIT</td>
                <td className='delete'>REMOVE</td>
               </tr>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users
