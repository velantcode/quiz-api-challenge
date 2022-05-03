"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _middleware = require("../middleware");

var _UsersController = require("../Controllers/UsersController");

var UsersRoute = _express["default"].Router(); // ===================================================================================


UsersRoute.route('/').get(_middleware.validateToken, _UsersController.getUserData).put(_middleware.validateToken, _UsersController.updateUserData);
UsersRoute.put('/change-password', _middleware.validateToken, _UsersController.changeUserPassword); // ===================================================================================

var _default = UsersRoute;
exports["default"] = _default;