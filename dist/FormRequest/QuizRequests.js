"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.quizAnswerValidate = quizAnswerValidate;
exports.quizValidate = quizValidate;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _Validations = require("../Functions/Validations");

var getErrorForm = function getErrorForm() {
  return {
    error: 'Disculpe, pero no se logró obtener los datos del formulario.'
  };
};

function quizValidate(data) {
  var ret = {
    data: {
      title: '',
      description: '',
      questions: []
    },
    errors: []
  };

  if (!data) {
    ret.errors.push(getErrorForm());
    return ret;
  }

  var title = data.title,
      description = data.description,
      questions = data.questions;

  if (!(0, _Validations.checkTitlesOrDescriptions)(title)) {
    ret.errors.push({
      input: 'title',
      error: 'Disculpe, pero debe indicar el título para el Quiz.'
    });
  } else ret.data.title = "".concat(title).trim().toUpperCase();

  if (description) {
    if (!(0, _Validations.checkTitlesOrDescriptions)(description)) {
      ret.errors.push({
        input: 'description',
        error: 'Disculpe, pero debe indicar una descripción válida para el quiz. Debe contener al menos 5 caracteres.'
      });
    } else ret.data.description = "".concat(description).trim();
  } // questions check


  if (!Array.isArray(questions)) {
    ret.errors.push({
      input: 'questions',
      error: 'Disculpe, pero no se logró recibir las preguntas para el Quiz.'
    });
  } else if ((questions === null || questions === void 0 ? void 0 : questions.length) === 0) {
    ret.errors.push({
      input: 'questions',
      error: 'Disculpe, pero debe cargar al menos una pregunta para el quiz con sus respectivas respuestas.'
    });
  } else {
    var length = questions.length;

    for (var i = 0; i < length; i += 1) {
      if ((0, _typeof2["default"])(questions[i]) === 'object') {
        var _questions$i;

        /* title */
        if (!(0, _Validations.checkTitlesOrDescriptions)(questions[i].question)) {
          ret.errors.push({
            input: "question[".concat(i, "].question"),
            error: "Disculpe, pero debe indicar un t\xEDtulo para la pregunta: ".concat(i + 1, ".")
          });
          break;
        }
        /* values */


        if (!Array.isArray(questions[i].values)) {
          ret.errors.push({
            input: "question[".concat(i, "].values"),
            error: "Disculpe, pero debe indicar las posibles respuestas para la pregunta: ".concat(i + 1, ".")
          });
          break;
        } else if (questions[i].values.length < 2) {
          ret.errors.push({
            input: "question[".concat(i, "].values"),
            error: "Disculpe, pero debe indicar al menos 2 respuestas para la pregunta: ".concat(i + 1, ".")
          });
          break;
        }

        if (!/[0-9]{1}/.test("".concat(questions[i].answer)) || !((_questions$i = questions[i]) !== null && _questions$i !== void 0 && _questions$i.values[questions[i].answer])) {
          ret.errors.push({
            input: "question[".concat(i, "].answer"),
            error: "Disculpe, pero debe indicar la respuesta para la pregunta: ".concat(i + 1, ".")
          });
          break;
        }

        ret.data.questions.push({
          question: questions[i].question.trim().toUpperCase(),
          values: questions[i].values,
          answer: questions[i].answer
        });
      }
    }
  }

  return ret;
}

function quizAnswerValidate(_ref) {
  var answers = _ref.answers;
  var ret = {
    data: {
      answers: []
    },
    errors: []
  };

  if (!answers) {
    ret.errors.push(getErrorForm());
    return ret;
  } // answer check


  if (!Array.isArray(answers)) {
    ret.errors.push({
      input: 'answers',
      error: 'Disculpe, pero no se logró recibir las respuestas del Quiz.'
    });
  } else if ((answers === null || answers === void 0 ? void 0 : answers.length) === 0) {
    ret.errors.push({
      input: 'answers',
      error: 'Disculpe, pero no se recibieron las respuestas del Quiz.'
    });
  } else {
    var length = answers.length;

    for (var i = 0; i < length; i += 1) {
      if ((0, _typeof2["default"])(answers[i]) === 'object') {
        if (!(0, _Validations.checkObjectId)(answers[i]._id)) {
          ret.errors.push({
            input: 'answers',
            error: 'Disculpe, uno de los valores recibidos es incorrecto.'
          });
          break;
        }

        if (!/[0-9]{1}/.test("".concat(answers[i].answer))) {
          ret.errors.push({
            input: 'answers',
            error: "Disculpe, pero debe debe indicar la respuesta a la pregunta: ".concat(i + 1, ".")
          });
          break;
        }

        ret.data.answers.push({
          _id: answers[i]._id,
          answer: answers[i].answer
        });
      }
    }
  }

  return ret;
}

var _default = {
  quizValidate: quizValidate,
  quizAnswerValidate: quizAnswerValidate
};
exports["default"] = _default;