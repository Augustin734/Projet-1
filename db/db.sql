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
    password VARCHAR(150), 
    adresse TEXT, 
    ville VARCHAR(50), 
    prétention_salariale INTEGER ); 
        
CREATE TABLE employeur ( 
    id BIGINT NOT NULL PRIMARY KEY, 
    nom VARCHAR(200) NOT NULL, 
    siret INTEGER NOT NULL,
    mail VARCHAR(150),
    password VARCHAR(150), 
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


INSERT INTO d_e (id, prénom, nom, phone_number, mail, password, adresse, ville, prétention_salariale) VALUES
(1, 'Lucas', 'Martin', 0612457896, 'lucas.martin@example.com', 'pass1234', '12 rue des Lilas', 'Lyon', 32000),
(2, 'Emma', 'Dubois', 0654789632, 'emma.dubois@example.com', 'emmaPwd98', '45 avenue Victor Hugo', 'Paris', 40000),
(3, 'Noah', 'Bernard', 0678945123, 'noah.bernard@example.com', 'noahSecure22', '8 impasse des Roses', 'Marseille', 28000),
(4, 'Chloé', 'Lefèvre', 0698754123, 'chloe.lefevre@example.com', 'Chloe!2024', '10 rue des Acacias', 'Toulouse', 35000),
(5, 'Nathan', 'Roux', 0612987456, 'nathan.roux@example.com', 'RouxN@th', '55 boulevard Carnot', 'Bordeaux', 30000),
(6, 'Manon', 'Moreau', 0654781596, 'manon.moreau@example.com', 'Manon2025', '14 rue du Général Leclerc', 'Nantes', 37000),
(7, 'Louis', 'Girard', 0632547896, 'louis.girard@example.com', 'LgSecure#1', '27 avenue de Bretagne', 'Lille', 42000),
(8, 'Camille', 'Faure', 0678124596, 'camille.faure@example.com', 'Camille@123', '3 rue du Lac', 'Strasbourg', 31000),
(9, 'Jules', 'Chevalier', 0696325478, 'jules.chevalier@example.com', 'JulesPwd77', '9 rue de la Liberté', 'Rennes', 29500),
(10, 'Léa', 'Lambert', 0614789523, 'lea.lambert@example.com', 'Lambert!lea', '2 rue du Soleil', 'Nice', 34000);



INSERT INTO employeur (id, nom, siret, mail, password, secteur_activité, siège_social, site_web, descriptif) VALUES
(1, 'TechNova', 825647391, 'contact@technova.fr', 'Tech#2024', 'Informatique', '45 rue de la République, Lyon', 'https://www.technova.fr', 'Société spécialisée dans le développement de logiciels sur mesure.'),
(2, 'BâtirPlus', 925874163, 'contact@batirplus.fr', 'Batir@2025', 'BTP', '12 avenue du Général de Gaulle, Paris', 'https://www.batirplus.fr', 'Entreprise de construction et de rénovation durable.'),
(3, 'GreenFood', 758496123, 'contact@greenfood.fr', 'Green!89', 'Agroalimentaire', '8 rue des Platanes, Toulouse', 'https://www.greenfood.fr', 'Production et distribution de produits bio locaux.'),
(4, 'MediCare', 635978214, 'rh@medicare.fr', 'MediCare2023', 'Santé', '22 boulevard Saint-Michel, Marseille', 'https://www.medicare.fr', 'Clinique privée offrant des services médicaux innovants.'),
(5, 'AutoDrive', 984652137, 'contact@autodrive.fr', 'Drive!24', 'Automobile', '55 rue du Stade, Lille', 'https://www.autodrive.fr', 'Fabricant de véhicules électriques nouvelle génération.'),
(6, 'ImmoFrance', 856941732, 'info@immofrance.fr', 'Immo#2025', 'Immobilier', '10 avenue de la Liberté, Bordeaux', 'https://www.immofrance.fr', 'Agence immobilière spécialisée dans le logement éco-responsable.'),
(7, 'EduPlus', 715489632, 'contact@eduplus.fr', 'Edu2025@', 'Éducation', '34 rue Pasteur, Nantes', 'https://www.eduplus.fr', 'Plateforme d’apprentissage en ligne pour étudiants et professionnels.'),
(8, 'BlueSea', 639874512, 'hr@bluesea.fr', 'BlueSea@44', 'Tourisme', '25 rue du Port, Nice', 'https://www.bluesea.fr', 'Agence de voyages spécialisée dans le tourisme durable.'),
(9, 'DataLink', 892145637, 'info@datalink.fr', 'Data#Link2024', 'Technologie', '7 rue de l Innovation, Grenoble', 'https://www.datalink.fr', 'Fournisseur de solutions cloud et d’analyse de données.'),
(10, 'CleanCity', 784596231, 'contact@cleancity.fr', 'CleanCity!25', 'Environnement', '3 boulevard des Fleurs, Strasbourg', 'https://www.cleancity.fr', 'Entreprise spécialisée dans la gestion et le recyclage des déchets urbains.');



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
