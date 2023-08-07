import axios from 'axios';
import { github } from '../config/config';

const api = axios.create({
    baseURL: github.url
});

export default api;