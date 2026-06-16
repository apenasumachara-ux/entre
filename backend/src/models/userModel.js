const pool = require("../config/db");

async function findAll() {
  const result = await pool.query(
    "SELECT * FROM users"
  );

  return result.rows;
}

async function findByEmail(email) {
  const result = await pool.query(
    `
    SELECT *
    FROM users
    WHERE email = $1
    `,
    [email]
  );

  return result.rows[0];
}

async function findByDiscordId(discordId) {
  const result = await pool.query(
    `
    SELECT *
    FROM users
    WHERE discord_id = $1
    `,
    [discordId]
  );

  return result.rows[0];
}

async function create(userData) {
  const result = await pool.query(
    `
    INSERT INTO users
    (
      username,
      email,
      avatar,
      discord_id,
      github_id
    )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `,
    [
      userData.username,
      userData.email,
      userData.avatar,
      userData.discord_id,
      userData.github_id
    ]
  );

  return result.rows[0];
}

async function update(id, username, email) {
  const result = await pool.query(
    `
    UPDATE users
    SET
      username = $1,
      email = $2
    WHERE id = $3
    RETURNING *
    `,
    [username, email, id]
  );

  return result.rows[0];
}

async function remove(id) {
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

async function findById(id) {
  const result = await pool.query(
    `
    SELECT *
    FROM users
    WHERE id = $1
    `,
    [id]
  );

  return result.rows[0];
}

module.exports = {
  findAll,
  findById,
  findByEmail,
  findByDiscordId,
  create,
  update,
  remove
};