import axios from "axios";

const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default api;
