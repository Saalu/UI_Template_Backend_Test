import React,{useState}from 'react'
import { Link } from 'react-router-dom'
import Delete from '../crud/Delete'
import Edit from '../crud/Edit'

const Table = ({data}) => {
  const [open, setOpen] = useState(false)
  const [showEdit, setShowEdit] = useState(false)

  const onDelete = () => {

  }


  return (
    <div>
      {open && <Delete open={open} setOpen={setOpen}/> }
      {showEdit && <Edit showEdit={showEdit} setShowEdit={setShowEdit}/> }



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
                  <td onClick={()=>setShowEdit(!showEdit)} className='edit'>Edit</td>
                  <td onClick={()=>setOpen(!open)} className='delete'>Delete</td>
                  {/* <td className='delete'><Link to='/project'>Delete</Link></td> */}
                </tr>
                </tr>
              ))}
          </tbody>
      </table>
    </div>
  )
}

export default Table
