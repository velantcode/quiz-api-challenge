/**
 * @api {get} /api/user (00) Obtener los datos de la sesión.
 * @apiVersion 1.0.0
 * @apiName getSessionUsers
 * @apiGroup Users
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Datos de la sesión.",
  "data": {
    "user": {
      "_id": "6270a54269f50b892fc76ff8",
      "username": "velant",
      "fullname": "ANTHONY A. VELÁSQUEZ",
      "createdAt": 1651549506,
      "updatedAt": 1651549506
    },
    "totalQuiz": 1,
    "totalQuizHistorical": 4
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

/**
 * @api {put} /api/user (01) Actualizar datos de un usuario.
 * @apiVersion 1.0.0
 * @apiName updateDataUsers
 * @apiGroup Users
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Body params) {String} fullname Nombre del usuario.
 * @apiParam (Body params) {String} username Usuario de acceso.
 *
 * @apiExample {JSON} Example JSON Request
 * {
  "fullname": "Anthony Alejandro Velásquez",
  "username": "velantcode"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} data Datos de retorno.
 *
 * @apiSuccess (data Object) {String} _id ID del usuario.
 * @apiSuccess (data Object) {String} username Nombre de acceso del usuario.
 * @apiSuccess (data Object) {String} fullname Nombre completo del usuario.
 * @apiSuccess (data Object) {Number} createdAt Fecha de registro (formato unix)..
 * @apiSuccess (data Object) {Number} updatedAt Fecha de la última actualización del perfil (formato unix)..
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha actualizado la información de su cuenta exitosamente.",
  "data": {
    "user": {
      "_id": "6270a54269f50b892fc76ff8",
      "username": "velantcode",
      "fullname": "ANTHONY ALEJANDRO VELÁSQUEZ",
      "createdAt": 1651549506,
      "updatedAt": 1651549506
    }
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
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
      "input": "username",
      "error": "Disculpe, pero debe indicar un nombre de usuario con al menos 3 caracteres sin espacions (a-z, A-Z, 0-9)."
    },
    {
      "input": "fullname",
      "error": "Disculpe, pero debe indicar un nombre válido. Solo se permiten letras: a-z o A-Z)."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/user/change-password (02) Cambiar contraseña.
 * @apiVersion 1.0.0
 * @apiName changePasswordUsers
 * @apiGroup Users
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Body params) {String} password Nueva contraseña.
 *
 * @apiExample {JSON} Example JSON Request
 * {
  "password": "654321"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha cambiado la contraseña exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
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
      "input": "password",
      "error": "Disculpe, pero debe indicar una contraseña válida. Debe contener al menos 3 caracteres, con letras (a-zA-Z), números (0-9) o caracteres especiales (.,\-+#$%&*)."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */
