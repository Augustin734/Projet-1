import pool from "../Config/db.js";

export const getAllUserService = async () => {
  const result = await pool.query("SELECT * FROM d_e");
  return result.rows;
};

export const getUserByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM d_e WHERE id = $1", [id]);
  return result.rows[0];
};

export const createUserByIdService = async (
  prénom,
  nom,
  phone_number,
  mail,
  adresse,
  ville,
  prétention_salariale
) => {
  const result = await pool.query(
    `INSERT INTO d_e (prénom, nom, phone_number, mail, adresse, ville, prétention_salariale, password)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *`,
    [prénom, nom, phone_number, mail, adresse, ville, prétention_salariale, password]
  );
  return result.rows[0];
};

export const updateUserByIdService = async (
  id,
  prénom,
  nom,
  phone_number,
  mail,
  adresse,
  ville,
  prétention_salariale
) => {
  const result = await pool.query(
    `UPDATE d_e
     SET prénom = $1, nom = $2, phone_number = $3, mail = $4, adresse = $5, ville = $6, prétention_salariale = $7, password =$8
     WHERE id = $9
     RETURNING *`,
    [prénom, nom, phone_number, mail, adresse, ville, prétention_salariale, password, id]
  );
  return result.rows[0];
};

export const deleteUserByIdService = async (id) => {
  const result = await pool.query(
    "DELETE FROM d_e WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
