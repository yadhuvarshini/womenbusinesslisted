import express from 'express';
import {register, login} from '../controllers/authController.js';
import { authMiddleware } from '../middleware/auth.js';
import {getProfile, updateProfile} from '../routes/profile.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateProfile);
// router.get('/profile', getProfile);
// router.put('/profile', updateProfile);
export default router;
