import axios from "axios";
const dotenv = require('dotenv');
dotenv.config();

const baseURL = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:8080';

const instanceConfig = {
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
};

const instance = axios.create(instanceConfig);

export default instance;
