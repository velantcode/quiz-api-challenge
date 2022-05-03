"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _GlobalFunctions = require("../Functions/GlobalFunctions");

var UsersSchema = new _mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  fullname: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  createdAt: {
    type: Number,
    "default": _GlobalFunctions.setDate
  },
  updatedAt: {
    type: Number,
    "default": _GlobalFunctions.setDate,
    set: _GlobalFunctions.setDate
  }
}, {
  id: false
});
UsersSchema.set('toJSON', {
  getters: true
});
var Users = (0, _mongoose.model)('users', UsersSchema);
var _default = Users;
exports["default"] = _default;