// ~ Dependency import
import express from 'express';

const app = express();

// ~ All Routes Modules Import
import authenticationRoute from './routes/authenticationRoutes.js';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import likeRoutes from './routes/likeRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

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

app.listen(port, () => console.log(`StacoPost app listening on port ${port}!`));
