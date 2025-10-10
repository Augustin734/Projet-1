import express from 'express';
import pkg from 'pg';
import user from "./user.js";

const { Pool } = pkg;

// Configuration de la connexion PostgreSQL
const pool = new Pool({
  host: 'db',
  port: 5432,
  user: 'devuser',
  password: 'devpass',
  database: 'devdb'
});

// Création de l'application Express
const app = express();
const port = 3000;
 
// Middleware pour parser le JSON
app.use(express.json());
app.use(cors());

// Vérification de la connexion à PostgreSQL
pool.connect()
  .then(() => console.log('Connecté à PostgreSQL'))
  .catch(err => console.error('Erreur de connexion à PostgreSQL :', err));

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API Node.js ! 🚀');
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

// récupérer tous les utilisateurs 

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, message FROM users");

    if (result.rows.length === 0) return res.send("No users found.");

    // Créer un texte regroupant tous les messages
    // const messages = result.rows.map(u => `${u.name} dit : ${u.message}`);
    // res.send(messages.join('\n'));

  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});


