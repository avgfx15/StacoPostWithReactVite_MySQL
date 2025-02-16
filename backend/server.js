// ~ Dependency import
import express from 'express';

const app = express();

// ~ cors Dependency import
import cors from 'cors';

// ~ cookie-parser Dependency import
import cookieParser from 'cookie-parser';

// ~ morgan Dependency import
import morgan from 'morgan';

// ~ ditenv Dependency import
import dotenv from 'dotenv';

dotenv.config();

// ~ All Routes Modules Import
import authenticationRoute from './routes/authenticationRoutes.js';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import likeRoutes from './routes/likeRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import { error, success } from './logger.js';
import { dbConnect } from './DB/connectDB.js';
import { errorHandlerMiddleware } from './middleware/errorHandler.js';

dbConnect.connect();
// & Middle Ware

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', true);
  next();
});

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(cookieParser());

// & morgan middleware
app.use(
  morgan(
    ':date[web] :method :url :status :res[content-length] - :response-time ms'
  )
);

// $ Default API For All Routes
app.use('/api/v1/auth', authenticationRoute);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/like', likeRoutes);
app.use('/api/v1/comment', commentRoutes);

// ! Error Handler
app.use(errorHandlerMiddleware);

// $ Default API
app.get('/', (req, res) => res.send('Hello World!'));

// $ PORT
const port = process.env.PORT || 3150;

app.listen(port, (err) => {
  if (err) error('Error Starting Server');
  else {
    dbConnect.connect((err, connection) => {
      if (err) error('Error Connecting to Database');
      else
        success(
          `StacoPost app listening on port ${port}!\n \nConnected to Database`
        );
    });
  }
});
