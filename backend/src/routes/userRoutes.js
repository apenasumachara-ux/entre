const express = require("express");
const userService = require("../services/userService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await userService.getUsers();

    res.json(users);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Erro ao buscar usuários"
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { username, email } = req.body;

    const user = await userService.createUser(
      username,
      email
    );

    res.status(201).json(user);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Erro ao criar usuário"
    });
  }
});


//deletar
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userService.deleteUser(id);

    res.json(user);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Erro ao excluir usuário"
    });
  }
});

//pra editar
router.put("/:id", async (req, res) => {
  console.log("PARAMS:", req.params);
  console.log("BODY:", req.body);

  try {
    const { id } = req.params;
    const { username, email } = req.body;

    const user = await userService.updateUser(
      id,
      username,
      email
    );

    res.json(user);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Erro ao atualizar usuário"
    });
  }
});


module.exports = router;