"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getPublicQuiz = getPublicQuiz;
exports.processPublicQuiz = processPublicQuiz;
exports.showPublicQuiz = showPublicQuiz;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _QuizRequests = require("../FormRequest/QuizRequests");

var _GlobalFunctions = require("../Functions/GlobalFunctions");

var _Validations = require("../Functions/Validations");

var _Quiz = _interopRequireDefault(require("../Models/Quiz"));

var _QuizHistorical = _interopRequireDefault(require("../Models/QuizHistorical"));

var _Users = _interopRequireDefault(require("../Models/Users"));

var path = 'Controllers/QuizPublicController';

function getPublicQuiz(_x, _x2) {
  return _getPublicQuiz.apply(this, arguments);
}

function _getPublicQuiz() {
  _getPublicQuiz = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var ret, quiz, usersIds, users, userMap;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            ret = [];
            _context.next = 4;
            return _Quiz["default"].find({}, {
              createdAt: 0,
              updatedAt: 0,
              questions: 0,
              __v: 0
            }).exec();

          case 4:
            quiz = _context.sent;

            if (!(quiz.length > 0)) {
              _context.next = 13;
              break;
            }

            usersIds = quiz.map(function (q) {
              return q.userid;
            });
            _context.next = 9;
            return _Users["default"].find({
              _id: {
                $in: usersIds
              }
            }, {
              fullname: 1,
              username: 1
            }).exec();

          case 9:
            users = _context.sent;
            userMap = {};
            users === null || users === void 0 ? void 0 : users.forEach(function (u) {
              userMap[u._id.toString()] = u;
            });
            quiz.forEach(function (q) {
              ret.push({
                _id: q._id,
                title: q.title,
                description: q.description,
                user: userMap[q.userid],
                totalQuestions: q.totalQuestions
              });
            });

          case 13:
            return _context.abrupt("return", res.json({
              msg: 'Listado de quiz.',
              data: ret
            }));

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", (0, _GlobalFunctions.getResponseError)(res, _context.t0, "".concat(path, "/getPublicQuiz")));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));
  return _getPublicQuiz.apply(this, arguments);
}

function showPublicQuiz(_x3, _x4) {
  return _showPublicQuiz.apply(this, arguments);
}

function _showPublicQuiz() {
  _showPublicQuiz = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _id, quiz, user, ret;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _id = req.params._id;

            if ((0, _Validations.checkObjectId)(_id)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", (0, _GlobalFunctions.getResponse)(res, {
              status: 422,
              error: 'Disculpe, pero el Quiz seleccionado es incorrecto.'
            }));

          case 4:
            _context2.next = 6;
            return _Quiz["default"].findOne({
              _id: _id
            }, {
              'questions.answer': 0,
              __v: 0,
              createdAt: 0,
              updatedAt: 0
            }).exec();

          case 6:
            quiz = _context2.sent;

            if (quiz) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", (0, _GlobalFunctions.getResponse)(res, {
              status: 404,
              error: 'Disculpe, pero el Quiz seleccionado no existe o no se encuentra disponible.'
            }));

          case 9:
            _context2.next = 11;
            return _Users["default"].findOne({
              _id: quiz.userid
            }, {
              fullname: 1,
              username: 1
            }).exec();

          case 11:
            user = _context2.sent;
            ret = {
              _id: quiz._id,
              title: quiz.title,
              description: quiz.description,
              user: user || null,
              questions: quiz.questions,
              totalQuestions: quiz.totalQuestions
            };
            return _context2.abrupt("return", res.json({
              msg: 'Quiz.',
              data: ret
            }));

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", (0, _GlobalFunctions.getResponseError)(res, _context2.t0, "".concat(path, "/showPublicQuiz")));

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 16]]);
  }));
  return _showPublicQuiz.apply(this, arguments);
}

function processPublicQuiz(_x5, _x6) {
  return _processPublicQuiz.apply(this, arguments);
}

function _processPublicQuiz() {
  _processPublicQuiz = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var tokenId, _id, _quizAnswerValidate, data, errors, quiz, success, historical;

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
              error: 'Disculpe, pero el Quiz a procesar es incorrecto.'
            }));

          case 5:
            _quizAnswerValidate = (0, _QuizRequests.quizAnswerValidate)(req.body), data = _quizAnswerValidate.data, errors = _quizAnswerValidate.errors;

            if (!(errors.length > 0)) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", (0, _GlobalFunctions.returnErrorParams)(res, errors));

          case 8:
            _context3.next = 10;
            return _Quiz["default"].findOne({
              _id: _id
            }, {
              totalQuestions: 1,
              'questions._id': 1,
              'questions.answer': 1
            }).exec();

          case 10:
            quiz = _context3.sent;

            if (quiz) {
              _context3.next = 13;
              break;
            }

            return _context3.abrupt("return", (0, _GlobalFunctions.getResponse)(res, {
              status: 404,
              error: 'Disculpe, pero el Quiz a procesar no existe o no se encuentra disponible.'
            }));

          case 13:
            success = 0;
            data.answers.forEach(function (a) {
              var index = quiz.questions.findIndex(function (q) {
                return q._id.toString() === a._id;
              });

              if (index > -1) {
                if (quiz.questions[index].answer === a.answer) success += 1;
              }
            }); // save historical

            if (!tokenId) {
              _context3.next = 19;
              break;
            }

            historical = new _QuizHistorical["default"]({
              userid: tokenId,
              quizId: quiz._id,
              answers: data.answers,
              approved: quiz.totalQuestions - success === 0,
              correctAnswer: success,
              incorrectAnswer: quiz.totalQuestions - success
            });
            _context3.next = 19;
            return historical.save();

          case 19:
            return _context3.abrupt("return", res.json({
              msg: 'Quiz procesado exitosamente.',
              data: {
                totalCorrectAnswers: success,
                totalIncorrectAnswers: quiz.totalQuestions - success,
                allCorrectAnswer: quiz.questions
              }
            }));

          case 22:
            _context3.prev = 22;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", (0, _GlobalFunctions.getResponseError)(res, _context3.t0, "".concat(path, "/showPublicQuiz")));

          case 25:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 22]]);
  }));
  return _processPublicQuiz.apply(this, arguments);
}

var _default = {
  getPublicQuiz: getPublicQuiz,
  showPublicQuiz: showPublicQuiz,
  processPublicQuiz: processPublicQuiz
};
exports["default"] = _default;