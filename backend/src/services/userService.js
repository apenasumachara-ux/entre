const pool = require("../config/db");

async function getUsers() {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
}

async function createUser(username, email) {
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

module.exports = {
  createUser,
  getUsers
};