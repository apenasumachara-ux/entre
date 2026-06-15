require("dotenv").config();

const pool = require("./config/db");

async function testConnection() {
  try {
    const result = await pool.query("SELECT NOW()");

    console.log("Conectado ao PostgreSQL");
    console.log(result.rows[0]);

    await pool.end();
  } catch (error) {
    console.error("Erro ao conectar:");
    console.error(error.message);
  }
}

testConnection();