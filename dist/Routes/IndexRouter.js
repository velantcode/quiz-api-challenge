"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _PublicController = require("../Controllers/PublicController");

var IndexRoute = _express["default"].Router(); // ===================================================================================
// ruta de pruebas

/**
 * @api {get} / check test server
 * @apiName test
 * @apiGroup testing
 */


IndexRoute.get('/', function (req, res) {
  res.json({
    msg: 'Api Quiz 2022'
  });
});
/*
  login, register and reset password
*/

IndexRoute.post('/login', _PublicController.login);
IndexRoute.post('/register', _PublicController.register);
IndexRoute.post('/reset-password', _PublicController.resetPassword); // ===================================================================================

var _default = IndexRoute;
exports["default"] = _default;