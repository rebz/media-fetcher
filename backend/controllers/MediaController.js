'use strict'

import { Media } from './../models/Media'

exports.search = (req, res) => {
	if (!req.query || !req.query.query) res.status(400).send('`query` must be defined');
	Media.search(decodeURI(req.query.query))
		.then((response) => {
			res.status(200).send(response);
		})
		.catch((err) => {
			res.status(500).send('An error occurred while attempting to retrieve the results.');
		})
}

exports.select = (req, res) => {
    console.log('select', {
        req
    })
	if (!req.query || !req.query.query) res.status(400).send('`query` must be defined');
	Media.search(decodeURI(req.query.query))
		.then((response) => {
			res.status(200).send(response);
		})
		.catch((err) => {
			res.status(500).send('An error occurred while attempting to retrieve the results.');
		})
}