import axios from "axios";

const http = axios.create({
  baseURL: "https://api.github.com", 
  timeout: 10000, 
  headers: {
    Accept: "application/json", 
  },
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Tangani error response
    if (error.response) {
      console.error(`HTTP Error: ${error.response.status} - ${error.response.data?.message || error.message}`);
    } else {
      console.error(`Network Error: ${error.message}`);
    }
    return Promise.reject(error);
  }
);

export default http;
