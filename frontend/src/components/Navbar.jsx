import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../authContext";
import { MdMenu } from "react-icons/md";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleReload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 0); 
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black px-6 py-4 flex justify-between items-center shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center ml-10">
          <Link to="/" className="font-bold lg:text-3xl">🏆 Leaderboard</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 mr-30 cursor-pointer">
          <Link to="/" onClick={handleReload}>Home</Link>
          <Link to="/leaderboard" onClick={handleReload}>Ranking</Link>
          <Link to="/claim" onClick={handleReload}>Claim</Link>
          <Link to="/winner" onClick={handleReload}>Winner</Link>
          {!user ? (
            <>
              <Link to="/signup" onClick={handleReload} className="bg-blue-100 rounded-full py-2 px-4">Signup</Link>
              <Link to="/login" onClick={handleReload} className="bg-blue-100 rounded-full py-2 px-4">Login</Link>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => {
                logout();
                handleReload();
              }}
              className="bg-red-100 rounded-full py-2 px-4"
            >
              Logout
            </Link>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <MdMenu className="text-4xl" />
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-14 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center justify-center z-50">
            <div className="space-y-4 text-center w-full">
              <Link to="/" onClick={handleReload} className="block w-full">Home</Link>
              <Link to="/leaderboard" onClick={handleReload} className="block w-full">Ranking</Link>
              <Link to="/claim" onClick={handleReload} className="block w-full">Claim</Link>
              <Link to="/winner" onClick={handleReload} className="block w-full">Winner</Link>
              {!user ? (
                <>
                  <Link to="/signup" onClick={handleReload} className="block w-full bg-blue-100 rounded-full py-3 px-4">Signup</Link>
                  <Link to="/login" onClick={handleReload} className="block w-full bg-blue-100 rounded-full py-3 px-4">Login</Link>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => {
                    logout();
                    handleReload();
                  }}
                  className="block w-full bg-red-100 rounded-full py-3 px-4"
                >
                  Logout
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
