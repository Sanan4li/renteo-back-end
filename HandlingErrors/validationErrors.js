var HttpStatus = require("http-status-codes");

const handleSignupErrors = (err) => {
  let errors = {};
  if (err.code == 11000) {
    errors.type = "DuplicationError";
    errors.status = HttpStatus.BAD_REQUEST;
    errors[Object.keys(err.keyPattern)[0]] = "Account already exists!";
  }
  if (err.message.includes("user validation failed")) {
    const errorKey = Object.keys(err.errors)[0];
    errors.type = "ValidationError";
    errors.status = HttpStatus.BAD_REQUEST;
    const error = err.errors[Object.keys(err.errors)[0]].properties.message;
    errors[errorKey] = error;
  }
  return errors;
};
module.exports = {
  handleSignupErrors,
};
