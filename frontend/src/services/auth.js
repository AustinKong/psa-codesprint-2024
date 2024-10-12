import axios from 'axios';
const BASE_URL = '/api/auth';

const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return {
      data: response.data,
      success: true,
    };
    // TODO: Save user data in a redux store
  } catch (error) {
    return {
      data: error.response.data,
      success: false,
    };
  }
};

const signup = async (username, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, { username, email, password });
    return {
      data: response.data,
      success: true,
    };
    // TODO: Save user data in a redux store
  } catch (error) {
    return {
      data: error.response.data,
      success: true,
    };
  }
};

export default { login, signup };
