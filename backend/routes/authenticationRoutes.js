import express from 'express';

// ~ All Controllers Actions
import {
  authTestController,
  signInController,
  signUpController,
} from '../controllers/authControllers.js';

const authenticationRoute = express.Router();

// % Test Route
authenticationRoute.get('/test', authTestController);

// % SignIn Route
authenticationRoute.post('/signin', signInController);

// % Sign Up Route
authenticationRoute.post('/signup', signUpController);

export default authenticationRoute;
