"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.login = login;
exports.register = register;
exports.resetPassword = resetPassword;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _PublicRequests = require("../FormRequest/PublicRequests");

var _GlobalFunctions = require("../Functions/GlobalFunctions");

var _GenerateToken = _interopRequireDefault(require("../Functions/GenerateToken"));

var _Users = _interopRequireDefault(require("../Models/Users"));

var path = 'Controllers/PublicController';

function login(_x, _x2) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _loginValidate, data, errors, user, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _loginValidate = (0, _PublicRequests.loginValidate)(req.body), data = _loginValidate.data, errors = _loginValidate.errors;

            if (!(errors.length > 0)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", (0, _GlobalFunctions.returnErrorParams)(res, errors));

          case 4:
            _context.next = 6;
            return _Users["default"].findOne({
              username: data.username
            }).exec();

          case 6:
            user = _context.sent;

            if (!(!user || (data === null || data === void 0 ? void 0 : data.password) !== (user === null || user === void 0 ? void 0 : user.password))) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", (0, _GlobalFunctions.getResponse)(res, {
              status: 422,
              error: 'Usuario o contraseña incorrectos.'
            }));

          case 9:
            _context.next = 11;
            return (0, _GenerateToken["default"])(req, user);

          case 11:
            token = _context.sent;
            return _context.abrupt("return", res.json({
              msg: 'Ha accedido exitosamente.',
              data: {
                token: token,
                user: {
                  _id: user._id,
                  fullname: user.fullname,
                  username: user.fullname
                }
              }
            }));

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", (0, _GlobalFunctions.getResponseError)(res, _context.t0, "".concat(path, "/login")));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));
  return _login.apply(this, arguments);
}

function register(_x3, _x4) {
  return _register.apply(this, arguments);
}

function _register() {
  _register = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _registerValidate, data, errors, user, token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _registerValidate = (0, _PublicRequests.registerValidate)(req.body), data = _registerValidate.data, errors = _registerValidate.errors;

            if (!(errors.length > 0)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", (0, _GlobalFunctions.returnErrorParams)(res, errors));

          case 4:
            user = new _Users["default"](data);
            _context2.next = 7;
            return user.save();

          case 7:
            _context2.next = 9;
            return (0, _GenerateToken["default"])(req, user);

          case 9:
            token = _context2.sent;
            return _context2.abrupt("return", res.json({
              msg: 'Se ha registrado exitosamente.',
              data: {
                token: token,
                user: {
                  _id: user._id,
                  fullname: user.fullname,
                  username: user.username
                }
              }
            }));

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", (0, _GlobalFunctions.getResponseError)(res, _context2.t0, "".concat(path, "/register")));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return _register.apply(this, arguments);
}

function resetPassword(_x5, _x6) {
  return _resetPassword.apply(this, arguments);
}

function _resetPassword() {
  _resetPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _resetPasswordValidat, data, errors, user;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _resetPasswordValidat = (0, _PublicRequests.resetPasswordValidate)(req.body), data = _resetPasswordValidat.data, errors = _resetPasswordValidat.errors;

            if (!(errors.length > 0)) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt("return", (0, _GlobalFunctions.returnErrorParams)(res, errors));

          case 4:
            _context3.next = 6;
            return _Users["default"].findOne({
              username: data.username
            }).exec();

          case 6:
            user = _context3.sent;

            if (user) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", (0, _GlobalFunctions.getResponse)(res, {
              status: 404,
              error: 'Disculpe, el nombre de usuario indicado no existe o no se encuentra disponible.'
            }));

          case 9:
            user.password = '123456';
            _context3.next = 12;
            return user.save();

          case 12:
            return _context3.abrupt("return", res.json({
              msg: 'Su acceso fue reiniciado exitosamente. Su nueva contraseña es: 123456'
            }));

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", (0, _GlobalFunctions.getResponseError)(res, _context3.t0, "".concat(path, "/resetPassword")));

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 15]]);
  }));
  return _resetPassword.apply(this, arguments);
}

var _default = {
  login: login,
  register: register,
  resetPassword: resetPassword
};
exports["default"] = _default;