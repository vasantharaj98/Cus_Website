import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const getCategory = () => {
  return axios.get(API_URL + "animal/category", { headers: authHeader() });
};


const userService = {
  getCategory,
};

export default userService