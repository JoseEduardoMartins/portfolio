import axios from 'axios';
import { github } from '../config';

const http = axios.create({
    'baseURL': github.api,
    'headers': {
        'Content-Type': 'application/json'
    }
});

export default http;