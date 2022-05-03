"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _database = _interopRequireDefault(require("./database"));

var _IndexRouter = _interopRequireDefault(require("./Routes/IndexRouter"));

var _QuizRouter = _interopRequireDefault(require("./Routes/QuizRouter"));

var _QuizPublicRouter = _interopRequireDefault(require("./Routes/QuizPublicRouter"));

var _UsersRouter = _interopRequireDefault(require("./Routes/UsersRouter"));

_dotenv["default"].config();

var app = (0, _express["default"])(); // settings

app.use((0, _cors["default"])());
app.set('port', process.env.API_PORT || 9000);
app.set('secretKey', 'n&m#y20oBG09GX*awZuwC&C5Yde^lw4IWQHPz#S0GzgVZ@CSHx'); // middleware

app.use(_express["default"].json({
  limit: '10mb'
}));
app.use(_express["default"]["static"]('public')); // routes

app.use('/api/', _IndexRouter["default"]);
app.use('/api/quiz', _QuizPublicRouter["default"]);
app.use('/api/user', _UsersRouter["default"]);
app.use('/api/user/quiz', _QuizRouter["default"]);
app.listen(app.get('port'), /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _database["default"])();

        case 2:
          console.log('================================================');
          console.log("Server running on port ".concat(app.get('port')));
          console.log('================================================');

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));