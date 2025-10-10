// index.js
import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;

// Création de l'application Express
const app = express();
const port = 3000;
 
// Middleware pour parser le JSON
app.use(express.json());
 
// Configuration de la connexion PostgreSQL
const pool = new Pool({
  host: 'db',
  port: 5432,
  user: 'devuser',
  password: 'devpass',
  database: 'devdb'
});
 
// Middleware pour parser le JSON
app.use(express.json());

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
