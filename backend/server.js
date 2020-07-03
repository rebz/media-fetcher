'use strict';
const express = require('express');
const cors = require('cors');

import { Media } from './models/media'

// Constants
const PORT = 2867;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(cors())

app.get('/', (req, res) => {
	res.status(200).send('hello');
});

app.get('/api/media/search', (req, res) => {
	if (!req.query || !req.query.query) res.status(400).send('`query` must be defined');
	Media.search(decodeURI(req.query.query))
		.then((response) => {
			res.status(200).send(response);
		})
		.catch((err) => {
			res.status(500).send('An error occurred while attempting to retrieve the results.');
		})
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);