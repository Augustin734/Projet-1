import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import user from './API/Routes/user.js';
import some_error from './API/middleware/error.js';
import pool from './API/Config/db.js';

// Récupération correcte de __dirname avec ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// 👉 Sert les fichiers statiques (HTML, CSS, JS du front)
app.use(express.static(path.join(__dirname, 'front')));

// Route principale → Menu_Connexion.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'Menu_Connexion.html'));
});

// Routes API
app.use('/api', user);

// Middleware d’erreur
app.use(some_error);

// Lancement du serveur uniquement après connexion PostgreSQL
pool.connect()
  .then(() => {
    console.log('✅ Connecté à PostgreSQL');
    app.listen(port, () => {
      console.log(`🚀 Serveur lancé sur http://localhost:${port}`);
    });
  })
  .catch(err => console.error('❌ Erreur de connexion à PostgreSQL :', err));
