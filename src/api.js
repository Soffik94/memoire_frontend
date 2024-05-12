import axios from 'axios';

const API_URL = 'http://localhost:3001/';

export function loginUser(email, password) {
  return axios.post(`${API_URL}users/login`, { email, password });
}