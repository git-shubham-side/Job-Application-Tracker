const bcrypt = require("bcrypt");
const User = require("../models/User");

// Controllers - Routes
// POST: /api/v1/signup

const registerPostController = async function (req, res) {
  const { firstName, lastName, email, terms, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    //User Regestraion Using Signup

    const user = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      terms: terms === "on",
      password: hashedPassword,
    });
    user.save();

    // Redirection Line : 23
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//GET : /api/v1/signup
const registerGetController = async function (req, res) {
  res.render("Signup/signup");
};

module.exports = { registerPostController, registerGetController };
