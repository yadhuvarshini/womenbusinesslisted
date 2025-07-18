import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();  

import express from 'express';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';


const app = express();



app.use(cors({
  origin: `https://womenbusinesslisted.vercel.app`, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

app.use(express.json());  
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => {
  console.log('✅ MongoDB connected');
}).catch((err) => {
  console.error('❌ Error connecting to MongoDB:', err.message);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Women Business Listed API'); 
}); 

app.use('/api/', authRoutes);

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`))