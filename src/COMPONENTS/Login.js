import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Registration from './Registration';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'ABDUL' && password === '1234' && userType === 'admin') {
      navigate('/admindashboard/home');
    } else if (username === 'c' && password === 'p' && userType === 'customer') {
      navigate('/register')
      setShowRegistration(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="container">
      {showRegistration ? (
        <Registration handleRegister={handleRegister} />
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
            <a href="#" onClick={(e) => setShowRegistration(true)}>
              Don't have an account? 
            </a>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;