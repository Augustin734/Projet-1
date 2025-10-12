/* Ce dossier est la base de donné que postgressql aura par défault au démarrage */  
/* En cas de changement, il faut d'abord faire dans le terminal : docker compose down -v */
/* puis : docker compose up -d --build */


CREATE TABLE candidature ( 
    id BIGINT NOT NULL PRIMARY KEY, 
    nom VARCHAR(200) NOT NULL, 
    lettre_motivation VARCHAR(200), 
    status_candidature VARCHAR(200), 
    date_de_postulation DATE ); 
    
CREATE TABLE d_e ( 
    id BIGINT NOT NULL PRIMARY KEY, 
    prénom VARCHAR(50) NOT NULL, 
    nom VARCHAR(50) NOT NULL, 
    phone_number BIGINT, 
    mail VARCHAR(150), 
    adresse TEXT, 
    ville VARCHAR(50), 
    prétention_salariale INTEGER ); 
        
CREATE TABLE employeur ( 
    id BIGINT NOT NULL PRIMARY KEY, 
    nom VARCHAR(200) NOT NULL, 
    siret INTEGER NOT NULL, 
    secteur_activité VARCHAR(150), 
    siège_social TEXT, 
    site_web TEXT, 
    descriptif TEXT ); 
    
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
    descriptif TEXT NOT NULL );


INSERT INTO candidature (id, nom, lettre_motivation, status_candidature, date_de_postulation) VALUES
(1, 'Dupont', 'Je suis motivé à rejoindre votre entreprise.', 'En attente', '2025-09-01'),
(2, 'Martin', 'Je suis intéressé par ce poste.', 'Acceptée', '2025-08-25'),
(3, 'Bernard', 'Je possède les compétences demandées.', 'Refusée', '2025-08-10'),
(4, 'Durand', 'Motivé et rigoureux.', 'En cours', '2025-09-15'),
(5, 'Petit', 'Souhait d’évolution professionnelle.', 'En attente', '2025-09-20'),
(6, 'Robert', 'Passionné par le domaine.', 'Acceptée', '2025-07-30'),
(7, 'Richard', 'Disponible immédiatement.', 'Refusée', '2025-09-05'),
(8, 'Moreau', 'Je souhaite contribuer à vos projets.', 'En attente', '2025-09-28'),
(9, 'Simon', 'Expérience pertinente pour ce poste.', 'Acceptée', '2025-10-01'),
(10, 'Laurent', 'Très motivé pour rejoindre l’équipe.', 'En cours', '2025-09-18');


INSERT INTO d_e (id, prénom, nom, phone_number, mail, adresse, ville, prétention_salariale) VALUES
(1, 'Alice', 'Dupont', 0612345678, 'alice.dupont@mail.com', '12 rue Victor Hugo', 'Paris', 35000),
(2, 'Benoit', 'Martin', 0698456721, 'benoit.martin@mail.com', '24 avenue de Lyon', 'Lyon', 42000),
(3, 'Claire', 'Bernard', 0789456123, 'claire.bernard@mail.com', '8 rue de Bretagne', 'Rennes', 32000),
(4, 'David', 'Durand', 0654789541, 'david.durand@mail.com', '10 boulevard Pasteur', 'Marseille', 39000),
(5, 'Emma', 'Petit', 0756123498, 'emma.petit@mail.com', '5 rue Lafayette', 'Lille', 37000),
(6, 'François', 'Robert', 0687456123, 'francois.robert@mail.com', '20 avenue du Prado', 'Nice', 40000),
(7, 'Géraldine', 'Richard', 0712345987, 'geraldine.richard@mail.com', '14 rue Nationale', 'Bordeaux', 33000),
(8, 'Hugo', 'Moreau', 0765894123, 'hugo.moreau@mail.com', '3 place de la République', 'Toulouse', 41000),
(9, 'Isabelle', 'Simon', 0645789132, 'isabelle.simon@mail.com', '7 rue Voltaire', 'Nantes', 36000),
(10, 'Julien', 'Laurent', 0723456987, 'julien.laurent@mail.com', '11 rue des Fleurs', 'Strasbourg', 38000);


