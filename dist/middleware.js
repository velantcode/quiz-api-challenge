"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePublicToken = validatePublicToken;
exports.validateToken = validateToken;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var responseError = function responseError(res, err) {
  return res.status(401).json({
    err: err
  });
};

var getToken = function getToken(req) {
  return req ? req.headers['x-access-token'] || req.headers.Authorization : null;
};

function validateToken(req, res, next) {
  var _req$app, _req$app$settings;

  var token = getToken(req);
  var secretKey = req === null || req === void 0 ? void 0 : (_req$app = req.app) === null || _req$app === void 0 ? void 0 : (_req$app$settings = _req$app.settings) === null || _req$app$settings === void 0 ? void 0 : _req$app$settings.secretKey;

  if (token && secretKey) {
    return _jsonwebtoken["default"].verify(token, secretKey, /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, decoded) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!err) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", responseError(res, err.toString()));

              case 2:
                if (!decoded) {
                  _context.next = 6;
                  break;
                }

                req.body.tokenId = decoded._id;
                req.body.token = token;
                return _context.abrupt("return", next());

              case 6:
                return _context.abrupt("return", responseError(res, 'Token is trash'));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  return responseError(res, 'Token not found');
}

function validatePublicToken(req, res, next) {
  var _req$app2, _req$app2$settings;

  var token = getToken(req);
  var secretKey = req === null || req === void 0 ? void 0 : (_req$app2 = req.app) === null || _req$app2 === void 0 ? void 0 : (_req$app2$settings = _req$app2.settings) === null || _req$app2$settings === void 0 ? void 0 : _req$app2$settings.secretKey;

  if (token && secretKey) {
    return _jsonwebtoken["default"].verify(token, secretKey, /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(err, decoded) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!err) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", responseError(res, err.toString()));

              case 2:
                if (decoded) {
                  req.body.tokenId = decoded._id;
                  req.body.token = token;
                }

                return _context2.abrupt("return", next());

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  return next();
}