import axios from 'axios';


// const BASE_URL = 'https://localhost:7260/'
const PYTHON_URL = 'https://bxpy.azurewebsites.net/'
const BASE_URL = 'https://bx-server.azurewebsites.net'

export default axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});
export const axiosProtected = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});
export const pythonAxios = axios.create({
    baseURL: PYTHON_URL,
    headers: { 'Content-Type': 'application/json' }
});