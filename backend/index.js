import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import claimRoutes from './routes/claimRoutes.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

app.use(cors({
  origin: ["https://leaderboard-app-frontend-cyt8.onrender.com"],
  methods: ["GET", "POST"],  
  allowedHeaders: ["Content-Type", "Authorization"],  
  credentials: true
}));
app.use(express.json());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/claim', claimRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
