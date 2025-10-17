import jwt from "jsonwebtoken";
import express from 'express';

const app = express();

app.get('/jwt', (req, res) => {
  const createTokenFromJson = (jsonData, secretKey, options = {}) => {
    try {
      return jwt.sign(jsonData, secretKey, options);
    } catch (error) {
      console.log("Error: ", error.message);
      return null;
    }
  };

  const jsonData = { name: "John", mail: 'user@toto.com' }; 
  const secretKey = 'tonSecretSuperSecurise';

  const token = createTokenFromJson(jsonData, secretKey);

  if (token) {
    res.json({ token });
  } else {
    res.status(500).json({ error: 'Erreur lors de la création du token' });
  }
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
