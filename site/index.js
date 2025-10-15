import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import user from './API/Routes/user.js';
import some_error from './API/middleware/error.js';
import pool from './API/Config/db.js';
import candidature from './API/Routes/candidature.js';
import employeur from './API/Routes/employeur.js';
import job from './API/Routes/job.js';
import { useReducer } from 'react';

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
  res.sendFile(path.join(__dirname, 'front', 'connexion.html'));
});


// Routes API
app.use('/api', user);
app.use('/api', candidature);
app.use('/api', employeur);
app.use('/api', job);

// Middleware d’erreur
app.use(some_error);

// Lancement du serveur uniquement après connexion PostgreSQL
pool.connect()
  .then(() => {
    console.log('Connecté à PostgreSQL');
    app.listen(port, () => {
      console.log(`Serveur lancé sur http://localhost:${port}`);
    });
  })
  .catch(err => console.error('Erreur de connexion à PostgreSQL :', err));

// login crypté avec token

app.use(express.json());

app.post('/login', async(req, res) => {
  const {email, password} = req.body;

  if (!Email || ! password) {
    return res.status(400).json({message:'Email and password required'});
  }

  try {
    const result = await pool.query('SELECT * FROM user where email = $1', [email]);
    if (result.rows.lenght === 0) {
      return res.status(401).json({message:'incorrect email'});
    } 
    const user = result.rows[0];
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).jason({message: 'incorrect password'});
    }

    // création du token
    const token =jwt.sign(
      {id: user.id,email: user.email},
      process.env.JWT_SECRET,
      {expiresIn: '2h'}
    );
    return res.status(200).json({
      message: 'connected',
      token,
    });
  }catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Servor error'})
  }
});