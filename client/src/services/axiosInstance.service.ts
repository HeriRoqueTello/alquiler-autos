import axios from 'axios';

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL: url,
  timeout: 10000,
});

export default axiosInstance;

