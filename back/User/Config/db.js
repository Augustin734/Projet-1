import pkg from "pg";
const { Pool } = pkg;

// Configuration de la connexion PostgreSQL
const pool = new Pool({
  host: 'db',
  port: 5432,
  user: 'devuser',
  password: 'devpass',
  database: 'devdb'
});

export default pool;
