import React from 'react'
import Table from './reuserble/Table';

const Project = () => {


  const data = [
    { id: 1, name: 'Saalu Issaka',position:'Snr. Developer',dept:'IT', salary: 6000 },
    { id: 2, name: 'Rose Lawson',position:'HR Assistant',dept:'HR', salary: 6000 },
    { id: 3, name: 'Kingsley Ayeh',position:'Accountant',dept:'Finance', salary: 6000 },
    { id: 4, name: 'George Tetteh',position:'Pro. Manager',dept:'Project', salary: 6000 },
    { id: 5, name: 'Rasford Quay',position:'PS. Manage',dept:'Supply Chain', salary: 6000 },
   
  ];

  return (
    <div>
        <Table  data={data}/>
    </div>
  )
}

export default Project
