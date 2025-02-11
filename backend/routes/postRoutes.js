import express from 'express';
import { postTestController } from '../controllers/postControllers';

const postRoutes = express.Router();

postRoutes.get('/test', postTestController);

export default postRoutes;
