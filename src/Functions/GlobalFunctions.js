import dayjs from 'dayjs';

export function showConsoleError(pathFile, error) {
  console.error(`${dayjs().toISOString()} - Error: ${pathFile}`);
  console.error(`${error}`);
}

export function showConsoleLog(msg) {
  console.log(`${dayjs().toISOString()} - ${msg}`);
}

export function setDate() {
  return dayjs().unix();
}

export function getResponse(res, dataRet) {
  const { data, token, msg, errors, error } = dataRet;

  return res.status(dataRet.status || 500).json({
    msg,
    data,
    token,
    error,
    errors,
  });
}

export function returnErrorParams(res, errors = []) {
  return res.status(422).json({
    msg: '¡Error en los parámetros!',
    errors,
  });
}

export function getResponseError(res, err, pathFile) {
  showConsoleError(`${pathFile}`, err);
  return res.status(500).json({
    status: 'error',
    ok: false,
    err: err?.toString() || 'Error desconocido.',
  });
}

export default {
  getResponse,
  getResponseError,
  setDate,
  showConsoleError,
  showConsoleLog,
};
