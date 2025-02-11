import express from 'express';
import { likeTestController } from '../controllers/likeControllers';

const likeRoutes = express.Router();

likeRoutes.get('/test', likeTestController);

export default likeRoutes;
