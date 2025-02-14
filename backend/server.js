// ~ Dependency import
import express from 'express';

const app = express();

// ~ Dependency import
import morgan from 'morgan';

// ~ All Routes Modules Import
import authenticationRoute from './routes/authenticationRoutes.js';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import likeRoutes from './routes/likeRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import { error, success } from './logger.js';
import { dbConnect } from './DB/connectDB.js';

dbConnect.connect();
// & Middle Ware
app.use(express.json());

// & morgan middleware
app.use(
  morgan(
    ':date[web] :method :url :status :res[content-length] - :response-time ms'
  )
);

// $ Default API For All Routes
app.use('/api/auth', authenticationRoute);
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/like', likeRoutes);
app.use('/api/comment', commentRoutes);

// $ Default API
app.get('/', (req, res) => res.send('Hello World!'));

// $ PORT
const port = process.env.PORT || 3100;

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
