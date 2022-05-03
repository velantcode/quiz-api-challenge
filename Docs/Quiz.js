/**
 * @apiDefine ValidationsQuiz
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
      "input": "title",
      "error": "Disculpe, pero debe indicar el título para el Quiz."
    },
    {
      "input": "description",
      "error": "Disculpe, pero debe indicar una descripción válida para el quiz. Debe contener al menos 5 caracteres."
    },
    {
      "input": "questions",
      "error": "Disculpe, pero no se logró recibir las preguntas para el Quiz."
    },
    {
      "input": "questions",
      "error": "Disculpe, pero debe cargar al menos una pregunta para el quiz con sus respectivas respuestas."
    },
    {
      "input": "questions",
      "error": "Disculpe, pero debe cargar al menos una pregunta para el quiz con sus respectivas respuestas."
    },
    {
      "input": "question[0].question",
      "error": "Disculpe, pero debe indicar un título para la pregunta: 1."
    },
    {
      "input": "question[0].values",
      "error": "Disculpe, pero debe indicar las posibles respuestas para la pregunta: 1."
    },
    {
      "input": "question[0].values",
      "error": "Disculpe, pero debe indicar al menos 2 respuestas para la pregunta: 1."
    },
    {
      "input": "question[0].answer",
      "error": "Disculpe, pero debe indicar la respuesta para la pregunta: 1."
    }
  ]
}
 * */

