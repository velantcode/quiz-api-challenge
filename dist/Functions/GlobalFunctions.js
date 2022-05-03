"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getResponse = getResponse;
exports.getResponseError = getResponseError;
exports.returnErrorParams = returnErrorParams;
exports.setDate = setDate;
exports.showConsoleError = showConsoleError;
exports.showConsoleLog = showConsoleLog;

var _dayjs = _interopRequireDefault(require("dayjs"));

function showConsoleError(pathFile, error) {
  console.error("".concat((0, _dayjs["default"])().toISOString(), " - Error: ").concat(pathFile));
  console.error("".concat(error));
}

function showConsoleLog(msg) {
  console.log("".concat((0, _dayjs["default"])().toISOString(), " - ").concat(msg));
}

function setDate() {
  return (0, _dayjs["default"])().unix();
}

function getResponse(res, dataRet) {
  var data = dataRet.data,
      token = dataRet.token,
      msg = dataRet.msg,
      errors = dataRet.errors,
      error = dataRet.error;
  return res.status(dataRet.status || 500).json({
    msg: msg,
    data: data,
    token: token,
    error: error,
    errors: errors
  });
}

function returnErrorParams(res) {
  var errors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return res.status(422).json({
    msg: '¡Error en los parámetros!',
    errors: errors
  });
}

function getResponseError(res, err, pathFile) {
  showConsoleError("".concat(pathFile), err);
  return res.status(500).json({
    status: 'error',
    ok: false,
    err: (err === null || err === void 0 ? void 0 : err.toString()) || 'Error desconocido.'
  });
}

var _default = {
  getResponse: getResponse,
  getResponseError: getResponseError,
  setDate: setDate,
  showConsoleError: showConsoleError,
  showConsoleLog: showConsoleLog
};
exports["default"] = _default;