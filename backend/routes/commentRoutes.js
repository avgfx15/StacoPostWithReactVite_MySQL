import express from 'express';

// ~ All Controllers Actions
import { commentTestController } from '../controllers/commentControllers.js';

const commentRoutes = express.Router();

// % Test Route
commentRoutes.get('/test', commentTestController);

export default commentRoutes;
