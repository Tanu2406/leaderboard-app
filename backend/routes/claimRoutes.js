import express from 'express';
import { claimPoints } from '../controllers/claimController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/:userId', protect, claimPoints);

export default router;
