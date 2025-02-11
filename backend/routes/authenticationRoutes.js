import express from 'express';
import { authTestController } from '../controllers/authControllers.js';

const authenticationRoute = express.Router();

authenticationRoute.get('/test', authTestController);

export default authenticationRoute;
