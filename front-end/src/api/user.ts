import axios from "axios";

const USERS_API_URL = "http://localhost:5000/users";
const USER_LOGIN_API_URL = "http://localhost:5000/user/login";

export const createUser = async (user: any): Promise<any> => {
  const response = await axios.post(USERS_API_URL, user);
  return response.data.data;
};

export const fetchUser = async (): Promise<any> => {
  const response = await axios.get(USERS_API_URL);
  return response.data.data;
};

export const loginUser = async (user: any): Promise<any> => {
  const response = await axios.post(USER_LOGIN_API_URL, user);
  return response.data.data;
};
