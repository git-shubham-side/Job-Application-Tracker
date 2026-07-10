const User = require("../models/User");

// Controllers - Routes
// POST: /api/v1/signup
const registerPostController = async function (req, res, next) {
  const { firstName, lastName, email, terms, password } = req.body;

  try {
    //If the Users does not sends the data properly
    if (!firstName || !lastName || !email || !terms || !password) {
      return res.status(400).json({ message: "please enter all fields data" });
    }

    //Saving the user in the database
    const user = await User.create({
      firstName,
      lastName,
      email,
      terms: terms === "on",
      password,
    });

    //Storing User Id into Session
    req.session.userId = user._id;

    // Redirection Link : /api/v1/dashboard
    // When user successfully creates an account and redirect to Dashboard
    return res.redirect("/api/v1/dashboard");
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }

    next(err);
  }
};

//GET : /api/v1/signup
const registerGetController = async function (req, res) {
  res.render("Signup/signup");
};

module.exports = { registerPostController, registerGetController };
