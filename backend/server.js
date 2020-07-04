'use strict';

const express = require('express');
const cors = require('cors');

// Constants
const PORT = 2867;
const HOST = '0.0.0.0';

// Server Setup
const app = express();
app.use(cors())
const router = express.Router()

// Generate Routes
// TODO :: loop through files in routes folder and auto-register
const MediaRoutes = require('./routes/MediaRoutes'); //importing route
MediaRoutes(router); //register the route

// Register Router w/ '/api' prefix
app.use('/api', router)

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);