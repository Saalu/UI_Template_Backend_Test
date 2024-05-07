import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './Users';
import Home from './Home';
import Dashboard from './Dashboard';
import Project from './Project';
import Blog from './Blog';


const Layout = () => {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/project" element={<Project />} />
      <Route path="/users" element={<Users />} />
    </Routes>
//   </Router>
  )
}

export default Layout
