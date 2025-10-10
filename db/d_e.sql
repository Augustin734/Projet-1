CREATE TABLE d_e (
    id BIGINT NOT NULL PRIMARY KEY,
    prénom VARCHAR(50) NOT NULL,
    nom VARCHAR(50) NOT NULL,
    phone_number BIGINT,
    mail VARCHAR(150),
    adresse TEXT,
    ville VARCHAR(50),
    prétention_salariale INTEGER
);