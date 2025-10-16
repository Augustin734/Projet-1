import pool from "../Config/db.js";

export const getAllJobService = async () => {
  const result = await pool.query("SELECT * FROM advertisements ORDER BY id ASC");
  return result.rows;
};

export const getJobBySecteurActiviteService = async (secteur_activité) => {
  const result = await pool.query(
    "SELECT * FROM advertisements WHERE secteur_activité = $1",
    [secteur_activité]
  );
  return result.rows;
};

export const getJobByVilleService = async (ville) => {
  const result = await pool.query(
    "SELECT * FROM advertisements WHERE ville = $1",
    [ville]
  );
  return result.rows;
};

export const createJobService = async (
  nom_entreprise,
  nom_job,
  type_de_contrat,
  secteur_activité,
  salaire,
  ville,
  adresse,
  descriptif
) => {
  const result = await pool.query(
    `INSERT INTO advertisements (nom_entreprise, nom_job, type_de_contrat, secteur_activité, salaire, ville, adresse, descriptif)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING *`,
    [nom_entreprise, nom_job, type_de_contrat, secteur_activité, salaire, ville, adresse, descriptif]
  );
  return result.rows[0];
};

export const updateJobByIdService = async (
  id,
  nom_entreprise,
  nom_job,
  type_de_contrat,
  secteur_activité,
  salaire,
  ville,
  adresse,
  descriptif
) => {
  const result = await pool.query(
    `UPDATE advertisements
     SET nom_entreprise = $1,
         nom_job = $2,
         type_de_contrat = $3,
         secteur_activité = $4,
         salaire = $5,
         ville = $6,
         adresse = $7,
         descriptif = $8
     WHERE id = $9
     RETURNING *`,
    [nom_entreprise, nom_job, type_de_contrat, secteur_activité, salaire, ville, adresse, descriptif, id]
  );
  return result.rows[0];
};

export const deleteJobByIdService = async (id) => {
  const result = await pool.query(
    "DELETE FROM advertisements WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
