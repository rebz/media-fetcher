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
	const hasParams = req.params && req.params.id && req.params.type
	if (!hasParams) res.status(400).send('One or more route parameters are missing; `type` and/or `id`');
	const { id, type } = req.params
	Media.details(id, type)
		.then((response) => {
			res.status(200).send(response);
		})
		.catch((err) => {
			res.status(500).send('An error occurred while attempting to retrieve the results.');
		})

}