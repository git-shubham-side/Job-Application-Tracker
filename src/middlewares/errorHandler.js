const errorHandler = async function (err, req, res, next) {
  res.render("Server_Error/internel_server_error", { err });
};

module.exports = errorHandler;
