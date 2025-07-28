import React, { useState } from 'react';
import "./login.css";
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = localStorage.getItem(username);

    if (!storedUser) {
      alert("User not found. Please register.");
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    if (parsedUser.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", username);

      setIsLoggedIn(true);

      alert("Login successful!");
      navigate('/home');
    } else {
      alert("Incorrect password.");
    }
  };

  return (
    <div className='login-main'>
      <h1 style={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: "9px"
      }}>
        Login..
      </h1>
      <div className='input-fields'>
        <input
          type='text'
          placeholder='Enter Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
