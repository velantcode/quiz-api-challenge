import jwt from 'jsonwebtoken';

export default async function generateToken(req, data) {
  const secretKey = req?.app?.settings?.secretKey;
  const token = jwt.sign({ _id: data._id }, secretKey, { expiresIn: '1y' });
  if (!token) return null;
  return token;
}
