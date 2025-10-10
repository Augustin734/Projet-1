import pool from "../config/db";

export const getalluserService = async () => {
    const result = await pool.query ("SELECT * FROM users");
    return result.rows ;
};

export const getuserbyidService = async (id) => {
    const result = await pool.query ("SELECT * FROM users where id = $1", [id]);
    return result.rows[0] ;
};

export const createuserbyidService = async (username, name, phone_number, mail, adress, city, salary_claim) => {
    const result = await pool.query ("INSERT into users (username, name, phone_number, mail, adress, city, salary_claim) VALUE ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [username, name, phone_number, mail, adress, city, salary_claim]);
    return result.rows[0] ;
};

export const updateuserbyidService = async (id, username, name, phone_number, mail, adress, city, salary_claim) => {
    const result = await pool.query ("UPDATE user set username = $1, name = $2, phone_number =$3, mail = $4, adress = $5, city = $6, salary claim = $7 WHERE id = $8 RETURNING *", [username, name, phone_number, mail, adress, city, salary_claim, id] );
    return result ;
};

export const deleteuserbyidService = async () => {
    const result = await pool.query ("SELECT * FROM users");
    return result ;
};