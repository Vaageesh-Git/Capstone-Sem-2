import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./nav.css";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const goToLogin = () => navigate('/login');
  const goToRegister = () => navigate('/register');
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className='navbar'>
      <h2 style={{ color: "#f39c12" }}>TaskVeda</h2>
      <div className='nav-buttons'>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <button onClick={goToLogin}>Login</button>
            <button onClick={goToRegister}>Sign Up</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
