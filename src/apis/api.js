import axios from 'axios'
import { config } from './Constants'

const instance = axios.create({
  baseURL: config.API_URL
})

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
})


export default instance
