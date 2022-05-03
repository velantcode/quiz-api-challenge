"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.deleteQuiz = deleteQuiz;
exports.getHistoricalQuiz = getHistoricalQuiz;
exports.getQuiz = getQuiz;
exports.saveQuiz = saveQuiz;
exports.showQuiz = showQuiz;
exports.updateQuiz = updateQuiz;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _QuizRequests = require("../FormRequest/QuizRequests");

var _GlobalFunctions = require("../Functions/GlobalFunctions");

var _Validations = require("../Functions/Validations");

var _Quiz = _interopRequireDefault(require("../Models/Quiz"));

var _QuizHistorical = _interopRequireDefault(require("../Models/QuizHistorical"));

var path = 'Controllers/QuizController';

function getQuiz(_x, _x2) {
  return _getQuiz.apply(this, arguments);
}

function _getQuiz() {
  _getQuiz = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var tokenId, quiz;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            tokenId = req.body.tokenId;
            _context.next = 4;
            return _Quiz["default"].find({
              userid: tokenId
            }, {
              userid: 0,
              questions: 0,
              __v: 0
            }).exec();

          case 4:
            quiz = _context.sent;
            return _context.abrupt("return", res.json({
              msg: 'Listado de quiz.',
              data: quiz
            }));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", (0, _GlobalFunctions.getResponseError)(res, _context.t0, "".concat(path, "/getQuiz")));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _getQuiz.apply(this, arguments);
}

function saveQuiz(_x3, _x4) {
  return _saveQuiz.apply(this, arguments);
}

function _saveQuiz() {
  _saveQuiz = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var tokenId, _quizValidate, data, errors, quiz;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            tokenId = req.body.tokenId;
            _quizValidate = (0, _QuizRequests.quizValidate)(req.body), data = _quizValidate.data, errors = _quizValidate.errors;

            if (!(errors.length > 0)) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", (0, _GlobalFunctions.returnErrorParams)(res, errors));

          case 5:
            quiz = new _Quiz["default"](data);
            quiz.userid = tokenId;
            quiz.totalQuestions = quiz.questions.length || 0;
            _context2.next = 10;
            return quiz.save();

          case 10:
            return _context2.abrupt("return", res.json({
              msg: 'Se ha agregado el quiz exitosamente.',
              data: quiz
            }));

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", (0, _GlobalFunctions.getResponseError)(res, _context2.t0, "".concat(path, "/saveQuiz")));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return _saveQuiz.apply(this, arguments);
}

function showQuiz(_x5, _x6) {
  return _showQuiz.apply(this, arguments);
}

function _showQuiz() {
  _showQuiz = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var tokenId, _id, quiz;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            tokenId = req.body.tokenId;
            _id = req.params._id;

            if ((0, _Validations.checkObjectId)(_id)) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", (0, _GlobalFunctions.getResponse)(res, {
              status: 422,
              msg: 'Disculpe, pero el Quiz seleccionado es incorrecto.'
            }));

          case 5:
            _context3.next = 7;
            return _Quiz["default"].findOne({
              _id: _id,
              userid: tokenId
            }, {
              userid: 0,
              __v: 0
            }).exec();

          case 7:
            quiz = _context3.sent;

            if (quiz) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", (0, _GlobalFunctions.getResponse)(res, {
              status: 404,
              msg: 'Disculpe, pero el Quiz seleccionado no existe o no se encuentra disponible.'
            }));

          case 10:
            return _context3.abrupt("return", res.json({
              msg: 'Quiz.',
              data: quiz
            }));

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", (0, _GlobalFunctions.getResponseError)(res, _context3.t0, "".concat(path, "/showQuiz")));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 13]]);
  }));
  return _showQuiz.apply(this, arguments);
}

function updateQuiz(_x7, _x8) {
  return _updateQuiz.apply(this, arguments);
}

