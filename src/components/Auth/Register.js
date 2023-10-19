// Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '', password: '' });

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/auth/register', userInfo);
      // Handle successful registration (redirect, show success message, etc.)
    } catch (error) {
      // Handle registration error
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={userInfo.name}
        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={userInfo.email}
        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={userInfo.password}
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
