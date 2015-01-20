'use strict';

var collect = require('./collect');
var english = require('./english');

var mw = require('../mw');

module.exports = function(router) {
	router.get('/quizes/english/:module/:id', collect.getQuiz, english.getQuiz, mw.error);
	router.post('/quizes/english/:module/:id', collect.getAnswer, english.getAnswer, mw.error);
};