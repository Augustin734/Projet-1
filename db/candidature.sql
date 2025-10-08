CREATE TABLE candidature (
    id BIGINT NOT NULL PRIMARY KEY,
    nom VARCHAR(200) NOT NULL,
    lettre_motivation VARCHAR(200),
    status_candidature VARCHAR(200),
    date_de_postulation DATE
);