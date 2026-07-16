const isAuthenticated = function (req, res, next) {
  if (req.session.userId) {
    return next();
  }
  return res.redirect("/api/v1/login");
};

module.exports = isAuthenticated;
