//LOGIN Controllers

// Path :Get -> /api/v1/login
const loginGetController = async function (req, res) {
  res.render("Login/login");
};

// Path :POST -> /api/v1/login
const loginPostController = async function (req, res) {
  console.log(req.body);
};

module.exports = { loginPostController, loginGetController };
