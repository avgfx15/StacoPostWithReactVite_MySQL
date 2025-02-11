import express from 'express';

// ~ All Controllers Actions
import { likeTestController } from '../controllers/likeControllers.js';

const likeRoutes = express.Router();

// % Test Route
likeRoutes.get('/test', likeTestController);

export default likeRoutes;
