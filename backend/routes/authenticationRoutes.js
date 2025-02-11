import express from 'express';

// ~ All Controllers Actions
import { authTestController } from '../controllers/authControllers.js';

const authenticationRoute = express.Router();

// % Test Route
authenticationRoute.get('/test', authTestController);

export default authenticationRoute;
