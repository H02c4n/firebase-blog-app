import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


const PrivateRouter = () => {
    const {currentUser} = useSelector((state) => state.authReducer);

    return  currentUser ? <Outlet/> : <Navigate to="/login" />
}

export default PrivateRouter