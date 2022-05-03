import { Schema, model } from 'mongoose';
import { setDate } from '../Functions/GlobalFunctions';

const QuizAnswerSchema = new Schema(
  {
    _id: { type: String, require: true },
    answer: { type: Number, require: true },
  },
  { _id: false, id: false }
);

const QuizHistoricalSchema = new Schema(
  {
    quizId: { type: String, require: true },
    userid: { type: String, default: null },
    approved: { type: Boolean, default: false },
    correctAnswers: { type: Number, default: 0 },
    incorrectAnswers: { type: Number, default: 0 },
    answers: { type: [QuizAnswerSchema], require: true },
    createdAt: { type: Number, default: setDate },
  },
  { id: false }
);

QuizHistoricalSchema.set('toJSON', { getters: true });

const QuizHistorical = model('quiz_historical', QuizHistoricalSchema);

export default QuizHistorical;
