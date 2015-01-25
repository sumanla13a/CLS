'use strict';

var collect = {
	getQuiz: function (req, res, next) {
		req.reqQuiz = {
			// moduleNumber : req.query.moduleNumber,
			id: req.params.quiz_id || 0 //0 for the initial opening of quiz
		};
		return next();
	},
	getAnswer: function(req, res, next) {
		req.reqAnswer = {
			id: req.params.id,
			answer: req.body.answer + 1
		};
		return next();
	}
};

module.exports = collect;