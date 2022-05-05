import express from 'express';

const Error404Router = express.Router();

// ===================================================================================

// Msg para rutas no encontradas
Error404Router.get('/', (req, res) => {
  res.status(404).json({
    error: 'No se logró obtener la información solicitada.',
  });
});

// ===================================================================================

export default Error404Router;
