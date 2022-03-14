import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.json({ error: 'token not provided' });

  const [prefix, token] = authorization.split(' ');

  if (prefix !== 'Bearer') return res.json({ error: 'badly formatted token' });

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) return res.json({ error: 'the token is invalid or expired' });
    req.id = decoded.id;
    next();
  });
};
