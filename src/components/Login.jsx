import React, { useCallback, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Loader from './Loader';
import "./Login.css";

export default function Login() {
  // isLogin tell if the page is the login page or the register page
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, register } = useAuth();
  const [authLoading, setAuthLoading] = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setError('');

    const success = isLogin
      ? await login(username, password)
      : await register(username, password);
    console.log('success :' , success);
    if (!success) {
      setError(isLogin ? 'Login failed' : 'Registration failed');
    }
    setAuthLoading(false);

  }, [isLogin, username, password, login, register, setAuthLoading, error]);

  return (
    <div className="login-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      {error && <div className="error">{error}</div>}
      {authLoading && <Loader />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label='Username field'
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          aria-label='Password field'
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <button className="switch-button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need to register?' : 'Already have an account?'}
      </button>
    </div>
  );
}

