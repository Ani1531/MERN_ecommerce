exports.AuthSignin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.JWT_TOKEN);
  req.user = user;
  next();
};
