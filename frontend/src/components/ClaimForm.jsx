import { useState, useEffect } from "react";
import api from "../api";

const ClaimForm = () => {
  const [users, setUsers] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [message, setMessage] = useState("");

  const fetchUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  const claimPoints = async () => {
    if (!selectedId) return;
    const res = await api.post(`/claim/${selectedId}`);
    setMessage(`You claimed ${res.data.pointsClaimed} points!`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4 flex justify-center items-center">
      <select
        className="p-2 border rounded mr-4"
        onChange={(e) => setSelectedId(e.target.value)}
      >
        <option value="">Select a user</option>
        {users.map((u) => (
          <option key={u._id} value={u._id}>{u.name}</option>
        ))}
      </select>
      <button className="!bg-green-600 text-white px-4 py-2  rounded" onClick={claimPoints}>Claim Points</button>
      {message && <p className="mt-4 ml-5  text-green-600">{message}</p>}
    </div>
  );
};

export default ClaimForm;
