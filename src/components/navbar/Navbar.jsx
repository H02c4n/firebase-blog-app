import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useAuthCalls from '../../hooks/useAuthCalls'

const Navbar = () => {

  const {currentUser, displayName} = useSelector((state) =>state.authReducer);
  const {logout} = useAuthCalls();
  return (<>
   <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid d-flex justify-content-between">
          <Link className="navbar-brand" to="/">{displayName ? displayName : "H02c4n"}</Link>{currentUser.email}
            
         <div className='d-flex'>
          {currentUser ? (<Link className="nav-link me-3" to="/new-blog">Add New</Link>):""}
      
         <Link className="nav-link me-3" to="/profile">Profile</Link>
         {currentUser ? (<Link onClick={() => logout()} className="nav-link" to="/">Logout</Link>):(<Link className="nav-link" to="/login">Login</Link>)}
         </div>
        </div>
      </nav>
  </>
    
  )
}

export default Navbar