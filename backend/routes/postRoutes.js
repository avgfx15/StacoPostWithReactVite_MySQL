import express from 'express';

// ~ All Controllers Actions
import { postTestController } from '../controllers/postControllers.js';

const postRoutes = express.Router();

// % Test Route
postRoutes.get('/test', postTestController);

export default postRoutes;
