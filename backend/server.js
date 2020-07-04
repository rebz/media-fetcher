'use strict';

const express = require('express');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');
const initRoutes = require('./routes/index');

// Constants
const PORT = 2867;
const HOST = '0.0.0.0';

// Server Setup
const app = express();
app.use(cors())
const router = express.Router()

// Generate Routes
// TODO :: loop through files in routes folder and auto-register
initRoutes(router)

// Register Router w/ '/api' prefix
app.use('/api', router)

// initialize http server
const server = http.createServer(app)

// initialize WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {

    // connection is up, add a test event
    ws.on('message', (message) => {
        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    });

    // send feedback to the incoming connection
    ws.send('Hi there, I am a WebSocket server');
});

// start the server
server.listen(PORT, HOST, () => {
    const { address, port } = server.address()
    console.log(`Running on ${address}:${port}`);
});