function _updateQuiz() {
  _updateQuiz = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var tokenId, _id, _quizValidate2, data, errors, quiz;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            tokenId = req.body.tokenId;
            _id = req.params._id;

            if ((0, _Validations.checkObjectId)(_id)) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", (0, _GlobalFunctions.getResponse)(res, {
              status: 422,
              msg: 'Disculpe, pero el Quiz seleccionado es incorrecto.'
            }));

          case 5:
            _quizValidate2 = (0, _QuizRequests.quizValidate)(req.body), data = _quizValidate2.data, errors = _quizValidate2.errors;

            if (!(errors.length > 0)) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", (0, _GlobalFunctions.returnErrorParams)(res, errors));

          case 8:
            _context4.next = 10;
            return _Quiz["default"].findOne({
              _id: _id,
              userid: tokenId
            }, {
              userid: 0,
              __v: 0
            }).exec();

          case 10:
            quiz = _context4.sent;
            quiz.title = data.title;
            quiz.description = data.description;
            quiz.questions = data.questions;
            quiz.totalQuestions = data.questions.length || 0;
            _context4.next = 17;
            return quiz.save();

          case 17:
            return _context4.abrupt("return", res.json({
              msg: 'Se ha actualizado el quiz exitosamente.',
              data: quiz
            }));

          case 20:
            _context4.prev = 20;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", (0, _GlobalFunctions.getResponseError)(res, _context4.t0, "".concat(path, "/updateQuiz")));

          case 23:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 20]]);
  }));
  return _updateQuiz.apply(this, arguments);
}

function deleteQuiz(_x9, _x10) {
  return _deleteQuiz.apply(this, arguments);
}
/* HISTORICAL */


function _deleteQuiz() {
  _deleteQuiz = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var tokenId, _id, quiz;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            tokenId = req.body.tokenId;
            _id = req.params._id;

            if ((0, _Validations.checkObjectId)(_id)) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", (0, _GlobalFunctions.getResponse)(res, {
              status: 422,
              msg: 'Disculpe, pero el Quiz seleccionado es incorrecto.'
            }));

          case 5:
            _context5.next = 7;
            return _Quiz["default"].findOne({
              _id: _id,
              userid: tokenId
            }).exec();

          case 7:
            quiz = _context5.sent;

            if (quiz) {
              _context5.next = 10;
              break;
            }

            return _context5.abrupt("return", (0, _GlobalFunctions.getResponse)(res, {
              status: 404,
              msg: 'Disculpe, pero el Quiz seleccionado no existe o no se encuentra disponible.'
            }));

          case 10:
            _context5.next = 12;
            return _QuizHistorical["default"].deleteMany({
              quizId: _id
            }).exec();

          case 12:
            _context5.next = 14;
            return quiz["delete"]();

          case 14:
            return _context5.abrupt("return", res.json({
              msg: 'Se ha eliminado el quiz exitosamente.'
            }));

          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", (0, _GlobalFunctions.getResponseError)(res, _context5.t0, "".concat(path, "/deleteQuiz")));

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 17]]);
  }));
  return _deleteQuiz.apply(this, arguments);
}

function getHistoricalQuiz(_x11, _x12) {
  return _getHistoricalQuiz.apply(this, arguments);
}

function _getHistoricalQuiz() {
  _getHistoricalQuiz = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var tokenId, quizList, history, listQuizIds;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            tokenId = req.body.tokenId;
            quizList = [];
            _context6.next = 5;
            return _QuizHistorical["default"].find({
              userid: tokenId
            }, {
              answers: 0,
              __v: 0,
              userid: 0
            }).exec();

          case 5:
            history = _context6.sent;

            if (!(history.length > 0)) {
              _context6.next = 11;
              break;
            }

            listQuizIds = history.map(function (h) {
              return h.quizId;
            });
            _context6.next = 10;
            return _Quiz["default"].find({
              _id: {
                $in: listQuizIds
              }
            }, {
              title: 1,
              description: 1,
              totalQuestions: 1
            }).exec();

          case 10:
            quizList = _context6.sent;

          case 11:
            return _context6.abrupt("return", res.json({
              msg: 'Historico de Quiz.',
              data: {
                history: history,
                quizList: quizList
              }
            }));

          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", (0, _GlobalFunctions.getResponseError)(res, _context6.t0, "".concat(path, "/getHistoricalQuiz")));

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 14]]);
  }));
  return _getHistoricalQuiz.apply(this, arguments);
}

var _default = {
  deleteQuiz: deleteQuiz,
  getHistoricalQuiz: getHistoricalQuiz,
  getQuiz: getQuiz,
  saveQuiz: saveQuiz,
  showQuiz: showQuiz,
  updateQuiz: updateQuiz
};
exports["default"] = _default;