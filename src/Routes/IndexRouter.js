import express from 'express';
import { login, register, resetPassword } from '../Controllers/PublicController';

const IndexRoute = express.Router();

// ===================================================================================

// ruta de pruebas
/**
 * @api {get} / check test server
 * @apiName test
 * @apiGroup testing
 */
IndexRoute.get('/', (req, res) => {
  res.json({
    msg: 'Api Quiz 2022',
  });
});

/*
  login, register and reset password
*/
IndexRoute.post('/login', login);
IndexRoute.post('/register', register);
IndexRoute.post('/reset-password', resetPassword);

// ===================================================================================

export default IndexRoute;
