"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var IndexRoute = _express["default"].Router(); // ===================================================================================
// ruta de pruebas


IndexRoute.get('/', function (req, res) {
  res.json({
    msg: 'Api Quiz 2022'
  });
}); // ===================================================================================

var _default = IndexRoute;
exports["default"] = _default;