import axios from "axios";

const axiosBase = axios.create({
  baseURL: "http://localhost:5550/api",
});

export default axiosBase;
