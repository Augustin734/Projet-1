# Étape 1 : image de base
FROM node:20-alpine

# Étape 2 : répertoire de travail
WORKDIR /app

# Étape 3 : copier les dépendances
COPY backend/package*.json ./

# Étape 4 : installer les dépendances
RUN npm install

# Étape 5 : copier le code de l’application
COPY backend/ .

# Étape 6 : exposer le port de l’app
EXPOSE 3000

# Étape 7 : commande de démarrage
CMD ["npm", "start"]
