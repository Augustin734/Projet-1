import pool from "../config/db.js";

export const getAllCandidatureService = async () => {
  const result = await pool.query("SELECT * FROM candidature");
  return result.rows;
};

export const getCandidatureByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM candidature WHERE id = $1", [id]);
  return result.rows[0];
};

export const createCandidatureService = async (
  nom,
  lettre_motivation,
  status_candidature,
  date_de_postulation
) => {
  const result = await pool.query(
    `INSERT INTO candidature (nom, lettre_motivation, status_candidature, date_de_postulation)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [nom, lettre_motivation, status_candidature, date_de_postulation]
  );
  return result.rows[0];
};

export const deleteCandidatureByIdService = async (id) => {
  const result = await pool.query(
    "DELETE FROM candidature WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
