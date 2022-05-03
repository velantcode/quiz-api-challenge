import { quizValidate } from '../FormRequest/QuizRequests';
import { getResponse, getResponseError, returnErrorParams } from '../Functions/GlobalFunctions';
import { checkObjectId } from '../Functions/Validations';
import Quiz from '../Models/Quiz';
import QuizHistorical from '../Models/QuizHistorical';

const path = 'Controllers/QuizController';

export async function getQuiz(req, res) {
  try {
    const { tokenId } = req.body;

    const quiz = await Quiz.find({ userid: tokenId }, { userid: 0, questions: 0, __v: 0 }).exec();

    return res.json({
      msg: 'Listado de quiz.',
      data: quiz,
    });
  } catch (error) {
    return getResponseError(res, error, `${path}/getQuiz`);
  }
}

export async function saveQuiz(req, res) {
  try {
    const { tokenId } = req.body;
    const { data, errors } = quizValidate(req.body);

    if (errors.length > 0) return returnErrorParams(res, errors);

    const quiz = new Quiz(data);
    quiz.userid = tokenId;
    quiz.totalQuestions = quiz.questions.length || 0;
    await quiz.save();

    return res.json({
      msg: 'Se ha agregado el quiz exitosamente.',
      data: quiz,
    });
  } catch (error) {
    return getResponseError(res, error, `${path}/saveQuiz`);
  }
}

export async function showQuiz(req, res) {
  try {
    const { tokenId } = req.body;
    const { _id } = req.params;

    if (!checkObjectId(_id))
      return getResponse(res, {
        status: 422,
        msg: 'Disculpe, pero el Quiz seleccionado es incorrecto.',
      });

    const quiz = await Quiz.findOne({ _id, userid: tokenId }, { userid: 0, __v: 0 }).exec();

    if (!quiz)
      return getResponse(res, {
        status: 404,
        msg: 'Disculpe, pero el Quiz seleccionado no existe o no se encuentra disponible.',
      });

    return res.json({
      msg: 'Quiz.',
      data: quiz,
    });
  } catch (error) {
    return getResponseError(res, error, `${path}/showQuiz`);
  }
}

export async function updateQuiz(req, res) {
  try {
    const { tokenId } = req.body;
    const { _id } = req.params;

    if (!checkObjectId(_id))
      return getResponse(res, {
        status: 422,
        msg: 'Disculpe, pero el Quiz seleccionado es incorrecto.',
      });

    const { data, errors } = quizValidate(req.body);

    if (errors.length > 0) return returnErrorParams(res, errors);

    const quiz = await Quiz.findOne({ _id, userid: tokenId }, { userid: 0, __v: 0 }).exec();

    quiz.title = data.title;
    quiz.description = data.description;
    quiz.questions = data.questions;
    quiz.totalQuestions = data.questions.length || 0;
    await quiz.save();

    return res.json({
      msg: 'Se ha actualizado el quiz exitosamente.',
      data: quiz,
    });
  } catch (error) {
    return getResponseError(res, error, `${path}/updateQuiz`);
  }
}

export async function deleteQuiz(req, res) {
  try {
    const { tokenId } = req.body;
    const { _id } = req.params;

    if (!checkObjectId(_id))
      return getResponse(res, {
        status: 422,
        msg: 'Disculpe, pero el Quiz seleccionado es incorrecto.',
      });

    const quiz = await Quiz.findOne({ _id, userid: tokenId }).exec();

    if (!quiz)
      return getResponse(res, {
        status: 404,
        msg: 'Disculpe, pero el Quiz seleccionado no existe o no se encuentra disponible.',
      });

    await QuizHistorical.deleteMany({ quizId: _id }).exec();

    await quiz.delete();

    return res.json({
      msg: 'Se ha eliminado el quiz exitosamente.',
    });
  } catch (error) {
    return getResponseError(res, error, `${path}/deleteQuiz`);
  }
}

/* HISTORICAL */

export async function getHistoricalQuiz(req, res) {
  try {
    const { tokenId } = req.body;
    let quizList = [];

    const history = await QuizHistorical.find({ userid: tokenId }, { answers: 0, __v: 0, userid: 0 }).exec();

    if (history.length > 0) {
      const listQuizIds = history.map((h) => h.quizId);
      quizList = await Quiz.find({ _id: { $in: listQuizIds } }, { title: 1, description: 1, totalQuestions: 1 }).exec();
    }

    return res.json({
      msg: 'Historico de Quiz.',
      data: {
        history,
        quizList,
      },
    });
  } catch (error) {
    return getResponseError(res, error, `${path}/getHistoricalQuiz`);
  }
}

export default {
  deleteQuiz,
  getHistoricalQuiz,
  getQuiz,
  saveQuiz,
  showQuiz,
  updateQuiz,
};
