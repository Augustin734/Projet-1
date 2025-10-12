CREATE TABLE IF NOT EXISTS  users (
    id SERIAL PRIMART KEY,
    username VARCHAR (50),
    name VARCHAR(100) NOT NULL,
    phone_number NUMERIC (10,0)
    email VARCHAR (50) UNIQUE NOT NULL,
    adress VARCHAR (100) NOT NULL,
    city VARCHAR (50) NOT NULL,
    salary_claim NUMERIC (10,2),
    created_at TIMESTAMP DEFAULT NOW ()
)