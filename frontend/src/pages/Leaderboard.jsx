import { useEffect, useState } from "react";
import api from "../api";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users").then(res => setUsers(res.data));
  }, []);

  return (
     <div className=" fixed top-30 lg:left-20 lg:right-20 ">
      <table className="lg:w-[80%] bg-blue-50 table-auto border-collapse fixed top-40 lg:left-40 left-30 pb-10 ">
        <thead>
          <tr>
            <th className="border px-4 py-2 ">Rank</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={u._id}>
              <td className="border px-4 py-2">{i + 1}</td>
              <td className="border px-4 py-2">{u.name}</td>
              <td className="border px-4 py-2">{u.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default Leaderboard; 