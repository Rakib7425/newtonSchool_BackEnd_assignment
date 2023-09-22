const express = require('express');
const userRoutes = require('../routes/userRoutes');
const app = express();

// Router Middlewares
app.use(express.json());
app.use('/api', userRoutes);

module.exports = app;
