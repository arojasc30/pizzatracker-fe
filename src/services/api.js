import axios from 'axios';

// Create Axios instance with base URL
const api = axios.create({
  baseURL: 'http://127.0.0.1:9292/',
});

// Define API methods
const API = {
  get: (url) => api.get(url),
  post: (url, data) => api.post(url, data),
  put: (url, data) => api.put(url, data),
  delete: (url) => api.delete(url),
};

export default API;
