import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/forgetpassword.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Here you can add your logic to handle password reset
    // For simplicity, let's just display an alert
    alert('Password reset instructions sent to your email.');
    setEmail(''); // Clear the email field after resetting
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>Please enter your email address below. We will send you instructions to reset your password.</p>
      <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
      />
      <br />
      <button onClick={handleResetPassword}>Reset Password</button>
      <br />
      <p>Remember your password? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default ForgotPassword;
