import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.137.37:3333/',
  timeout: 5000,
});

export default api;
