import mysql from 'mysql2';

import dotenv from 'dotenv';
dotenv.config();
import { error, success } from '../logger.js';

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // Optional:
  connectionLimit: 10, // Adjust as needed
};

export const dbConnect = mysql.createConnection(dbConfig);
