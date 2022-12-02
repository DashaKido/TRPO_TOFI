const authMiddleware = (req, res) => {
  if (req.headers.token) {
    res.next();
  }

  res.status(401).send("No token presented in the headers");
};

module.exports = {
  authMiddleware,
};
