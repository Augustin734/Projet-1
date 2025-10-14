import pool from "../Config/db.js";

export const getAllJobService = async () => {
  const result = await pool.query("SELECT * FROM job");
  return result.rows;
};

export const getjobBySecteurActivitéService = async (secteur_activité) => {
  const result = await pool.query("SELECT * FROM job WHERE secteur_activité = $1", [secteur_activité]);
  return result.rows;
};

export const getjobByVilleService = async (ville) => {
  const result = await pool.query("SELECT * FROM job WHERE ville = $1", [ville]);
  return result.rows;
};

export const createJobByIdService = async (
   nom_entreprise, 
    nom_job , 
    type_de_contrat, 
    secteur_activité, 
    salaire, 
    ville, 
    adresse, 
    date_de_postulation, 
    descriptif, 
    id
) => {
  const result = await pool.query(
    `INSERT INTO job ( nom_entreprise, nom_job , type_de_contrat, secteur_activité, salaire, ville, adresse, date_de_postulation, descriptif, id)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
     RETURNING *`,
    [ nom_entreprise, nom_job , type_de_contrat, secteur_activité, salaire, ville, adresse, 
    date_de_postulation, descriptif, id]
  );
  return result.rows[0];
};

export const updateJobByIdService = async (
  id,
  nom_entreprise, 
  nom_job , 
  type_de_contrat, 
  secteur_activité, 
  salaire, 
  ville, 
  adresse, 
  date_de_postulation, 
  descriptif, ) => {
  const result = await pool.query(
    `UPDATE job
     SET nom_entreprise =$1, nom_job = $2, type_de_contrat = $3, secteur_activité = $4, salaire = $5, ville = $6,
     adresse = $7, date_de_postulation = $8, descriptif =$9
     WHERE id = $10
     RETURNING *`,
    [ nom_entreprise, nom_job , type_de_contrat, secteur_activité, salaire, ville, adresse, 
    date_de_postulation, descriptif, id]
  );
  return result.rows[0];
};

export const deleteJobByIdService = async (id) => {
  const result = await pool.query(
    "DELETE FROM job WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
