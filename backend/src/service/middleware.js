const authMiddleware = (req, res, next) => {
  console.log(req.headers.token);
  if (req.headers.token) {
    next();
  } else res.status(401).send("No token presented in the headers");
};

module.exports = {
  authMiddleware,
};
