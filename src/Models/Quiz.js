import { Schema, model } from 'mongoose';
import { setDate } from '../Functions/GlobalFunctions';

const QuizItemSchema = new Schema(
  {
    question: { type: String, require: true },
    values: { type: [String], require: true },
    answer: { type: Number, require: true },
  },
  { id: false }
);

const QuizSchema = new Schema(
  {
    userid: { type: String, require: true },
    title: { type: String, require: true },
    description: { type: String, default: null },
    questions: { type: [QuizItemSchema], require: true },
    totalQuestions: { type: Number, default: 0 },
    createAt: { type: Number, default: setDate },
    updateAt: { type: Number, default: setDate, set: setDate },
  },
  { id: false }
);

QuizSchema.set('toJSON', { getters: true });
QuizItemSchema.set('toJSON', { getters: true });

const Quiz = model('quiz', QuizSchema);

export default Quiz;
