const { findUserByEmail } = require("../users/user.controller");
const { comparePasswords } = require("../utils/crypto");

const checkUserCredentials = async (email, password) => {
  const user =await findUserByEmail(email);
  const validatePassword = comparePasswords(password, user.password);
  return validatePassword ? user : false;
};

module.exports = checkUserCredentials;