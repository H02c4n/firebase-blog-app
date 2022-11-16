import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (<>
   <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid d-flex justify-content-between">
          <Link className="navbar-brand" to="/">H02c4n</Link>
            
         <div className='d-flex'>
         <Link className="nav-link me-3" to="/profile">Profile</Link>
          <Link className="nav-link" to="/login">Login</Link>
         </div>
        </div>
      </nav>
  </>
    
  )
}

export default Navbar