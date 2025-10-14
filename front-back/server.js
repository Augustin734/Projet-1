const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

// Servir le front-end
app.use(express.static(__dirname));

// Endpoint pour le formulaire
app.post('/process', (req, res) => {
    const { name, email } = req.body;
    console.log('Received:', name, email);

    // 🔹 Message plus propre (on ne renvoie plus les infos)
    res.json({
        status: 'success',
    });
});

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
