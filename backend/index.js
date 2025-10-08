import express from "express";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Connexion PostgreSQL réussie 🎉",
      time: result.rows[0].now,
    });
  } catch (err) {
    console.error("Erreur de connexion :", err);
    res.status(500).json({ error: "Impossible de se connecter à la base" });
  }
});

app.listen(port, () => {
  console.log(`✅ Serveur Node en écoute sur le port ${port}`);
});
