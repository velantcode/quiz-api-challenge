"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _middleware = require("../middleware");

var _QuizPublicController = require("../Controllers/QuizPublicController");

var QuizPublicRoute = _express["default"].Router(); // ===================================================================================


QuizPublicRoute.get('/', _QuizPublicController.getPublicQuiz);
QuizPublicRoute.route('/:_id').get(_middleware.validatePublicToken, _QuizPublicController.showPublicQuiz).post(_middleware.validatePublicToken, _QuizPublicController.processPublicQuiz); // ===================================================================================

var _default = QuizPublicRoute;
exports["default"] = _default;