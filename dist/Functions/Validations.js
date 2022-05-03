"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkNameOrLastName = checkNameOrLastName;
exports.checkObjectId = checkObjectId;
exports.checkTitlesOrDescriptions = checkTitlesOrDescriptions;
exports["default"] = void 0;

function checkObjectId(id) {
  return /^[0-9a-fA-F]{24}$/.test(id);
}

function checkNameOrLastName(value) {
  return value && /^([A-Z\u00C0-\u024F\u1E00-\u1EFF]?)+([[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+[,.]?[ ]?|[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+['-]]?)+$/.test("".concat(value));
}

function checkTitlesOrDescriptions(value) {
  return value && /^[a-zA-ZÁÉÍÓÚÀÈÌÒÙàèìòùáéíóúÂÊÎÔÛâêîôûÄËÏÖÜäëïöüñÑ0-9\s.,#*?¿¡!()\-+"'/@]{3,2000}/g.test("".concat(value));
}

var _default = {
  checkObjectId: checkObjectId,
  checkNameOrLastName: checkNameOrLastName,
  checkTitlesOrDescriptions: checkTitlesOrDescriptions
};
exports["default"] = _default;