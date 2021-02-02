const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/secret');

module.exports = (req, res, next) => {
  // add code here to verify users are logged in
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json('Your token is invalid. Please log in to continue.')
      } else {
        req.decodedJwt = decoded; // further middlewares will have this user info on the req object, so they dont have to recehck each step.
        next();
      }
    })
  } else {
    res.status(401).json('You are not authorized to do that.')
  }
};
