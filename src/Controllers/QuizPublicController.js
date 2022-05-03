import { quizAnswerValidate } from '../FormRequest/QuizRequests';
import { getResponse, getResponseError, returnErrorParams } from '../Functions/GlobalFunctions';
import { checkObjectId } from '../Functions/Validations';
import Quiz from '../Models/Quiz';
import QuizHistorical from '../Models/QuizHistorical';
import Users from '../Models/Users';

const path = 'Controllers/QuizPublicController';

export async function getPublicQuiz(req, res) {
  try {
    const ret = [];
    const quiz = await Quiz.find({}, { createdAt: 0, updatedAt: 0, questions: 0, __v: 0 }).exec();

    if (quiz.length > 0) {
      const usersIds = quiz.map((q) => q.userid);
      const users = await Users.find({ _id: { $in: usersIds } }, { fullname: 1, username: 1 }).exec();

      const userMap = {};

      users?.forEach((u) => {
        userMap[u._id.toString()] = u;
      });

      quiz.forEach((q) => {
        ret.push({
          _id: q._id,
          title: q.title,
          description: q.description,
          user: userMap[q.userid],
          totalQuestions: q.totalQuestions,
        });
      });
    }

    return res.json({
      msg: 'Listado de quiz.',
      data: ret,
    });
  } catch (error) {
    return getResponseError(res, error, `${path}/getPublicQuiz`);
  }
}

export async function showPublicQuiz(req, res) {
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id))
      return getResponse(res, {
        status: 422,
        error: 'Disculpe, pero el Quiz seleccionado es incorrecto.',
      });

    const quiz = await Quiz.findOne({ _id }, { 'questions.answer': 0, __v: 0, createdAt: 0, updatedAt: 0 }).exec();

    if (!quiz)
      return getResponse(res, {
        status: 404,
        error: 'Disculpe, pero el Quiz seleccionado no existe o no se encuentra disponible.',
      });

    const user = await Users.findOne({ _id: quiz.userid }, { fullname: 1, username: 1 }).exec();

    const ret = {
      _id: quiz._id,
      title: quiz.title,
      description: quiz.description,
      user: user || null,
      questions: quiz.questions,
      totalQuestions: quiz.totalQuestions,
    };

    return res.json({
      msg: 'Quiz.',
      data: ret,
    });
  } catch (error) {
    return getResponseError(res, error, `${path}/showPublicQuiz`);
  }
}

export async function processPublicQuiz(req, res) {
  try {
    const { tokenId } = req.body;
    const { _id } = req.params;

    if (!checkObjectId(_id))
      return getResponse(res, {
        status: 422,
        error: 'Disculpe, pero el Quiz a procesar es incorrecto.',
      });

    const { data, errors } = quizAnswerValidate(req.body);

    if (errors.length > 0) return returnErrorParams(res, errors);

    const quiz = await Quiz.findOne({ _id }, { totalQuestions: 1, 'questions._id': 1, 'questions.answer': 1 }).exec();

    if (!quiz)
      return getResponse(res, {
        status: 404,
        error: 'Disculpe, pero el Quiz a procesar no existe o no se encuentra disponible.',
      });

    let success = 0;

    data.answers.forEach((a) => {
      const index = quiz.questions.findIndex((q) => q._id.toString() === a._id);
      if (index > -1) {
        if (quiz.questions[index].answer === a.answer) success += 1;
      }
    });

    // save historical
    if (tokenId) {
      const historical = new QuizHistorical({
        userid: tokenId,
        quizId: quiz._id,
        answers: data.answers,
        approved: quiz.totalQuestions - success === 0,
        correctAnswer: success,
        incorrectAnswer: quiz.totalQuestions - success,
      });
      await historical.save();
    }

    return res.json({
      msg: 'Quiz procesado exitosamente.',
      data: {
        totalCorrectAnswers: success,
        totalIncorrectAnswers: quiz.totalQuestions - success,
        allCorrectAnswer: quiz.questions,
      },
    });
  } catch (error) {
    return getResponseError(res, error, `${path}/showPublicQuiz`);
  }
}

export default { getPublicQuiz, showPublicQuiz, processPublicQuiz };
