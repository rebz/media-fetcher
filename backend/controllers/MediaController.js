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

exports.details = (req, res) => {
	if (!req.query || !req.query.id || !req.query.type) res.status(400).send('`id` and `type` must be defined');
	const { id, type } = req.query
	Media.details(id, type)
		.then((response) => {
			res.status(200).send(response);
		})
		.catch((err) => {
			res.status(500).send('An error occurred while attempting to retrieve the results.');
		})
}