import axios from 'axios';

export const jsonDb = axios.create({
    baseURL:'http://localhost:4000'
})