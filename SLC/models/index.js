'use strict';
var mongoose = require('mongoose');

var config = require('../config');
mongoose.connect(config.db.host);

var db = mongoose.connection;

db.on('error', console.error);

module.exports/*var a*/ = {
	student: require('./student')(mongoose),
	quizes: require('./quizes')(mongoose)
};

//-----------------------------TestCodes--------------------------
if(require.main === module) {
	var newQuiz = new a.quizes.english.englishQuiz;
	var answer = new a.quizes.english.englishAnswer;
/*	newQuiz.question = '___ sun shines brightly.';
	newQuiz.answers = [{answer: 'a'}, {answer: 'an'}, {answer: 'the'}, {answer: 'none'}];
	newQuiz.status = 1;
	newQuiz.save(function (err, res) {
		console.log(res);
		console.log(err);
		answer.quiz_id = res._id;
		answer.rightAnswer = 3;
		answer.save(function(error, result) {
			console.log('answer');
			console.log(result);
		})
	})*/

/*	newQuiz.question = 'I love it, __________';
	newQuiz.answers = [{answer: 'don\'t I ?'}, {answer: 'isn\'t I ?'}, {answer: 'am I ?'}, {answer: 'do I ?'}];
	newQuiz.status = 1;
	newQuiz.save(function (err, res) {
		console.log(res);
		console.log(err);
		answer.quiz_id = res._id;
		answer.rightAnswer = 1;
		answer.save(function(error, result) {
			console.log('answer');
			console.log(result);
		})
	})
*/
	/*newQuiz.question = 'You are going to pass, _________';
	newQuiz.answers = [{answer: 'are you ?'}, {answer: 'aren\'t you ?'}, {answer: 'will you ?'}, {answer: 'may you ?'}];
	newQuiz.status = 1;
	newQuiz.save(function (err, res) {
		console.log(res);
		console.log(err);
		answer.quiz_id = res._id;
		answer.rightAnswer = 2;
		answer.save(function(error, result) {
			console.log('answer');
			console.log(result);
		})
	})*/
}