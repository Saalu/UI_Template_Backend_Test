import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './Users';
import Home from './Home';
import Dashboard from './Dashboard';
import Project from './Project';
import Blog from './Blog';
import Register from './auth/Register';
import Login from './auth/Login';
import Edit from './crud/Edit';
import Create from './crud/Create';
import Delete from './crud/Delete';


const Layout = () => {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/project" element={<Project />} />
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/create" element={<Create />} />
      <Route path="/delete" element={<Delete />} />
    </Routes>
//   </Router>
  )
}

export default Layout
