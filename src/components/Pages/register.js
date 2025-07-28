import React, { useState } from 'react';
import "./register.css";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      alert("User already exists. Please choose a different username.");
      return;
    }

    localStorage.setItem(username, JSON.stringify({ password }));
    alert("Registration successful! You can now log in.");
    navigate('/login');
  };

  return (
    <div className='register-main'>
      <h1 style={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: "9px"
      }}>
        Sign Up..
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
        <button onClick={handleRegister}>Submit</button>
      </div>
    </div>
  );
};

export default Register;
