import axios from 'axios';


const BASE_URL = 'https://localhost:7260'
export default axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});

export const axiosProtected = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});