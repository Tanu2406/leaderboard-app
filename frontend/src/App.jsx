import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Claim from "./pages/Claim";
import Leaderboard from "./pages/Leaderboard";
import Winner from "./pages/Winner";
import { AuthProvider } from "./authContext";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/winner" element={<Winner />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
