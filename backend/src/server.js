require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor funcionando"
  });
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});