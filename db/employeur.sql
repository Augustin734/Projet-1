CREATE TABLE employeur (
    id BIGINT NOT NULL PRIMARY KEY,
    nom VARCHAR(200) NOT NULL,
    siret INTEGER NOT NULL,
    secteur_activité VARCHAR(150),
    siège_social TEXT,
    site_web TEXT,
    descriptif TEXT
);