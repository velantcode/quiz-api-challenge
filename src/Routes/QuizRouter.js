import express from 'express';
import { validateToken } from '../middleware';
import { deleteQuiz, getHistoricalQuiz, getQuiz, saveQuiz, showQuiz, updateQuiz } from '../Controllers/QuizController';

const QuizzesRouter = express.Router();

// ===================================================================================

QuizzesRouter.route('/').get(validateToken, getQuiz).post(validateToken, saveQuiz);

QuizzesRouter.get('/historical', validateToken, getHistoricalQuiz);

QuizzesRouter.route('/:_id')
  .delete(validateToken, deleteQuiz)
  .get(validateToken, showQuiz)
  .put(validateToken, updateQuiz);

// ===================================================================================

export default QuizzesRouter;
