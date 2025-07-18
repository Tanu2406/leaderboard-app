import { useEffect, useState } from "react";
import api from "../api";
import UserCard from "../components/UserCard";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users").then(res => setUsers(res.data));
  }, []);

  return (
    <div className="fixed top-10  w-full ">

    
      <div className=" w-auto p-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      
        {users.map(user => <UserCard key={user._id} user={user} />)}
      </div>
    </div>
  );
};

export default Home;
