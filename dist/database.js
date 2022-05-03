"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Database;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _mongoose = require("mongoose");

function Database() {
  return _Database.apply(this, arguments);
}

function _Database() {
  _Database = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var mongoOptions, _process$env, DDB_HOST, DDB_NAME, DDB_USER, DDB_PASSWORD, DDB_PORT, dbAuthString, uri;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            mongoOptions = {
              useNewUrlParser: true,
              useUnifiedTopology: true
            };
            _process$env = process.env, DDB_HOST = _process$env.DDB_HOST, DDB_NAME = _process$env.DDB_NAME, DDB_USER = _process$env.DDB_USER, DDB_PASSWORD = _process$env.DDB_PASSWORD, DDB_PORT = _process$env.DDB_PORT;

            if (!(DDB_HOST === '' || DDB_PORT === '')) {
              _context.next = 8;
              break;
            }

            console.error("".concat((0, _dayjs["default"])().toISOString(), " - Error to get params to database."));
            new Error('Error al obtener los parámetros de conexión a la base de datos.');
            process.exit(500);
            return _context.abrupt("return");

          case 8:
            dbAuthString = DDB_USER !== '' ? "".concat(DDB_USER, ":").concat(DDB_PASSWORD, "@") : '';
            uri = "mongodb://".concat(dbAuthString).concat(DDB_HOST, ":").concat(DDB_PORT, "/").concat(DDB_NAME ? encodeURIComponent(DDB_NAME) : '');
            _context.next = 12;
            return (0, _mongoose.connect)(uri, mongoOptions);

          case 12:
            _context.next = 19;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            console.error("".concat((0, _dayjs["default"])().toISOString(), " - Database Connection Error ."));
            console.error(_context.t0.toString());
            process.exit(500);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));
  return _Database.apply(this, arguments);
}