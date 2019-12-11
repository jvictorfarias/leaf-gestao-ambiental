import axios from 'axios';
import connection from '../config/connection';


const api = axios.createConnection({
  appURL=connection.API_URL;
})

export default api;
