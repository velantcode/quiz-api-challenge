/**
 * @apiDefine GlobalParamsErrors
 *
 * @apiError {String} error Mensaje de error.
 * @apiError {Object[]} errors Listado de errores en caso de existir (Solo aplica para validaciones de datos).
 */

/**
 * @apiDefine GlobalErrorSystem
 *
 * @apiErrorExample {json} Error server
 * HTTP/1.1 500 Error Internal Server
 * {
  "error": "error message"
}
 */

/**
 * @apiDefine GlobalUnauthorized
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
  "msg": "Disculpe, pero no se encontró una sesión activa."
}
 */

/* Quiz Error ID or Not Found */

/**
 * @apiDefine ErrorIdOrNotFoundQuiz
 *
 * @apiErrorExample {json} Not found option
 * HTTP/1.1 404 Not Found
 * {
  "error": "Disculpe, pero el Quiz seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {json} Error Option ID
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "error": "Disculpe, pero el Quiz seleccionado es incorrecto."
}
 */

/* Global user model */

/**
 * @apiDefine GlobalUserModel
 *
 * @apiSuccess (user Object) {String} _id ID del usuario.
 * @apiSuccess (user Object) {String} fullname Nombre completo del usuario.
 * @apiSuccess (user Object) {String} username Nombre de acceso del usuario.
 */
