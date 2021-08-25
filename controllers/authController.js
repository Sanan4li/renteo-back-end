var HttpStatus = require("http-status-codes");
const Users = require("../models/Users");
const { createToken } = require("../utilities/utilities");
const { handleSignupErrors } = require("../HandlingErrors/validationErrors");
const loginUser_post = async (req, res) => {
  try {
    const result = await Users.login(req.body.email, req.body.password);
    const token = createToken(result._id);
    const information = {
      token: token,
      userName: result.userName,
      email: result.email,
    };
    res.status(HttpStatus.OK).send(information);
  } catch (err) {
    console.log(err);
  }
};
const signupUser_post = async (req, res) => {
  try {
    const result = await Users.create({
      email: req.body.email,
      userName: req.body.userName,
      password: req.body.password,
    });
    const token = createToken(result._id);
    const information = {
      token: token,
      userName: result.userName,
      email: result.email,
    };
    res.status(HttpStatus.OK).send(information);
  } catch (err) {
    const errorMessage = handleSignupErrors(err);
    res.status(HttpStatus.BAD_REQUEST).send(errorMessage);
  }
};

module.exports = {
  loginUser_post,
  signupUser_post,
};
