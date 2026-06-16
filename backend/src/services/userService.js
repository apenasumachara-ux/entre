const userModel = require("../models/userModel");

async function getUsers() {
  return await userModel.findAll();
}

async function createUser(username, email) {
  const existingUser =
    await userModel.findByEmail(email);

  if (existingUser) {
    throw new Error("Email já cadastrado");
  }

  return await userModel.create({
    username,
    email,
    avatar: null,
    discord_id: null,
    github_id: null
  });
}

async function updateUser(
  id,
  username,
  email
) {
  return await userModel.update(
    id,
    username,
    email
  );
}

async function deleteUser(id) {
  return await userModel.remove(id);
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};