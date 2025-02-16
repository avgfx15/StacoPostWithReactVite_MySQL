import express from 'express';

// ~ All Controllers Actions
import {
  authTestController,
  signInController,
  signOutController,
  signUpController,
} from '../controllers/authControllers.js';

const authenticationRoute = express.Router();

// % Test Route
authenticationRoute.get('/test', authTestController);

// % SignIn Route
authenticationRoute.post('/signin', signInController);

// % Sign Up Route
authenticationRoute.post('/signup', signUpController);

// % Sign Out Route
authenticationRoute.post('/signout', signOutController);

export default authenticationRoute;
