/* Ce dossier est la base de donné que postgressql aura par défault au démarrage */  
/* En cas de changement, il faut d'abord faire dans le terminal : docker compose down -v */
/* puis : docker compose up -d --build */


CREATE TABLE applications ( 
    id BIGINT NOT NULL PRIMARY KEY, 
    nom VARCHAR(200) NOT NULL, 
    lettre_motivation VARCHAR(200), 
    status_candidature VARCHAR(200) ); 
    
CREATE TABLE people ( 
    id BIGINT NOT NULL PRIMARY KEY, 
    prénom VARCHAR(50) NOT NULL, 
    nom VARCHAR(50) NOT NULL, 
    phone_number TEXT, 
    mail VARCHAR(150) NOT NULL,
    password VARCHAR(150) NOT NULL, 
    adresse TEXT, 
    ville VARCHAR(50) ); 
        
CREATE TABLE companies ( 
    id BIGINT NOT NULL PRIMARY KEY, 
    nom VARCHAR(200) NOT NULL, 
    siret TEXT NOT NULL UNIQUE,
    mail VARCHAR(150),
    password VARCHAR(150), 
    secteur_activité VARCHAR(150), 
    siège_social TEXT, 
    site_web TEXT, 
    descriptif TEXT ); 
    
CREATE TABLE advertisements ( 
    id BIGINT NOT NULL PRIMARY KEY, 
    nom_entreprise VARCHAR(200) NOT NULL, 
    nom_job VARCHAR (300) NOT NULL, 
    type_de_contrat VARCHAR(200) NOT NULL, 
    secteur_activité VARCHAR(200), 
    salaire TEXT NOT NULL, 
    ville VARCHAR(50), 
    adresse TEXT,  
    descriptif TEXT NOT NULL );


INSERT INTO companies (id, nom, siret, mail, password, secteur_activité, siège_social, site_web, descriptif) VALUES
(1, 'TechNova', '12345678901234', 'contact@technova.fr', 'tnova123', 'Informatique', '15 rue de Rivoli, Paris', 'https://technova.fr', 'Développement d’applications web et mobiles.'),
(2, 'GreenEnergy', '98765432109876', 'info@greenenergy.fr', 'greenpower', 'Énergie', '4 avenue des Champs-Élysées, Paris', 'https://greenenergy.fr', 'Production et maintenance d’énergie renouvelable.'),
(3, 'Boulangerie Marie', '11223344556677', 'contact@bmarie.fr', 'pain123', 'Agroalimentaire', '12 rue du Pain, Lyon', NULL, 'Boulangerie artisanale bio.'),
(4, 'AutoMeca', '22334455667788', 'hr@automexa.fr', 'auto2024', 'Automobile', 'Zone industrielle Sud, Lille', 'https://automexa.fr', 'Garage automobile multimarque.'),
(5, 'SoftWorks', '33445566778899', 'contact@softworks.fr', 'softpass', 'Développement logiciel', '10 rue Gutenberg, Nantes', 'https://softworks.fr', 'Logiciels de gestion pour PME.'),
(6, 'MediCom', '44556677889900', 'recrutement@medicom.fr', 'medi123', 'Santé', '32 rue Pasteur, Toulouse', 'https://medicom.fr', 'Fourniture de matériel médical.'),
(7, 'EcoBat', '55667788990011', 'contact@ecobat.fr', 'bat2024', 'Bâtiment', 'Zone artisanale du Nord, Marseille', NULL, 'Entreprise de construction éco-responsable.'),
(8, 'FastLog', '66778899001122', 'support@fastlog.fr', 'logistique', 'Transport & Logistique', '8 route de Bordeaux, Bordeaux', 'https://fastlog.fr', 'Service de livraison express.'),
(9, 'ArtVision', '77889900112233', 'contact@artvision.fr', 'art2024', 'Design', '5 rue de la Mode, Paris', 'https://artvision.fr', 'Agence de design graphique et digital.'),
(10, 'EduPlus', '88990011223344', 'info@eduplus.fr', 'eduplus', 'Éducation', '20 avenue de la Liberté, Nice', 'https://eduplus.fr', 'Formation et e-learning.');

