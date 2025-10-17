/* Ce dossier correspond aux datas que la base de donné postgressql aura par défault au démarrage */  
/* En cas de changement, il faut d'abord faire dans le terminal : docker compose down -v */
/* puis : docker compose up -d --build */


CREATE TABLE Applications ( 
    id BIGSERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    mail TEXT, 
    cover_letter TEXT, 
    application_status TEXT ); 
    
CREATE TABLE People ( 
    id BIGSERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    first_name TEXT NOT NULL, 
    phone_number TEXT, 
    mail TEXT NOT NULL,
    password TEXT NOT NULL, 
    adress TEXT, 
    city TEXT ); 
        
CREATE TABLE Companies ( 
    id BIGSERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    siret TEXT NOT NULL UNIQUE,
    mail TEXT,
    password TEXT, 
    business_sector TEXT, 
    headquarters TEXT, 
    web_site TEXT, 
    description TEXT ); 
    
CREATE TABLE Advertisements ( 
    id BIGSERIAL PRIMARY KEY, 
    company_name TEXT NOT NULL, 
    job_name TEXT NOT NULL, 
    contract_type TEXT NOT NULL, 
    business_sector TEXT, 
    salary TEXT NOT NULL, 
    city TEXT, 
    adress TEXT,  
    description TEXT NOT NULL );
