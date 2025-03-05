import { apiRequest } from './apiService';

export async function login(username, password) {
  try {
    const response = await apiRequest('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });
    if (response && response.token) {
      localStorage.setItem('user', JSON.stringify(response));
    }
    return response;
  } catch (error) {
    console.error('Login failed :', error.message)
    throw new Error(error.message || 'Login failed');
  }
};

export async function register(username, password) {
  try {
    const response = await apiRequest('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({username, password})
    });
    return response;
  } catch (error){
    throw new Error(error.message || 'Register failed');
  }
};
