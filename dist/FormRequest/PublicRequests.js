"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.loginValidate = loginValidate;
exports.registerValidate = registerValidate;
exports.resetPasswordValidate = resetPasswordValidate;

var _Validations = require("../Functions/Validations");

var getErrorForm = function getErrorForm() {
  return {
    error: 'Disculpe, pero no se logró obtener los datos del formulario.'
  };
};

function registerValidate(data) {
  var ret = {
    data: {
      fullname: '',
      password: '',
      username: ''
    },
    errors: []
  };

  if (!data) {
    ret.errors.push(getErrorForm());
    return ret;
  }

  var username = data.username,
      fullname = data.fullname,
      password = data.password;

  if (!/^[a-zA-Z0-9]{3,}/.test(username)) {
    ret.errors.push({
      input: 'username',
      error: 'Disculpe, pero debe indicar un nombre de usuario con al menos 3 caracteres sin espacions (a-z, A-Z, 0-9).'
    });
  } else ret.data.username = "".concat(username).trim().toLowerCase();

  if (!(0, _Validations.checkNameOrLastName)(fullname)) {
    ret.errors.push({
      input: 'fullname',
      error: 'Disculpe, pero debe indicar un nombre válido. Solo se permiten letras: a-z o A-Z).'
    });
  } else ret.data.fullname = "".concat(fullname).trim().toUpperCase();

  if (!/^[a-zA-Z0-9.,\-+#$%&*]{3,}/.test(password)) {
    ret.errors.push({
      input: 'password',
      error: 'Disculpe, pero debe indicar una contraseña válida. Debe contener al menos 3 caracteres, con letras (a-zA-Z), números (0-9) o caracteres especiales (.,\\-+#$%&*).'
    });
  } else ret.data.password = password;

  return ret;
}

function resetPasswordValidate(data) {
  var ret = {
    data: {
      username: ''
    },
    errors: []
  };

  if (!data) {
    ret.errors.push(getErrorForm());
    return ret;
  }

  if (!/^[a-zA-Z0-9]{3,}/.test(data.username)) {
    ret.errors.push({
      input: 'username',
      error: 'Disculpe, pero debe indicar su nombre de usuario.'
    });
  } else ret.data.username = "".concat(data.username).trim().toLowerCase();

  return ret;
}

function loginValidate(data) {
  var _data$password;

  var ret = {
    data: {
      password: '',
      username: ''
    },
    errors: []
  };

  if (!data) {
    ret.errors.push(getErrorForm());
    return ret;
  }

  if (!/^[a-zA-Z0-9]{3,}/.test(data.username)) {
    ret.errors.push({
      input: 'username',
      error: 'Disculpe, pero debe indicar su nombre de usuario.'
    });
  } else ret.data.username = "".concat(data.username).trim().toLowerCase();

  if (!data.password || ((_data$password = data.password) === null || _data$password === void 0 ? void 0 : _data$password.length) < 3) {
    ret.errors.push({
      input: 'password',
      error: 'Disculpe, pero debe indicar su contraseña.'
    });
  } else ret.data.password = data.password;

  return ret;
}

var _default = {
  loginValidate: loginValidate,
  registerValidate: registerValidate,
  resetPasswordValidate: resetPasswordValidate
};
exports["default"] = _default;