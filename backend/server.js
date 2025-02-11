// ~ Dependency import
import express from 'express';

const app = express();

// ~ All Routes Modules Import
import authenticationRoute from './routes/authenticationRoutes.js';

// $ API Middleware
app.use('/api/auth', authenticationRoute);

// $ Default API
app.get('/', (req, res) => res.send('Hello World!'));

// $ PORT
const port = process.env.PORT || 3100;

app.listen(port, () => console.log(`StacoPost app listening on port ${port}!`));
