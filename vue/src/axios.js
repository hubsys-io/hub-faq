import axios from "axios";
import store from "./store";
import router from "./router";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.response.use(response => {
  return response;
}, error => {
  return error;
})

export default axiosClient;
