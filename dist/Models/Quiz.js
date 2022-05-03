"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _GlobalFunctions = require("../Functions/GlobalFunctions");

var QuizItemSchema = new _mongoose.Schema({
  question: {
    type: String,
    require: true
  },
  values: {
    type: [String],
    require: true
  },
  answer: {
    type: Number,
    require: true
  }
}, {
  id: false
});
var QuizSchema = new _mongoose.Schema({
  userid: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    "default": null
  },
  questions: {
    type: [QuizItemSchema],
    require: true
  },
  totalQuestions: {
    type: Number,
    "default": 0
  },
  createAt: {
    type: Number,
    "default": _GlobalFunctions.setDate
  },
  updateAt: {
    type: Number,
    "default": _GlobalFunctions.setDate,
    set: _GlobalFunctions.setDate
  }
}, {
  id: false
});
QuizSchema.set('toJSON', {
  getters: true
});
QuizItemSchema.set('toJSON', {
  getters: true
});
var Quiz = (0, _mongoose.model)('quiz', QuizSchema);
var _default = Quiz;
exports["default"] = _default;