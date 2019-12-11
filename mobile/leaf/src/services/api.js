import axios from 'axios';
import connection from '../config/connection';

const api = axios.create({
  baseURL: connection.API_URL,
});

export default api;
