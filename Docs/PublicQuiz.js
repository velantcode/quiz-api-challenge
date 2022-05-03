/**
 * @api {get} /api/quiz (00) Obtener listado de quiz.
 * @apiVersion 1.0.0
 * @apiName getListPublicQuiz
 * @apiGroup PublicQuiz
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} data Datos de retorno.
 *
 * @apiSuccess (data Object[]) {String} _id ID del Quiz.
 * @apiSuccess (data Object[]) {String} title Título del Quiz.
 * @apiSuccess (data Object[]) {String|Null} description Descripción del Quiz
 * @apiSuccess (data Object[]) {Object} user Datos del usuario que creó el Quiz.
 * @apiSuccess (data Object[]) {Number} totalQuestions Total de preguntas del quiz.
 *
 * @apiUse GlobalUserModel
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Listado de quiz.",
  "data": [
    {
      "_id": "6270bd5e2ffb61ff5b660e21",
      "title": "TITULO",
      "description": "Descripción",
      "user": {
        "_id": "6270a54269f50b892fc76ff8",
        "username": "velant",
        "fullname": "ANTHONY A. VELÁSQUEZ"
      },
      "totalQuestions": 3
    }
  ]
}
 *
 * @apiSuccessExample {JSON} Success empty
 * HTTP/1.1 200 Success
 * {
  "msg": "Listado de quiz.",
  "data": []
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/quiz/:quizId (01) Obtener detalles de un Quiz.
 * @apiVersion 1.0.0
 * @apiName showPublicQuiz
 * @apiGroup PublicQuiz
 *
 * @apiParam (Path Param) {String} quizId ID del Quiz.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de retorno.
 *
 * @apiSuccess (data Object) {String} _id ID del Quiz.
 * @apiSuccess (data Object) {String} title Título del Quiz.
 * @apiSuccess (data Object) {String|Null} description Descripción del Quiz.
 * @apiSuccess (data Object) {Object} user Datos del usuario que creó el Quiz.
 * @apiSuccess (data Object) {Object[]} questions Listado de preguntas del Quiz.
 * @apiSuccess (data Object) {Number} totalQuestions Total de preguntas del Quiz.
 *
 * @apiUse GlobalUserModel
 *
 * @apiSuccess (questions Object[]) {String} _id ID de la pregunta.
 * @apiSuccess (questions Object[]) {String} question Pregunta a realizar.
 * @apiSuccess (questions Object[]) {String[]} values Listado de posibles respuestas.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Quiz.",
  "data": {
    "_id": "6270bd5e2ffb61ff5b660e21",
    "title": "TITULO",
    "description": "Descripción",
    "user": {
      "_id": "6270e1bf16a96b8601876311",
      "username": "velantcode",
      "fullname": "ANTHONY A. VELÁSQUEZ"
    },
    "questions": [
      {
        "question": "PREGUNTA 1",
        "values": [
          "Respuesta 1",
          "Respuesta 2",
          "Respuesta 3",
          "Respuesta 4",
          "Respuesta 5"
        ],
        "_id": "6270bd5e2ffb61ff5b660e22"
      },
      .
      .
      .
    ],
    "totalQuestions": 3
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse ErrorIdOrNotFoundQuiz
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {post} /api/quiz/quizId/:quizId (02) Procesar respuesta de un Quiz.
 * @apiVersion 1.0.0
 * @apiName processAnswersPublicQuiz
 * @apiGroup PublicQuiz
 * @apiDescription Servicio para poder procesar las respuestas para un Quiz. El token de la sesión es opcional. Si el usuario
 * se encuentra con usa sesión activa, se guardará un histórico de las veces que ha realizado el Quiz, caso contrario no se guardan registros.
 *
 * @apiHeader {String} x-access-token Token de la sesión (opcional).
 *
 * @apiParam (Path Param) {String} quizId ID del Quiz.
 *
 * @apiParam {Object[]} answers Listado de respuestas
 *
 * @apiParam (answers object[]) {String} _id ID de la pregunta.
 * @apiParam (answers object[]) {Number} answer Valor de respuesta.
 *
 * @apiExample {JSON} Example JSON Request
 * {
  "answers": [
    {
      "_id": "6270bd5e2ffb61ff5b660e22",
      "answer": 1
    },
    .
    .
    .
  ]
}
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de retorno.
 *
 * @apiSuccess (data Object) {Number} totalCorrectAnswers Total de respuestas correctas.
 * @apiSuccess (data Object) {Number} totalIncorrectAnswers Total de respuestas incorrectas.
 * @apiSuccess (data Object) {Object[]} allCorrectAnswer Listado de respuestas correctas del Quiz.
 *
 * @apiSuccess (allCorrectAnswer Object[]) {String} _id ID de la pregunta
 * @apiSuccess (allCorrectAnswer Object[]) {Number} answer Valor de la respuesta correcta.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Quiz procesado exitosamente.",
  "data": {
    "totalCorrectAnswers": 0,
    "totalIncorrectAnswers": 3,
    "allCorrectAnswer": [
      {
        "answer": 3,
        "_id": "6270bd5e2ffb61ff5b660e22"
      },
      .
      .
      .
    ]
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse ErrorIdOrNotFoundQuiz
 *
 * @apiErrorExample {json} Validations errors
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "error": "¡Error en los parámetros!",
    "errors": [
      {
        "error": "Disculpe, pero no se logró obtener los datos del formulario."
      },
      {
        "input": "answers",
        "error": "Disculpe, pero no se logró recibir las respuestas del Quiz."
      },
      {
        "input": "answers",
        "error": "Disculpe, pero no se recibieron las respuestas del Quiz."
      },
      {
        "input": "answers",
        "error": "Disculpe, uno de los valores recibidos es incorrecto."
      },
      {
        "input": "answers",
        "error": "Disculpe, pero debe debe indicar la respuesta a la pregunta: 3."
      }
    ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */
