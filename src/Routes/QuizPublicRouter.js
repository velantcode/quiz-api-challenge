import express from 'express';
import { validatePublicToken } from '../middleware';
import { getPublicQuiz, processPublicQuiz, showPublicQuiz } from '../Controllers/QuizPublicController';

const QuizPublicRoute = express.Router();

// ===================================================================================

QuizPublicRoute.get('/', getPublicQuiz);
QuizPublicRoute.route('/:_id').get(validatePublicToken, showPublicQuiz).post(validatePublicToken, processPublicQuiz);

// ===================================================================================

export default QuizPublicRoute;
