import axios from 'axios';
import { getToken } from './helpers';

const api = (AUTH_TOKEN = '', BASE_URL) => {
  const instance = axios.create({
    baseURL: BASE_URL || '',
  });

  // Adds interceptors to every request
  instance.interceptors.request.use((config) => {
    config.headers['x-access-token'] = AUTH_TOKEN;
    return config;
  }, error => Promise.reject(error));

// Add a response interceptor
  axios.interceptors.response.use(response => response);

  return instance;
};

export default api(getToken() || '');
