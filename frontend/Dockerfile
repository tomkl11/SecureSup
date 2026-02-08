FROM node:18

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./
RUN npm install

# Copie du code source
COPY . .

# Port par défaut de React
EXPOSE 4000

# Commande pour lancer React
CMD ["npm", "start"]