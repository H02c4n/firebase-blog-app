import React from 'react'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import Dashboard from "../pages/Dashboard";
import Details from '../pages/Details';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import NewBlog from '../pages/NewBlog';
import Register from '../pages/Register';
import PrivateRouter from "./PrivateRouter";
const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='details' element={<PrivateRouter/> }>
        <Route path='' element={<Details />} />
      </Route>
      <Route path='new-blog' element={<PrivateRouter/> }>
        <Route path='' element={<NewBlog />} />
      </Route>
      <Route path='login' element={<Login/> } />
      <Route path='register' element={<Register /> } />
      <Route path='profile' element={<PrivateRouter/>}>
      <Route path='' element={<Profile/> }/>
      </Route>
    </Routes>
    </Router>
  )
}

export default AppRouter