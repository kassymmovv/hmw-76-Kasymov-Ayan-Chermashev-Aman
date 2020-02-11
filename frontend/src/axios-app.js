import axios from 'axios';

const axiosApp = axios.create({
    baseURL: 'http://localhost:8000'
});

export default axiosApp;