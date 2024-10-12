import axios from 'axios';
import { store } from '../data/store';
import { setUser } from '../data/slices/userSlice';
const BASE_URL = '/api/auth';

const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    store.dispatch(setUser(response.data));
    return {
      data: response.data,
      success: true,
    };
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
    store.dispatch(setUser(response.data));
    return {
      data: response.data,
      success: true,
    };
  } catch (error) {
    return {
      data: error.response.data,
      success: true,
    };
  }
};

export default { login, signup };
