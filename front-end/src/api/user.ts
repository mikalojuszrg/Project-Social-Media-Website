import axios from "axios";
import { User, UserLogin, UserRegister } from "../types/user";

const USERS_API_URL = "http://localhost:5000/users";
const USER_LOGIN_API_URL = "http://localhost:5000/user/login";

export const createUser = async (user: UserRegister): Promise<User> => {
  const response = await axios.post(USERS_API_URL, user);
  return response.data.data;
};

export const fetchUser = async (): Promise<User> => {
  const response = await axios.get(USERS_API_URL);
  return response.data;
};

export const loginUser = async (user: UserLogin): Promise<User> => {
  const response = await axios.post(USER_LOGIN_API_URL, user);
  console.log(response.data);
  return response.data;
};
