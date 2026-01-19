const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');

const app = express();

// Middlewares obligatoires pour le projet [cite: 43, 47]
app.use(bodyParser.json());
app.use(cookieParser());

// Synchronisation de la base de données
sequelize.sync().then(() => {
  console.log("MySQL Database & tables created!");
});

// Route de test
app.get('/', (req, res) => res.send("SecureSup API is running"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});