import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import user from './API/Routes/People.js';
import some_error from './API/middleware/Error.js';
import pool from './API/Config/DataBase.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'Front')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'Connexion.html'));
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
