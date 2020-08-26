import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API,
  withCredentials: true
});

export default customAxios;