// src/Api.js
import axios from 'axios';

/**
 * Axios API Instance
 * 
 * This module creates and exports a pre-configured instance of Axios for making HTTP requests 
 * to the backend API. It is configured with a base URL and default headers for content-type.
 * You can use this instance to make requests to the API endpoints, simplifying the process 
 * of integrating with the backend.
 * 
 * @module Api
 * @example
 * import api from './Api';
 * 
 * // Example usage for making a GET request
 * api.get('/endpoint')
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * 
 * @returns {object} The configured axios instance for making API requests.
 */

// Create an instance of axios
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Base URL of your API
  headers: {
    'Content-Type': 'application/json', // Set the content type to JSON
  },
});

// Optional: Add an interceptor to handle errors globally (if needed)
api.interceptors.response.use(
  (response) => response, // If response is successful, return it
  (error) => {
    // Handle global errors here if needed
    return Promise.reject(error); // Reject promise if error occurs
  }
);

export default api;
