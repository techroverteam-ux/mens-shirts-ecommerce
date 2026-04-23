/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: SuperAdmin - Create admin
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [admin]
 */
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    if (decoded.role !== 'superadmin') return res.status(403).json({ error: 'Superadmin only' });
    
    const { email, password, role = 'admin' } = req.body;
    const hashed = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashed, role });
    await user.save();
    res.json({ message: 'Admin created', user });
  } catch (err) {
    res.status(400).json({ error: 'Invalid request' });
  }
});

export default router;
