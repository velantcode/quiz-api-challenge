"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.updatePasswordValidate = updatePasswordValidate;
exports.updateUserValidate = updateUserValidate;

var _Validations = require("../Functions/Validations");

var getErrorForm = function getErrorForm() {
  return {
    error: 'Disculpe, pero no se logró obtener los datos del formulario.'
  };
};

function updateUserValidate(data) {
  var ret = {
    data: {
      fullname: '',
      username: ''
    },
    errors: []
  };

  if (!data) {
    ret.errors.push(getErrorForm());
    return ret;
  }

  var username = data.username,
      fullname = data.fullname;

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

  return ret;
}

function updatePasswordValidate(data) {
  var ret = {
    data: {
      password: ''
    },
    errors: []
  };

  if (!data) {
    ret.errors.push(getErrorForm());
    return ret;
  }

  if (!/^[a-zA-Z0-9.,\-+#$%&*]{3,}/.test(data.password)) {
    ret.errors.push({
      input: 'password',
      error: 'Disculpe, pero debe indicar una contraseña válida. Debe contener al menos 3 caracteres, con letras (a-zA-Z), números (0-9) o caracteres especiales (.,\\-+#$%&*).'
    });
  } else ret.data.password = "".concat(data.password).trim();

  return ret;
}

var _default = {
  updateUserValidate: updateUserValidate,
  updatePasswordValidate: updatePasswordValidate
};
exports["default"] = _default;