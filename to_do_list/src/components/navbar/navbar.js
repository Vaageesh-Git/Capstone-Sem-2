import React from 'react'
import { useNavigate } from 'react-router-dom';

import "./nav.css"
function Navbar() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };
  const goToRegister = () => {
    navigate('/register');
  };

  return (
    
    <nav className='navbar'>
        <h2 style={{color:"#f39c12"}}>To Do List</h2>
        <div className='nav-buttons'>
            <button onClick={goToLogin}>Login</button>
            <button onClick={goToRegister}>Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar