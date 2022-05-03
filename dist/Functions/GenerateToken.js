"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = generateToken;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function generateToken(_x, _x2) {
  return _generateToken.apply(this, arguments);
}

function _generateToken() {
  _generateToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, data) {
    var _req$app, _req$app$settings;

    var secretKey, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            secretKey = req === null || req === void 0 ? void 0 : (_req$app = req.app) === null || _req$app === void 0 ? void 0 : (_req$app$settings = _req$app.settings) === null || _req$app$settings === void 0 ? void 0 : _req$app$settings.secretKey;
            token = _jsonwebtoken["default"].sign({
              _id: data._id
            }, secretKey, {
              expiresIn: '1y'
            });

            if (token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", null);

          case 4:
            return _context.abrupt("return", token);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _generateToken.apply(this, arguments);
}