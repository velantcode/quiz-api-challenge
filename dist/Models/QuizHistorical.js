"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _GlobalFunctions = require("../Functions/GlobalFunctions");

var QuizAnswerSchema = new _mongoose.Schema({
  _id: {
    type: String,
    require: true
  },
  answer: {
    type: Number,
    require: true
  }
}, {
  _id: false,
  id: false
});
var QuizHistoricalSchema = new _mongoose.Schema({
  quizId: {
    type: String,
    require: true
  },
  userid: {
    type: String,
    "default": null
  },
  approved: {
    type: Boolean,
    "default": false
  },
  correctAnswers: {
    type: Number,
    "default": 0
  },
  incorrectAnswers: {
    type: Number,
    "default": 0
  },
  answers: {
    type: [QuizAnswerSchema],
    require: true
  },
  createdAt: {
    type: Number,
    "default": _GlobalFunctions.setDate
  }
}, {
  id: false
});
QuizHistoricalSchema.set('toJSON', {
  getters: true
});
var QuizHistorical = (0, _mongoose.model)('quiz_historical', QuizHistoricalSchema);
var _default = QuizHistorical;
exports["default"] = _default;