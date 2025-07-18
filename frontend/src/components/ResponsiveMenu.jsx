import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../authContext";

const ResponsiveMenu = ({isOpen}) => {
     const { user, logout } = useAuth();
     const navigate = useNavigate();
  return (
    <>
   
       <div className="lg:hidden items-center space-x-8 mr-30 cursor-pointer">
        <Link to="/">Home</Link>
        <Link to="/leaderboard">Ranking</Link>
        <Link to="/history">History</Link>
        <Link to="/claim">Claim</Link>
        <Link to="/winner">Winner</Link>
        {!user ? (
          <>
            <Link to="/signup" className="bg-blue-100 rounded-full pt-3 pb-3 pl-4 pr-4">Signup</Link>
            <Link to="/login" className="bg-blue-100 rounded-full pt-3 pb-3 pl-4 pr-4">Login</Link>
          </>
        ) : (
          <button onClick={() => {
            logout();
            navigate("/login");
          }}>Logout</button>
        )}
      </div>
          
    </>
  )
}

export default ResponsiveMenu
