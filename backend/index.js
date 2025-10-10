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

// récupérer tous les utilisateurs 

app.get("./users", async (req, res) =>{
  try{
    const result = await pool.query("SELECT id, name, message From users");
    if (result.rows.lenngth === 0) return res.send("no user find.");
        
    //Créé un texte regroupant tout les message
    const messages = result.rows.map(u => '${u.name} dit : ${u.message}.join();
      res.send(messages))
  }catch (err){
    console.error(err);
    res.status(500).send ("Error server");
  }
});


