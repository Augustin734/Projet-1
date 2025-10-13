import express from 'express';
import cors from "cors";
import user from "./Routes/user.js";
import some_error from './middleware/error.js';


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


// way
app.use("/api", user);


// Error
app.use (some_error);