const UserCard = ({ user }) => (
  <div className="p-4 border rounded shadow bg-white">
    <h3 className="text-xl font-semibold">{user.name}</h3>
    <p>Total Points: {user.totalPoints}</p>
  </div>
);

export default UserCard;
