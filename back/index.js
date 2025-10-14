import express from 'express';
import cors from "cors";
import user from "./User/Routes/user.js";
import some_error from './middleware/error.js';
import pool from './User/Config/db.js';
import pool from './User/Config/db.js'; // le tableau pour le job
import pool from './User/Config/db.js';  // le tableau pour employeur
import pool from './User/Config/db.js';  // le tableau candidature 


// Création de l'application Express, et vérification postgresql
const app = express();
const port = 3000;
pool.connect()
  .then(() => {
    console.log('Connecté à PostgreSQL');
    app.listen(port, () => {
      console.log(`Serveur lancé sur http://localhost:${port}`);
    });
  })  

  .catch(err => console.error('Erreur de connexion à PostgreSQL :', err));



// Middleware pour parser le JSON
app.use(express.json());
app.use(cors());


// Liaison au front
app.use(express.static('front/JB/jb.html'))

// way
app.use("/api", user);


// Error
app.use (some_error);