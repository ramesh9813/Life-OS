import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/signup.css'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [sex, setSex] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle form submission, like sending data to a server
    console.log({ email, fullName, address, sex, dob });
  };

  return (
    <div class="signup-container">
    <h3>Sign Up</h3>
    <form onSubmit={handleSubmit}>
        <label>
            Gmail:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
            Full Name:
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </label>
         
        <br />
        <label>
            Sex:
            <select value={sex} onChange={(e) => setSex(e.target.value)} required>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </label>
        <br />
        <label>
            Date of Birth:
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
        </label>
        <br />
        <p>I have an account <Link to="/login">Login</Link></p>
        <button type="submit">Sign Up</button>
    </form>
</div>
  );
};

export default SignUp;
