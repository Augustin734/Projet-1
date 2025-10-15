import pool from "../Config/db.js";

export const getAllUserService = async () => {
  const result = await pool.query("SELECT * FROM employeur");
  return result.rows;
};

export const getEmployeurByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM employeur WHERE id = $1", [id]);
  return result.rows[0];
};

export const createEmployeurByIdService = async (
  nom, siret, mail, secteur_activité,siège_social,site_web,descriptif, password
) => {
  const result = await pool.query(
    `INSERT INTO employeur (nom, siret, mail, secteur_activité,siège_social,site_web,descriptif, password)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING *`,
    [nom, siret, mail, secteur_activité,siège_social,site_web,descriptif, password]
  );
  return result.rows[0];
};

export const updateEmployeurByIdService = async (
  id,
  nom,
  siret,
  mail,
  secteur_activité,
  siège_social,
  site_web,
  descriptif,
  password
) => {
  const result = await pool.query(
    `UPDATE employeur
     SET nom = $1, siret = $2, mail = $3, secteur_activité = $4, siège_social = $5, site_web = $6, descriptif = $7, password =$8
     WHERE id = $9
     RETURNING *`,
    [nom, siret, mail, secteur_activité,siège_social,site_web,descriptif, password, id]
  );
  return result.rows[0];
};

export const deleteEmployeurByIdService = async (id) => {
  const result = await pool.query(
    "DELETE FROM employeur WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
