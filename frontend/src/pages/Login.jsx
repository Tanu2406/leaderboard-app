import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../authContext";
import api from "../api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    login(res.data.token);
    navigate("/");
  };

  return (
      <div className="fixed inset-0 flex justify-center items-center ">
        <div className=" m-4 w-full max-w-md  border border-blue-500 rounded-2xl p-20">
      
          <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow rounded mt-10">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <input className="w-full border p-2 mb-4" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input className="w-full border p-2 mb-4" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button className="!bg-blue-600 text-white px-4 py-2 rounded">Login</button>
          </form>
        </div>
      </div>
  );
};

export default Login;
