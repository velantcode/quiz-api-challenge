import { updatePasswordValidate, updateUserValidate } from '../FormRequest/UserRequests';
import { getResponse, getResponseError, returnErrorParams } from '../Functions/GlobalFunctions';
import Quiz from '../Models/Quiz';
import QuizHistorical from '../Models/QuizHistorical';
import Users from '../Models/Users';

const path = 'Controllers/UsersController';

export async function getUserData(req, res) {
  try {
    const { tokenId } = req.body;

    const user = await Users.findOne({ _id: tokenId }, { password: 0, __v: 0 }).exec();

    if (!user)
      return getResponse(res, {
        status: 401,
        error: 'Disculpe, pero no se encontró una sesión activa.',
      });

    const totalQuiz = await Quiz.find({ userid: tokenId }).countDocuments().exec();
    const totalQuizHistorical = await QuizHistorical.find({ userid: tokenId }).countDocuments().exec();

    return res.json({
      msg: 'Datos de la sesión.',
      data: {
        user,
        totalQuiz,
        totalQuizHistorical,
      },
    });
  } catch (error) {
    return getResponseError(res, error, `${path}/getUserData`);
  }
}

export async function updateUserData(req, res) {
  try {
    const { tokenId } = req.body;
    const { data, errors } = updateUserValidate(req.body);

    if (errors.length > 0) return returnErrorParams(res, errors);

    const user = await Users.findOne({ _id: tokenId }, { password: 0 }).exec();

    if (!user)
      return getResponse(res, {
        status: 401,
        error: 'Disculpe, pero no se encontró una sesión activa.',
      });

    user.fullname = data.fullname;
    user.username = data.username;
    await user.save();

    return res.json({
      msg: 'Se ha actualizado la información de su cuenta exitosamente.',
      data: {
        user,
      },
    });
  } catch (error) {
    return getResponseError(res, error, `${path}/updateUserData`);
  }
}

export async function changeUserPassword(req, res) {
  try {
    const { tokenId } = req.body;
    const { data, errors } = updatePasswordValidate(req.body);

    if (errors.length > 0) return returnErrorParams(res, errors);

    const user = await Users.findOne({ _id: tokenId }, { password: 1 }).exec();

    if (!user)
      return getResponse(res, {
        status: 401,
        error: 'Disculpe, pero no se encontró una sesión activa.',
      });

    user.password = data.password;
    await user.save();

    return res.json({
      msg: 'Se ha cambiado la contraseña exitosamente.',
    });
  } catch (error) {
    return getResponseError(res, error, `${path}/changeUserPassword`);
  }
}

export default {
  changeUserPassword,
  getUserData,
  updateUserData,
};
