'use strict';
module.exports = function(router) {
    
    const media = require('../controllers/MediaController');

    router.get('/media/search', media.search)
    router.get('/media/:type/:id', media.details)
};