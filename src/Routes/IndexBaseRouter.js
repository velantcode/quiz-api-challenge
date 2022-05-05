import express from 'express';

const IndexRoute = express.Router();

// ===================================================================================

// ruta de pruebas
IndexRoute.get('/', (req, res) => {
  res.json({
    msg: 'Api Quiz 2022',
  });
});

// ===================================================================================

export default IndexRoute;
