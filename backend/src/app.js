const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const app = express();


// Middlewares
app.use(cors({ origin: 'http://localhost', credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);

module.exports = app;