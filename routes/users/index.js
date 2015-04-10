'use strict';
var user = require('./user');
var mw = require('../mw');
var collect = require('./collect');

module.exports = function(router) {
	router.get('/', user.index);
	router.post('/student/new', collect.register, user.checkIfUserExists, user.register, mw.response, mw.error);
	router.post('/student/login', collect.login, user.login, mw.response, mw.error);
	// router.get('/:app/:ball', mw.redirect);
}