import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import Database from './database';
import IndexRoute from './Routes/IndexRouter';
import QuizRouter from './Routes/QuizRouter';
import QuizPublicRouter from './Routes/QuizPublicRouter';
import UsersRoute from './Routes/UsersRouter';

dotenv.config();

const app = express();

// settings
app.use(cors());
app.set('port', process.env.API_PORT || 9000);
app.set('secretKey', 'n&m#y20oBG09GX*awZuwC&C5Yde^lw4IWQHPz#S0GzgVZ@CSHx');

// middleware
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

// routes
app.use('/api/', IndexRoute);
app.use('/api/quiz', QuizPublicRouter);
app.use('/api/user', UsersRoute);
app.use('/api/user/quiz', QuizRouter);

app.listen(app.get('port'), async () => {
  await Database();
  console.log('================================================');
  console.log(`Server running on port ${app.get('port')}`);
  console.log('================================================');
});
