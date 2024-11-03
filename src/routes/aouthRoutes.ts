// src/routes/authRoutes.ts
import express from 'express';
import { registerUser, loginUser } from '../controllers/authController';

const router = express.Router();

router.post('/register', registerUser);

// נתיב לכניסת משתמש
router.post('/login', loginUser);

export default router;
