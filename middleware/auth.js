const jwt = require('jsonwebtoken');
const config = require('config');

const  auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied, no token provided!');

  try {
    req.user = jwt.verify(token, config.get('jwtPrivateKey'));
    next();
  } catch (e) {
    res.status(400).send('Invalid token');
  }

};

module.exports = auth;
