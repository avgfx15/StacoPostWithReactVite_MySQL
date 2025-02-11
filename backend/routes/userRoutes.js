import express from 'express';

// ~ All Controllers Actions
import { userTestController } from '../controllers/userControllers.js';

const userRoutes = express.Router();

// % Test Route
userRoutes.get('/test', userTestController);

export default userRoutes;
