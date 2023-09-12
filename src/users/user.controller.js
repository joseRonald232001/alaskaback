const Users = require("../models/user.model");
const uuid = require("uuid");
const { hashPassword } = require("../utils/crypto");


const findAllUsers = async () => {
  const users = await Users.findAll();
  return users;
};

const findUserById = async (id) => {
  const data = await Users.findOne({
    where: { id: id },
  });
  return data;
};

const findUserByEmail = async (email) => {
  const data = await Users.findOne({
    where: { email: email },
  });
  return data;
};

const createUser = async (userObj) => {

  const newUser = await Users.create({
    id: uuid.v4(),
    name: userObj.name,
    avatar: userObj.avatar,
    lastName: userObj.lastName,
    userName: userObj.userName,
    email: userObj.email,
    password: hashPassword(userObj.password),
    role:userObj.role
  });
  return newUser;
};

const updateUser = async (id, userObj) => {
  const selectedUser = await Users.findOne({
    where: { id: id },
  });
  if (!selectedUser) return null;
  const usuarioModificado = await selectedUser.update(userObj);
  return usuarioModificado;
};

const deleteUser = async (id) => {
  const user = await Users.destroy({
    where: { id: id },
  });
  return user;
};

module.exports = {
  deleteUser,
  updateUser,
  createUser,
  findAllUsers,
  findUserByEmail,
  findUserById,
};
