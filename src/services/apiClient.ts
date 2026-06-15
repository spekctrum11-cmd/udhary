import axios from 'axios';
import { API_BASE_URL } from './apiConfig';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Bind token standardly if running on the client
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    // Auto-detect header:
    // If the data is FormData (multipart data), Axios will automatically let the browser set the Content-Type with boundaries.
    // If it's a regular object, we explicitly declare it as application/json.
    if (config.data && !(config.data instanceof FormData)) {
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Standardize error message parsing across services
    let errorMessage = 'An unexpected error occurred';
    
    if (error.response) {
      // Server responded with a code out of the 2xx range
      errorMessage = error.response.data?.error || error.response.data?.message || errorMessage;
    } else if (error.request) {
      // Request was made but no response was received
      errorMessage = 'No response received from server. Please check your network connection.';
    } else {
      // Something happened in setting up the request
      errorMessage = error.message;
    }

    return Promise.reject(new Error(errorMessage));
  }
);

export default apiClient;