/**
 * @api {get} /api/user/quiz (00) Listado de quiz registrados por el usuario
 * @apiVersion 1.0.0
 * @apiName getSessionUsersQuiz
 * @apiGroup UsersQuiz
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} data Datos de retorno.
 *
 * @apiSuccess (data Object[]) {String} _id ID del Quiz.
 * @apiSuccess (data Object[]) {String} title Título del Quiz.
 * @apiSuccess (data Object[]) {String|Null} description Descripción del Quiz.
 * @apiSuccess (data Object[]) {String} totalQuestions Total de preguntas del Quiz..
 * @apiSuccess (data Object[]) {Number} createdAt Fecha de registro del Quiz (formato unix)..
 * @apiSuccess (data Object[]) {Number} updatedAt Fecha de la última actualización del Quiz (formato unix)..
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Listado de quiz.",
  "data": [
    {
      "_id": "6270b4dad751e0462d38b8d1",
      "title": "TITULO",
      "description": "Descripción",
      "totalQuestions": 3,
      "createAt": 1651553498,
      "updateAt": 1651553498
    },
    .
    .
    .
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
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {post} /api/user/quiz (01) Agregar Quiz
 * @apiVersion 1.0.0
 * @apiName addDataUsersQuiz
 * @apiGroup UsersQuiz
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Body params) {String} title Título del Quiz.
 * @apiParam (Body params) {String|Null} description Descripción del Quiz.
 * @apiParam (Body params) {Object[]} questions Listado de preguntas del Quiz.
 *
 * @apiParam (questions Object[]) {String} question Pregunta a realizar.
 * @apiParam (questions Object[]) {String[]} values Listado de posibles respuestas.
 * @apiParam (questions Object[]) {Number} answer ID (array index) de la respuesta correcta.
 *
 * @apiExample {JSON} Example JSON Request
 * {
  "title": "Titulo",
  "description": "Descripción",
  "questions": [
    {
      "question": "Pregunta 1",
      "values": [
        "Respuesta 1",
        "Respuesta 2",
        "Respuesta 3",
        "Respuesta 4",
        "Respuesta 5"
      ],
      "answer": 3
    },
    .
    .
    .
  ]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} data Datos de retorno.
 *
 * @apiSuccess (data Object) {String} _id ID del Quiz.
 * @apiSuccess (data Object) {String} title Título del Quiz.
 * @apiSuccess (data Object) {String|Null} description Descripción del Quiz.
 * @apiSuccess (data Object) {Object[]} questions Listado de preguntas del Quiz.
 * @apiSuccess (data Object) {Number} totalQuestions Total de preguntas del Quiz.
 * @apiSuccess (data Object) {Number} createdAt Fecha de registro del Quiz (formato unix).
 * @apiSuccess (data Object) {Number} updatedAt Fecha de la última actualización del Quiz (formato unix).
 *
 * @apiSuccess (questions Object[]) {String} _id ID de la pregunta.
 * @apiSuccess (questions Object[]) {String} question Pregunta a realizar.
 * @apiSuccess (questions Object[]) {String[]} values Listado de posibles respuestas.
 * @apiSuccess (questions Object[]) {Number} answer ID (array index) de la respuesta correcta.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha agregado el quiz exitosamente.",
  "data": {
    "_id": "6270bd5e2ffb61ff5b660e21",
    "title": "TITULO",
    "description": "Descripción",
    "questions": [
      {
        "_id": "6270bd5e2ffb61ff5b660e22",
        "question": "PREGUNTA 1",
        "values": [
          "Respuesta 1",
          "Respuesta 2",
          "Respuesta 3",
          "Respuesta 4",
          "Respuesta 5"
        ],
        "answer": 3
      },
      .
      .
      .
    ],
    "totalQuestions": 3,
    "createAt": 1651555678,
    "updateAt": 1651555678
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ValidationsQuiz
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/user/quiz/:quizId (02) Obtener detalles del Quiz.
 * @apiVersion 1.0.0
 * @apiName getDataUsersQuiz
 * @apiGroup UsersQuiz
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam {String} quizId ID del Quiz.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} data Datos de retorno.
 *
 * @apiSuccess (data Object) {String} _id ID del Quiz.
 * @apiSuccess (data Object) {String} title Título del Quiz.
 * @apiSuccess (data Object) {String|Null} description Descripción del Quiz.
 * @apiSuccess (data Object) {Object[]} questions Listado de preguntas del Quiz.
 * @apiSuccess (data Object) {Number} totalQuestions Total de preguntas del Quiz.
 * @apiSuccess (data Object) {Number} createdAt Fecha de registro del Quiz (formato unix).
 * @apiSuccess (data Object) {Number} updatedAt Fecha de la última actualización del Quiz (formato unix).
 *
 * @apiSuccess (questions Object[]) {String} _id ID de la pregunta.
 * @apiSuccess (questions Object[]) {String} question Pregunta a realizar.
 * @apiSuccess (questions Object[]) {String[]} values Listado de posibles respuestas.
 * @apiSuccess (questions Object[]) {Number} answer ID (array index) de la respuesta correcta.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Quiz.",
  "data": {
    "_id": "6270bd5e2ffb61ff5b660e21",
    "title": "TITULO",
    "description": "Descripción",
    "questions": [
      {
        "_id": "6270bd5e2ffb61ff5b660e22",
        "question": "PREGUNTA 1",
        "values": [
          "Respuesta 1",
          "Respuesta 2",
          "Respuesta 3",
          "Respuesta 4",
          "Respuesta 5"
        ],
        "answer": 3
      },
      .
      .
      .
    ],
    "totalQuestions": 3,
    "createAt": 1651555678,
    "updateAt": 1651555678
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ErrorIdOrNotFoundQuiz
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/user/quiz/:quizId (03) Actualizar un Quiz.
 * @apiVersion 1.0.0
 * @apiName updateDataUsersQuiz
 * @apiGroup UsersQuiz
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam {String} quizId ID del Quiz.
 *
 * @apiParam (Body params) {String} title Título del Quiz.
 * @apiParam (Body params) {String|Null} description Descripción del Quiz.
 * @apiParam (Body params) {Object[]} questions Listado de preguntas del Quiz.
 *
 * @apiParam (questions Object[]) {String} _id ID de la pregunta.
 * @apiParam (questions Object[]) {String} question Pregunta a realizar.
 * @apiParam (questions Object[]) {String[]} values Listado de posibles respuestas.
 * @apiParam (questions Object[]) {Number} answer ID (array index) de la respuesta correcta.
 *
 * @apiExample {JSON} Example JSON Request
 * {
  "title": "Titulo editado",
  "description": "Descripción editado",
  "questions": [
    {
      "_id": "6270b4dad751e0462d38b8d2",
      "question": "Pregunta 1 editada",
      "values": [
        "Respuesta 1 editada",
        "Respuesta 2 editada",
        "Respuesta 3"
      ],
      "answer": 1
    },
    .
    .
    .
  ]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} data Datos de retorno.
 *
 * @apiSuccess (data Object) {String} _id ID del Quiz.
 * @apiSuccess (data Object) {String} title Título del Quiz.
 * @apiSuccess (data Object) {String|Null} description Descripción del Quiz.
 * @apiSuccess (data Object) {Object[]} questions Listado de preguntas del Quiz.
 * @apiSuccess (data Object) {Number} totalQuestions Total de preguntas del Quiz.
 * @apiSuccess (data Object) {Number} createdAt Fecha de registro del Quiz (formato unix).
 * @apiSuccess (data Object) {Number} updatedAt Fecha de la última actualización del Quiz (formato unix).
 *
 * @apiSuccess (questions Object[]) {String} _id ID de la pregunta.
 * @apiSuccess (questions Object[]) {String} question Pregunta a realizar.
 * @apiSuccess (questions Object[]) {String[]} values Listado de posibles respuestas.
 * @apiSuccess (questions Object[]) {Number} answer ID (array index) de la respuesta correcta.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha actualizado el quiz exitosamente.",
  "data": {
    "_id": "6270bd5e2ffb61ff5b660e21",
    "title": "TITULO EDITADO",
    "description": "Descripción editado",
    "questions": [
      {
        "_id": "6270bd5e2ffb61ff5b660e22",
        "question": "PREGUNTA 1",
        "values": [
          "Respuesta 1 editada",
          "Respuesta 2 editada",
          "Respuesta 3"
        ],
        "answer": 1
      },
      .
      .
      .
    ],
    "totalQuestions": 2,
    "createAt": 1651553498,
    "updateAt": 1651554288
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ErrorIdOrNotFoundQuiz
 *
 * @apiUse ValidationsQuiz
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/user/quiz/:quizId (04) Eliminar un Quiz.
 * @apiVersion 1.0.0
 * @apiName deleteUsersQuiz
 * @apiGroup UsersQuiz
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path Param) {String} quizId ID del Quiz.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha eliminado el quiz exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ErrorIdOrNotFoundQuiz
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/user/quiz/historical (05) Obtener histórico de Quiz realizados.
 * @apiVersion 1.0.0
 * @apiName historicalUsersQuiz
 * @apiGroup UsersQuiz
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de retorno.
 *
 * @apiSuccess (data Object) {Object[]} history Listado de Quiz realizados.
 * @apiSuccess (data Object) {Object[]} quizList Listado de datos de los Quiz.
 *
 * @apiSuccess (history Object[]) {String} _id ID del histórico.
 * @apiSuccess (history Object[]) {String} quizID ID del Quiz realizado.
 * @apiSuccess (history Object[]) {Boolean} approved Indica si respondió correctamente el Quiz.
 * @apiSuccess (history Object[]) {Number} correctAnswers Total de respuestas correctas.
 * @apiSuccess (history Object[]) {Number} incorrectAnswers Total de respuestas incorrectas.
 * @apiSuccess (history Object[]) {Number} createdAt Fecha de cuando realizó el Quiz.
 *
 * @apiSuccess (quizList Object[]) {String} _id ID del Quiz.
 * @apiSuccess (quizList Object[]) {String} title Título del Quiz.
 * @apiSuccess (quizList Object[]) {String|Null} description Descripción del Quiz.
 * @apiSuccess (quizList Object[]) {Number} totalQuestions Total de preguntas del Quiz.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Historico de Quiz.",
  "data": {
    "history": [
      {
        "_id": "6270c8f475a8f7eae49a133d",
        "quizId": "6270bd5e2ffb61ff5b660e21",
        "approved": false,
        "correctAnswers": 0,
        "incorrectAnswers": 0,
        "createdAt": 1651558644
      }
    ],
    "quizList": [
      {
        "_id": "6270bd5e2ffb61ff5b660e21",
        "title": "TITULO",
        "description": "Descripción",
        "totalQuestions": 3
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
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 *
 */
