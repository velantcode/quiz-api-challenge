import { checkNameOrLastName } from '../Functions/Validations';

const getErrorForm = () => ({ error: 'Disculpe, pero no se logró obtener los datos del formulario.' });

export function registerValidate(data) {
  const ret = {
    data: {
      fullname: '',
      password: '',
      username: '',
    },
    errors: [],
  };

  if (!data) {
    ret.errors.push(getErrorForm());
    return ret;
  }

  const { username, fullname, password } = data;

  if (!/^[a-zA-Z0-9]{3,}/.test(username)) {
    ret.errors.push({
      input: 'username',
      error:
        'Disculpe, pero debe indicar un nombre de usuario con al menos 3 caracteres sin espacions (a-z, A-Z, 0-9).',
    });
  } else ret.data.username = `${username}`.trim().toLowerCase();

  if (!checkNameOrLastName(fullname)) {
    ret.errors.push({
      input: 'fullname',
      error: 'Disculpe, pero debe indicar un nombre válido. Solo se permiten letras: a-z o A-Z).',
    });
  } else ret.data.fullname = `${fullname}`.trim().toUpperCase();

  if (!/^[a-zA-Z0-9.,\-+#$%&*]{3,}/.test(password)) {
    ret.errors.push({
      input: 'password',
      error:
        'Disculpe, pero debe indicar una contraseña válida. Debe contener al menos 3 caracteres, con letras (a-zA-Z), números (0-9) o caracteres especiales (.,\\-+#$%&*).',
    });
  } else ret.data.password = password;

  return ret;
}

export function resetPasswordValidate(data) {
  const ret = {
    data: { username: '' },
    errors: [],
  };

  if (!data) {
    ret.errors.push(getErrorForm());
    return ret;
  }

  if (!/^[a-zA-Z0-9]{3,}/.test(data.username)) {
    ret.errors.push({
      input: 'username',
      error: 'Disculpe, pero debe indicar su nombre de usuario.',
    });
  } else ret.data.username = `${data.username}`.trim().toLowerCase();

  return ret;
}

export function loginValidate(data) {
  const ret = {
    data: { password: '', username: '' },
    errors: [],
  };

  if (!data) {
    ret.errors.push(getErrorForm());
    return ret;
  }

  if (!/^[a-zA-Z0-9]{3,}/.test(data.username)) {
    ret.errors.push({
      input: 'username',
      error: 'Disculpe, pero debe indicar su nombre de usuario.',
    });
  } else ret.data.username = `${data.username}`.trim().toLowerCase();

  if (!data.password || data.password?.length < 3) {
    ret.errors.push({
      input: 'password',
      error: 'Disculpe, pero debe indicar su contraseña.',
    });
  } else ret.data.password = data.password;

  return ret;
}

export default {
  loginValidate,
  registerValidate,
  resetPasswordValidate,
};
