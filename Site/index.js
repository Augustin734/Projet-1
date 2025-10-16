import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import some_error from './API/middleware/Error.js';
import pool from './API/Config/DataBase.js';
import application from './API/Routes/Applications.js';
import companies from './API/Routes/Companies.js';
import Advertisement from './API/Routes/Advertisements.js';
import people from './API/Routes/People.js';

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

// Login avant les routes API
app.post('/login', async(req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Incorrect email' });
    }

    const user = result.rows[0];
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    return res.status(200).json({
      message: 'Connected',
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Routes API
app.use('/api', people);
app.use('/api', application);
app.use('/api', companies);
app.use('/api', Advertisement);

app.use(some_error);

pool.connect()
  .then(() => {
    console.log('Connecté à PostgreSQL');
    app.listen(port, () => {
      console.log(`Serveur lancé sur http://localhost:${port}`);
    });
  })
  .catch(err => console.error('Erreur de connexion à PostgreSQL :', err));