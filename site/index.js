import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import user from './API/Routes/user.js';
import some_error from './API/middleware/error.js';
import pool from './API/Config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'front')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'connexion.html'));
});

app.use('/api', user);

app.use(some_error);

pool.connect()
  .then(() => {
    console.log('Connecté à PostgreSQL');
    app.listen(port, () => {
      console.log(`Serveur lancé sur http://localhost:${port}`);
    });
  })
  .catch(err => console.error('Erreur de connexion à PostgreSQL :', err));
