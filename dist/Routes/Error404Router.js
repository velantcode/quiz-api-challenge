"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var Error404Router = _express["default"].Router(); // ===================================================================================
// Msg para rutas no encontradas


Error404Router.get('/', function (req, res) {
  res.status(404).json({
    error: 'No se logró obtener la información solicitada.'
  });
}); // ===================================================================================

var _default = Error404Router;
exports["default"] = _default;