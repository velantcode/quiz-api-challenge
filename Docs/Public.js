/**
 * @apiDefine SuccessAccessLoginWithToken
 *
 * @apiSuccess (data Object) {String} token Token de sesión.
 * @apiSuccess (data Object) {Object} Datos del usuario.
 *
 * @apiUse GlobalUserModel
 *
 * */

/**
 * @api {get} / (00) Test API
 * @apiVersion 1.0.0
 * @apiName test1Api
 * @apiGroup Public
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Api Quiz 2022"
}
 *
 */

/**
 * @api {get} /api/ (00) Test API
 * @apiVersion 1.0.0
 * @apiName test2Api
 * @apiGroup Public
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Api Quiz 2022"
}
 *
 */

/**
 * @api {post} /api/register (01) Registro de usuario.
 * @apiVersion 1.0.0
 * @apiName registerPublic
 * @apiGroup Public
 *
 * @apiParam (Body params) {String} fullname Nombre del usuario.
 * @apiParam (Body params) {String} username Usuario de acceso.
 * @apiParam (Body params) {String} password Contraseña del usuario.
 *
 * @apiExample {JSON} Example JSON Request
 * {
  "fullname": "Anthony Velásquez",
  "username": "velantcode",
  "password": "123456"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de retorno.
 *
 * @apiUse SuccessAccessLoginWithToken
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha registrado exitosamente.",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjcwZDA2NThjNTA3NWE5ZjdjN2VjMjciLCJpYXQiOjE2NTE1NjA1NDksImV4cCI6MTY4MzExODE0OX0.8cX-WwuZEv3fKL-8iHz0aaVFTzcepLn_0_lCqwDCYHE",
    "user": {
      "_id": "6270d0658c5075a9f7c7ec27",
      "fullname": "ANTHONY VELÁSQUEZ",
      "username": "velantcode"
    }
  }
}
 *
 * @apiUse GlobalParamsErrors
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

/**
 * @api {post} /api/login (02) Inicio de sesión.
 * @apiVersion 1.0.0
 * @apiName loginPublic
 * @apiGroup Public
 *
 * @apiParam (Body params) {String} username Usuario de acceso.
 * @apiParam (Body params) {String} password Contraseña del usuario.
 *
 * @apiExample {JSON} Example JSON Request
 * {
  "username": "velantcode",
  "password": "123456"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de retorno.
 *
 * @apiUse SuccessAccessLoginWithToken
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Ha accedido exitosamente.",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjcwZDA2NThjNTA3NWE5ZjdjN2VjMjciLCJpYXQiOjE2NTE1NjA1NDksImV4cCI6MTY4MzExODE0OX0.8cX-WwuZEv3fKL-8iHz0aaVFTzcepLn_0_lCqwDCYHE",
    "user": {
      "_id": "6270d0658c5075a9f7c7ec27",
      "fullname": "ANTHONY VELÁSQUEZ",
      "username": "velantcode"
    }
  }
}
 *
 * @apiUse GlobalParamsErrors
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
      "error": "Disculpe, pero debe indicar su nombre de usuario."
    },
    {
      "input": "password",
      "error": "Disculpe, pero debe indicar su contraseña."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {post} /api/reset-password (03) Reinicio de contraseña.
 * @apiVersion 1.0.0
 * @apiName resetPasswordPublic
 * @apiGroup Public
 *
 * @apiParam (Body params) {String} username Usuario de acceso.
 *
 * @apiExample {JSON} Example JSON Request
 * {
  "username": "velantcode"
}
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Su acceso fue reiniciado exitosamente. Su nueva contraseña es: 123456"
}
 *
 * @apiUse GlobalParamsErrors
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
      "error": "Disculpe, pero debe indicar su nombre de usuario."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */
