'use strict';

const express = require('express');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');
const initRoutes = require('./routes/index');

// Constants
const PORT = 2867;
const HOST = '0.0.0.0';

// App Setup
const app = express();
app.use(cors())
const router = express.Router()

// Initialize Routes
initRoutes(router)

// Register Router with an '/api' prefix
app.use('/api', router)

// Initialize http server
const server = http.createServer(app)

// Initialize WebSocket server instance
const wss = new WebSocket.Server({ server });

// TODO :: remove ws connection details and handling from this file
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