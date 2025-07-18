import History from '../models/History.js';
import User from '../models/User.js';

export const claimPoints = async (req, res) => {
  const { userId } = req.params;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.totalPoints += points;
  await user.save();

  const history = await History.create({ userId, pointsClaimed: points });

  res.json({ user, points, history });
};

