import axios from 'axios';
const BASE_URL = 'https://638b276581df38ab3462ad13.mockapi.io';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});