import User from '../models/User.js';

export const getAllUsers = async (req, res) => {
  const users = await User.find()//.sort({ totalPoints: -1 });
  res.json(users);
};
