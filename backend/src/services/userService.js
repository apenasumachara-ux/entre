const pool = require("../config/db");

async function getUsers() {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
}

async function createUser(username, email) {

  if (!username?.trim()) {
    throw new Error("Nome obrigatório");
  }

  if (!email?.trim()) {
    throw new Error("Email obrigatório");
  }

  if (!email.includes("@")) {
    throw new Error("Email inválido");
  }

  const existingUser = await pool.query(
    `
    SELECT id
    FROM users
    WHERE email = $1
    `,
    [email]
  );

  if (existingUser.rows.length > 0) {
    throw new Error("Email já cadastrado");
  }

  const result = await pool.query(
    `
    INSERT INTO users (username, email)
    VALUES ($1, $2)
    RETURNING *
    `,
    [username, email]
  );

  return result.rows[0];
}

async function deleteUser(id) {
  const result = await pool.query(
    `
    DELETE FROM users
    WHERE id = $1
    RETURNING *
    `,
    [id]
  );

  return result.rows[0];
}

async function updateUser(id, username, email) {

  if (!username?.trim()) {
    throw new Error("Nome obrigatório");
  }

  if (!email?.trim()) {
    throw new Error("Email obrigatório");
  }

  if (!email.includes("@")) {
    throw new Error("Email inválido");
  }  
  const result = await pool.query(
    `
    UPDATE users
    SET username = $1,
        email = $2
    WHERE id = $3
    RETURNING *
    `,
    [username, email, id]
  );

  return result.rows[0];
}

module.exports = {
  createUser,
  getUsers,
  deleteUser,
  updateUser
};