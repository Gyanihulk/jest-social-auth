import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = (email: string, password: string) => {
  return apiClient.post('/login', { email, password });
};

export const register = (email: string, password: string) => {
  return apiClient.post('/register', { email, password });
};

export const getUsers = () => {
  return apiClient.get('/users');
};
