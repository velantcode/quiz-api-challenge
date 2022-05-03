"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeUserPassword = changeUserPassword;
exports["default"] = void 0;
exports.getUserData = getUserData;
exports.updateUserData = updateUserData;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _UserRequests = require("../FormRequest/UserRequests");

var _GlobalFunctions = require("../Functions/GlobalFunctions");

var _Quiz = _interopRequireDefault(require("../Models/Quiz"));

var _QuizHistorical = _interopRequireDefault(require("../Models/QuizHistorical"));

var _Users = _interopRequireDefault(require("../Models/Users"));

var path = 'Controllers/UsersController';

function getUserData(_x, _x2) {
  return _getUserData.apply(this, arguments);
}

function _getUserData() {
  _getUserData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var tokenId, user, totalQuiz, totalQuizHistorical;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            tokenId = req.body.tokenId;
            _context.next = 4;
            return _Users["default"].findOne({
              _id: tokenId
            }, {
              password: 0,
              __v: 0
            }).exec();

          case 4:
            user = _context.sent;

            if (user) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", (0, _GlobalFunctions.getResponse)(res, {
              status: 401,
              error: 'Disculpe, pero no se encontró una sesión activa.'
            }));

          case 7:
            _context.next = 9;
            return _Quiz["default"].find({
              userid: tokenId
            }).countDocuments().exec();

          case 9:
            totalQuiz = _context.sent;
            _context.next = 12;
            return _QuizHistorical["default"].find({
              userid: tokenId
            }).countDocuments().exec();

          case 12:
            totalQuizHistorical = _context.sent;
            return _context.abrupt("return", res.json({
              msg: 'Datos de la sesión.',
              data: {
                user: user,
                totalQuiz: totalQuiz,
                totalQuizHistorical: totalQuizHistorical
              }
            }));

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", (0, _GlobalFunctions.getResponseError)(res, _context.t0, "".concat(path, "/getUserData")));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));
  return _getUserData.apply(this, arguments);
}

function updateUserData(_x3, _x4) {
  return _updateUserData.apply(this, arguments);
}

function _updateUserData() {
  _updateUserData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var tokenId, _updateUserValidate, data, errors, user;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            tokenId = req.body.tokenId;
            _updateUserValidate = (0, _UserRequests.updateUserValidate)(req.body), data = _updateUserValidate.data, errors = _updateUserValidate.errors;

            if (!(errors.length > 0)) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", (0, _GlobalFunctions.returnErrorParams)(res, errors));

          case 5:
            _context2.next = 7;
            return _Users["default"].findOne({
              _id: tokenId
            }, {
              password: 0
            }).exec();

          case 7:
            user = _context2.sent;

            if (user) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", (0, _GlobalFunctions.getResponse)(res, {
              status: 401,
              error: 'Disculpe, pero no se encontró una sesión activa.'
            }));

          case 10:
            user.fullname = data.fullname;
            user.username = data.username;
            _context2.next = 14;
            return user.save();

          case 14:
            return _context2.abrupt("return", res.json({
              msg: 'Se ha actualizado la información de su cuenta exitosamente.',
              data: {
                user: user
              }
            }));

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", (0, _GlobalFunctions.getResponseError)(res, _context2.t0, "".concat(path, "/updateUserData")));

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 17]]);
  }));
  return _updateUserData.apply(this, arguments);
}

function changeUserPassword(_x5, _x6) {
  return _changeUserPassword.apply(this, arguments);
}

function _changeUserPassword() {
  _changeUserPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var tokenId, _updatePasswordValida, data, errors, user;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            tokenId = req.body.tokenId;
            _updatePasswordValida = (0, _UserRequests.updatePasswordValidate)(req.body), data = _updatePasswordValida.data, errors = _updatePasswordValida.errors;

            if (!(errors.length > 0)) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", (0, _GlobalFunctions.returnErrorParams)(res, errors));

          case 5:
            _context3.next = 7;
            return _Users["default"].findOne({
              _id: tokenId
            }, {
              password: 1
            }).exec();

          case 7:
            user = _context3.sent;

            if (user) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", (0, _GlobalFunctions.getResponse)(res, {
              status: 401,
              error: 'Disculpe, pero no se encontró una sesión activa.'
            }));

          case 10:
            user.password = data.password;
            _context3.next = 13;
            return user.save();

          case 13:
            return _context3.abrupt("return", res.json({
              msg: 'Se ha cambiado la contraseña exitosamente.'
            }));

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", (0, _GlobalFunctions.getResponseError)(res, _context3.t0, "".concat(path, "/changeUserPassword")));

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 16]]);
  }));
  return _changeUserPassword.apply(this, arguments);
}

var _default = {
  changeUserPassword: changeUserPassword,
  getUserData: getUserData,
  updateUserData: updateUserData
};
exports["default"] = _default;