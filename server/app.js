const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Settings
app.set('PORT', process.env.PORT);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routing
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/routine'));
app.use('/api', require('./routes/exercise'));

module.exports = app;