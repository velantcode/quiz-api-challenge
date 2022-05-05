import { loginValidate, registerValidate, resetPasswordValidate } from '../FormRequest/PublicRequests';
import { getResponse, getResponseError, returnErrorParams } from '../Functions/GlobalFunctions';
import generateToken from '../Functions/GenerateToken';
import Users from '../Models/Users';

const path = 'Controllers/PublicController';

export async function login(req, res) {
  try {
    const { data, errors } = loginValidate(req.body);

    if (errors.length > 0) return returnErrorParams(res, errors);

    const user = await Users.findOne({ username: data.username }).exec();

    if (!user || data?.password !== user?.password) {
      return getResponse(res, {
        status: 422,
        error: 'Usuario o contraseña incorrectos.',
      });
    }

    const token = await generateToken(req, user);

    return res.json({
      msg: 'Ha accedido exitosamente.',
      data: {
        token,
        user: {
          _id: user._id,
          fullname: user.fullname,
          username: user.fullname,
        },
      },
    });
  } catch (error) {
    return getResponseError(res, error, `${path}/login`);
  }
}

export async function register(req, res) {
  try {
    const { data, errors } = registerValidate(req.body);

    if (errors.length > 0) return returnErrorParams(res, errors);

    // check if exist username
    const exist = await Users.find({ username: data.username }).countDocuments().exec();

    if (exist > 0)
      return getResponse(res, {
        status: 422,
        error: 'Disculpe, el nombre de usuario indicado ya se encuentra registrado.',
      });

    const user = new Users(data);
    await user.save();

    const token = await generateToken(req, user);

    return res.json({
      msg: 'Se ha registrado exitosamente.',
      data: {
        token,
        user: {
          _id: user._id,
          fullname: user.fullname,
          username: user.username,
        },
      },
    });
  } catch (error) {
    return getResponseError(res, error, `${path}/register`);
  }
}

export async function resetPassword(req, res) {
  try {
    const { data, errors } = resetPasswordValidate(req.body);

    if (errors.length > 0) return returnErrorParams(res, errors);

    const user = await Users.findOne({ username: data.username }).exec();

    if (!user) {
      return getResponse(res, {
        status: 404,
        error: 'Disculpe, el nombre de usuario indicado no existe o no se encuentra disponible.',
      });
    }

    user.password = '123456';
    await user.save();

    return res.json({
      msg: 'Su acceso fue reiniciado exitosamente. Su nueva contraseña es: 123456',
    });
  } catch (error) {
    return getResponseError(res, error, `${path}/resetPassword`);
  }
}

export default {
  login,
  register,
  resetPassword,
};
