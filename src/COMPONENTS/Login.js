import React, { useState } from 'react';
import Registration from './Registration';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'ABDUL' && password === '1234' && userType === 'admin') {
      window.location.href = '/admindashboard';
    } else if (username === 'customer' && password === 'password' && userType === 'customer') {
      window.location.href = '/customerdashboard';
    } else {
      alert('Invalid credentials');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setShowRegistration(true);
  };

  return (
    <div className="container">
      {showRegistration? (
        <Registration />
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <label>User Type:</label>
            <select value={userType} onChange={(e) => setUserType(e.target.value)}>
              <option value="">Select User Type</option>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </select>
          </div>
          <button type="submit">Login</button>
          <p>
            <a href="#" onClick={handleRegister}>
              Don't have an account? Register now!
            </a>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;