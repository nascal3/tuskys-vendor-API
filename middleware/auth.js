const jwt = require('jsonwebtoken');
const config = require('config');

const  auth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({'Error':'Access denied, no token provided!'});

  try {
    req.user = jwt.verify(token, config.get('jwtPrivateKey'));
    next();
  } catch (e) {
    res.status(400).send('Invalid token');
  }

};

module.exports = auth;
