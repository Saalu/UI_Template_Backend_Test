import React from 'react'

const Project = () => {


  const tableData = [
    { id: 1, name: 'Saalu Issaka',position:'Snr. Developer',dept:'IT', salary: 6000 },
    { id: 2, name: 'Rose Lawson',position:'HR Assistant',dept:'HR', salary: 6000 },
    { id: 3, name: 'Kingsley Ayeh',position:'Accountant',dept:'Finance', salary: 6000 },
    { id: 4, name: 'George Tetteh',position:'Pro. Manager',dept:'Project', salary: 6000 },
    { id: 5, name: 'Rasford Quay',position:'PS. Manage',dept:'Supply Chain', salary: 6000 },
   
  ];

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
            {tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.position}</td>
                <td>{item.dept}</td>
                <td>{item.salary}</td>
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

export default Project
