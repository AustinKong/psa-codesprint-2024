import axios from 'axios';
const BASE_URL = '/api/auth';

const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const signup = async (username, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, { username, email, password });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default { login, signup };
