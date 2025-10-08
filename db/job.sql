CREATE TABLE job (
    id BIGINT NOT NULL PRIMARY KEY,
    nom_entreprise VARCHAR(200) NOT NULL,
    nom_job VARCHAR (300) NOT NULL,
    type_de_contrat VARCHAR(200) NOT NULL,
    secteur_activité VARCHAR(200),
    salaire INTEGER NOT NULL,
    ville VARCHAR(50),
    adresse TEXT,
    date_de_postulation DATE NOT NULL,
    descriptif TEXT
);