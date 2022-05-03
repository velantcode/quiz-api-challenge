import jwt from 'jsonwebtoken';

const responseError = (res, err) => res.status(401).json({ err });

const getToken = (req) => (req ? req.headers['x-access-token'] || req.headers.Authorization : null);

export function validateToken(req, res, next) {
  const token = getToken(req);
  const secretKey = req?.app?.settings?.secretKey;

  if (token && secretKey) {
    return jwt.verify(token, secretKey, async (err, decoded) => {
      if (err) return responseError(res, err.toString());
      if (decoded) {
        req.body.tokenId = decoded._id;
        req.body.token = token;
        return next();
      }

      return responseError(res, 'Token is trash');
    });
  }
  return responseError(res, 'Token not found');
}

export function validatePublicToken(req, res, next) {
  const token = getToken(req);
  const secretKey = req?.app?.settings?.secretKey;

  if (token && secretKey) {
    return jwt.verify(token, secretKey, async (err, decoded) => {
      if (err) return responseError(res, err.toString());
      if (decoded) {
        req.body.tokenId = decoded._id;
        req.body.token = token;
      }
      return next();
    });
  }
  return next();
}
