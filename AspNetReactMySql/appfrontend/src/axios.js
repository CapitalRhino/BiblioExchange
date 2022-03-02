import axios from 'axios';

export default axios.create({
    baseURL: 'https://localhost:7260',
    headers: { 'Content-Type': 'application/json' }
});