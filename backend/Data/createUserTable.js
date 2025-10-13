import pool from "../config/db.js"

const createUserTable = async () =>{
    const queryText = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    prénom VARCHAR(50),
    nom VARCHAR(100) NOT NULL,
    phone_number NUMERIC(10, 0),
    email VARCHAR(50) UNIQUE NOT NULL,
    addresse VARCHAR(100) NOT NULL,
    ville VARCHAR(50) NOT NULL,
    prétention_salariale NUMERIC(10, 2),
    created_at TIMESTAMP DEFAULT NOW()
)
    `;

    try{
        pool.query(queryText)
        console.log("User table created if not exist");
    }catch(error){
        console.log ("error creating users table : ",error);
    }
};

export default createUserTable;