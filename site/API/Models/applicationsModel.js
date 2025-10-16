import pool from "../Config/db.js";

export const getAllCandidatureService = async () => {
  const result = await pool.query("SELECT * FROM applications ORDER BY id ASC");
  return result.rows;
};

export const getCandidatureByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM applications WHERE id = $1", [id]);
  return result.rows[0];
};

export const createCandidatureService = async (
  nom,
  lettre_motivation,
  status_candidature
) => {
  const result = await pool.query(
    `INSERT INTO applications (nom, lettre_motivation, status_candidature)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [nom, lettre_motivation, status_candidature]
  );
  return result.rows[0];
};

export const updateCandidatureByIdService = async (
  id,
  nom,
  lettre_motivation,
  status_candidature
) => {
  const result = await pool.query(
    `UPDATE applications
     SET nom = $1,
         lettre_motivation = $2,
         status_candidature = $3
     WHERE id = $4
     RETURNING *`,
    [nom, lettre_motivation, status_candidature, id]
  );
  return result.rows[0];
};

export const deleteCandidatureByIdService = async (id) => {
  const result = await pool.query(
    "DELETE FROM applications WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
