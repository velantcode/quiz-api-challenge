"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _middleware = require("../middleware");

var _QuizController = require("../Controllers/QuizController");

var QuizzesRouter = _express["default"].Router(); // ===================================================================================


QuizzesRouter.route('/').get(_middleware.validateToken, _QuizController.getQuiz).post(_middleware.validateToken, _QuizController.saveQuiz);
QuizzesRouter.get('/historical', _middleware.validateToken, _QuizController.getHistoricalQuiz);
QuizzesRouter.route('/:_id')["delete"](_middleware.validateToken, _QuizController.deleteQuiz).get(_middleware.validateToken, _QuizController.showQuiz).put(_middleware.validateToken, _QuizController.updateQuiz); // ===================================================================================

var _default = QuizzesRouter;
exports["default"] = _default;