import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../style/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Here you can add your logic to authenticate the user
    // For simplicity, let's just check if both username and password are 'admin'
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {loggedIn ? (
         <useNavigate to="/" />
      ) : (
        <div className="login-container">
          <h2>Login</h2>
          <input 
              type="text" 
              placeholder="Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
          />
          <br />
          <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
          />
          <br />
          <button onClick={handleLogin}>Login</button>
          <p>Forgot Password?<Link to="/forgetpassword">Click me</Link></p>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      )}
    </div>
  );
};

export default Login;