INSERT INTO people (id, prénom, nom, phone_number, mail, password, adresse, ville) VALUES
(1, 'Alice', 'Dupont', '0612345678', 'alice.dupont@gmail.com', 'azerty123', '12 rue de la République', 'Paris'),
(2, 'Benjamin', 'Martin', '0789456123', 'ben.martin@yahoo.fr', 'motdepasse2024', '8 avenue Victor Hugo', 'Lyon'),
(3, 'Claire', 'Rousseau', '0654789123', 'claire.r@gmail.com', 'pass1234', '5 boulevard Haussmann', 'Paris'),
(4, 'David', 'Petit', '0765893214', 'david.petit@outlook.fr', 'davidpass', '21 rue Nationale', 'Lille'),
(5, 'Emma', 'Girard', '0745123698', 'emma.girard@gmail.com', 'secret2024', '10 place du Capitole', 'Toulouse'),
(6, 'François', 'Lambert', '0611111111', 'f.lambert@hotmail.fr', 'franpass', '3 impasse des Lilas', 'Marseille'),
(7, 'Julie', 'Bernard', '0678523412', 'julie.bernard@gmail.com', 'julie321', '42 rue Lafayette', 'Bordeaux'),
(8, 'Luc', 'Moreau', '0623456789', 'luc.moreau@gmail.com', 'lucmdp', '9 rue du Port', 'Nantes'),
(9, 'Sophie', 'Fontaine', '0669875432', 's.fontaine@yahoo.fr', 'fontaine1', '15 rue des Écoles', 'Nice'),
(10, 'Thomas', 'Renard', '0756789123', 'thomas.renard@gmail.com', 'renard007', '6 rue Saint-Honoré', 'Paris');

INSERT INTO advertisements (id, nom_entreprise, nom_job, type_de_contrat, secteur_activité, salaire, ville, adresse, descriptif) VALUES
(1, 'TechNova', 'Développeur Full Stack', 'CDI', 'Informatique', '45 000 € / an', 'Paris', '15 rue de Rivoli', 'Développement d’applications web modernes.'),
(2, 'GreenEnergy', 'Technicien maintenance éoliennes', 'CDD', 'Énergie', '2 500 € / mois', 'Nantes', 'ZAC des Vents', 'Maintenance préventive des installations.'),
(3, 'Boulangerie Marie', 'Vendeur en boulangerie', 'CDI', 'Agroalimentaire', '1 900 € / mois', 'Lyon', '12 rue du Pain', 'Accueil clients et mise en rayon.'),
(4, 'AutoMeca', 'Mécanicien automobile', 'CDI', 'Automobile', '2 300 € / mois', 'Lille', 'Zone industrielle Sud', 'Entretien et réparation de véhicules.'),
(5, 'SoftWorks', 'Chef de projet logiciel', 'CDI', 'Informatique', '50 000 € / an', 'Nantes', '10 rue Gutenberg', 'Gestion de projets et coordination technique.'),
(6, 'MediCom', 'Infirmier coordinateur', 'CDI', 'Santé', '2 800 € / mois', 'Toulouse', '32 rue Pasteur', 'Encadrement du personnel infirmier.'),
(7, 'EcoBat', 'Conducteur de travaux', 'CDI', 'Bâtiment', '3 200 € / mois', 'Marseille', 'Zone artisanale du Nord', 'Suivi de chantiers éco-responsables.'),
(8, 'FastLog', 'Chauffeur-livreur', 'CDD', 'Transport & Logistique', '1 900 € / mois', 'Bordeaux', '8 route de Bordeaux', 'Livraison rapide de colis.'),
(9, 'ArtVision', 'Graphiste web', 'Stage', 'Design', '900 € / mois', 'Paris', '5 rue de la Mode', 'Création visuelle pour web et print.'),
(10, 'EduPlus', 'Formateur digital', 'CDI', 'Éducation', '2 500 € / mois', 'Nice', '20 avenue de la Liberté', 'Animation de formations en ligne.');

INSERT INTO applications (id, nom, lettre_motivation, status_candidature) VALUES
(1, 'Candidature Développeur - Alice Dupont', 'Passionnée par le développement web.', 'En attente'),
(2, 'Candidature Technicien - Benjamin Martin', 'Souhait d’évoluer dans le secteur de l’énergie verte.', 'Acceptée'),
(3, 'Candidature Vendeur - Claire Rousseau', 'Très motivée par le contact client.', 'Refusée'),
(4, 'Candidature Mécanicien - David Petit', 'Expérience de 5 ans dans la mécanique auto.', 'En attente'),
(5, 'Candidature Chef de projet - Emma Girard', 'Je veux contribuer à la réussite de vos projets.', 'En cours d’entretien'),
(6, 'Candidature Infirmier - François Lambert', 'Je souhaite intégrer une équipe médicale dynamique.', 'Acceptée'),
(7, 'Candidature Conducteur de travaux - Julie Bernard', 'Convaincue par les valeurs éco-responsables.', 'En attente'),
(8, 'Candidature Chauffeur - Luc Moreau', 'Sérieux et ponctuel, je souhaite rejoindre votre équipe.', 'Refusée'),
(9, 'Candidature Graphiste - Sophie Fontaine', 'Créative et passionnée par le design digital.', 'Acceptée'),
(10, 'Candidature Formateur - Thomas Renard', 'J’aime transmettre mes connaissances numériques.', 'En attente');
