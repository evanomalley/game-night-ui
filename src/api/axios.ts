import axios from 'axios';
import { BASE_URL } from './enpoints.json';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/JSON', "Cache-Control": "no-cache"},
    withCredentials: true
});

