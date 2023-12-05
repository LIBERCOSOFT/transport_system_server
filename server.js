import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import deliveriesRoutes from './routes/deliveriesRoutes.js';
import plannerRoutes from './routes/plannerRoutes.js';

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/delivery', deliveriesRoutes);
app.use('/api/planner', plannerRoutes);

app.get('/', (req, res) => {
  res.send('API is running....');
});

const PORT = process.env.PORT || 5050;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`),
);