INSERT INTO employeur (id, nom, siret, secteur_activité, siège_social, site_web, descriptif) VALUES
(1, 'TechNova', 123456789, 'Informatique', 'Paris', 'https://www.technova.fr', 'Entreprise de solutions logicielles.'),
(2, 'GreenWorld', 234567891, 'Environnement', 'Lyon', 'https://www.greenworld.fr', 'Entreprise éco-responsable.'),
(3, 'BuildCo', 345678912, 'BTP', 'Marseille', 'https://www.buildco.fr', 'Société de construction innovante.'),
(4, 'EduPlus', 456789123, 'Éducation', 'Bordeaux', 'https://www.eduplus.fr', 'Formations et e-learning.'),
(5, 'Foodies', 567891234, 'Agroalimentaire', 'Rennes', 'https://www.foodies.fr', 'Produits bio et locaux.'),
(6, 'TravelX', 678912345, 'Tourisme', 'Nice', 'https://www.travelx.fr', 'Agence de voyage moderne.'),
(7, 'Meditech', 789123456, 'Santé', 'Toulouse', 'https://www.meditech.fr', 'Technologies médicales avancées.'),
(8, 'AutoLine', 891234567, 'Automobile', 'Lille', 'https://www.autoline.fr', 'Fabrication de pièces automobiles.'),
(9, 'Financia', 912345678, 'Banque', 'Strasbourg', 'https://www.financia.fr', 'Services financiers personnalisés.'),
(10, 'CreativAgency', 923456789, 'Marketing', 'Paris', 'https://www.creativagency.fr', 'Agence de communication créative.');


INSERT INTO job (id, nom_entreprise, nom_job, type_de_contrat, secteur_activité, salaire, ville, adresse, date_de_postulation, descriptif) VALUES
(1, 'TechNova', 'Développeur Web', 'CDI', 'Informatique', 42000, 'Paris', '12 rue du Code', '2025-09-10', 'Développement d’applications web.'),
(2, 'GreenWorld', 'Chargé de mission environnement', 'CDD', 'Environnement', 35000, 'Lyon', '8 avenue Verte', '2025-09-05', 'Gestion de projets écologiques.'),
(3, 'BuildCo', 'Chef de chantier', 'CDI', 'BTP', 45000, 'Marseille', '22 rue des Travaux', '2025-09-12', 'Supervision des chantiers.'),
(4, 'EduPlus', 'Formateur digital', 'Freelance', 'Éducation', 30000, 'Bordeaux', '15 rue du Savoir', '2025-09-20', 'Création de modules e-learning.'),
(5, 'Foodies', 'Responsable qualité', 'CDI', 'Agroalimentaire', 38000, 'Rennes', '5 rue du Goût', '2025-09-25', 'Suivi qualité et normes alimentaires.'),
(6, 'TravelX', 'Conseiller voyage', 'CDD', 'Tourisme', 32000, 'Nice', '10 rue du Soleil', '2025-08-28', 'Accompagnement client et organisation.'),
(7, 'Meditech', 'Technicien biomédical', 'CDI', 'Santé', 40000, 'Toulouse', '7 rue de la Santé', '2025-09-15', 'Maintenance d’équipements médicaux.'),
(8, 'AutoLine', 'Ingénieur mécanique', 'CDI', 'Automobile', 46000, 'Lille', '9 boulevard Auto', '2025-09-02', 'Conception de pièces automobiles.'),
(9, 'Financia', 'Analyste financier', 'Stage', 'Banque', 28000, 'Strasbourg', '11 rue des Finances', '2025-09-18', 'Analyse de données financières.'),
(10, 'CreativAgency', 'Community Manager', 'Alternance', 'Marketing', 27000, 'Paris', '3 avenue de la Création', '2025-09-22', 'Gestion des réseaux sociaux.');
