require("dotenv").config();

const userService = require("./services/userService");

async function run() {
  try {
    const created = await userService.createUser();
    console.log("Usuário criado:", created);

    const users = await userService.getUsers();
    console.log("Lista de usuários:", users);
  } catch (err) {
    console.error(err);
  }
}

run();