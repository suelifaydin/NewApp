import axios from 'axios';

const api = axios.create({
  baseURL: 'https://testapp.com', // ✅ BASE URL BURAYA
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
