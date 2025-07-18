import axios from "axios";

const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: "https://leaderboard-app-backend-w5hq.onrender.com/api",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default api;
