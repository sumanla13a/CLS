'use strict';

var collect = require('./collect');
var english = require('./english');

var mw = require('../mw');

module.exports = function(router) {
	router.get('/quizes/english/:id', collect.getQuiz, english.getQuiz, mw.error);
	router.post('/quizes/english/:id', collect.getAnswer, english.getAnswer, mw.error);
};