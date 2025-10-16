import pool from "../Config/db.js";

export const getAllUserService = async () => {
  const result = await pool.query("SELECT * FROM people ORDER BY id ASC");
  return result.rows;
};

export const getUserByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM people WHERE id = $1", [id]);
  return result.rows[0];
};

export const createUserService = async (prenom, nom, phone_number, mail, password, adresse, ville) => {
  const result = await pool.query(
    `INSERT INTO people (prénom, nom, phone_number, mail, password, adresse, ville)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *`,
    [prenom, nom, phone_number, mail, password, adresse, ville]
  );
  return result.rows[0];
};

export const updateUserByIdService = async (id, prenom, nom, phone_number, mail, password, adresse, ville) => {
  const result = await pool.query(
    `UPDATE people
     SET prénom = $1, nom = $2, phone_number = $3, mail = $4, password = $5, adresse = $6, ville = $7
     WHERE id = $8
     RETURNING *`,
    [prenom, nom, phone_number, mail, password, adresse, ville, id]
  );
  return result.rows[0];
};

export const deleteUserByIdService = async (id) => {
  const result = await pool.query("DELETE FROM people WHERE id = $1 RETURNING *", [id]);
  return result.rows[0];
};
