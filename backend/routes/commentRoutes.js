import express from 'express';
import { commentTestController } from '../controllers/commentControllers';

const commentRoutes = express.Router();

commentRoutes.get('/test', commentTestController);

export default commentRoutes;
