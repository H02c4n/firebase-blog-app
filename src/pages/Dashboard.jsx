import React from 'react'
import { useSelector } from 'react-redux'
const Dashboard = () => {

  const {currentUser} = useSelector((state)=> state.authReducer);


  return (
    <div>
      Dashboard   {currentUser}
    </div>
  )
}

export default Dashboard