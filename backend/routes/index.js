'use strict';

// TODO :: loop through files in routes folder and auto-register

// register routes
module.exports = function(router) {
    const MediaRoutes = require('./MediaRoutes');
    MediaRoutes(router);
};