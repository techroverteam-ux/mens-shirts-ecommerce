import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './models/User';
import usersRouter from './routes/users';

dotenv.config({ path: './backend.env' });

const app = express();
const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('✅ Atlas Mongo Connected'))
  .catch(err => console.error('Mongo Error:', err));

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'VCHUKI Men&#39;s Shirts E-Commerce API',
      version: '1.0.0',
      description: 'Full-stack platform for seasonal shirts'
    },
  },
  apis: ['./src/**/*.ts']
};
const specs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token
 */
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !await (user as any).comparePassword(password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!);
    res.json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register
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
 *     responses:
 *       201:
 *         description: User created
 */
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, role = 'customer' } = req.body;
    const hashed = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashed, role });
    await user.save();
    const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET!);
    res.status(201).json({ token, role });
  } catch (err) {
    res.status(400).json({ error: 'User exists' });
  }
});

app.use('/api/users', usersRouter);

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: List products
 *   post:
 *     summary: Add product
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 */
app.route('/api/products')
  .get((req, res) => res.json({ products: [], message: 'From Atlas DB' }))
  .post((req, res) => res.json({ saved: req.body }));

app.listen(PORT, () => {
  console.log(`VCHUKI Backend: http://localhost:${PORT}`);
  console.log(`Swagger: http://localhost:${PORT}/api-docs`);
  console.log('Atlas URI loaded');
});
