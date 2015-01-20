'use strict';

module.exports = function (mongoose) {
	var schema = mongoose.Schema;

	var englishQuiz = new schema({
		moduleNumber: Number,
		question: {
			type: String
		},
		answers: [{
			answer: String
		}],
		created_at: {
			type: Date,
			default: Date.now
		},
		status: {
			type: Boolean,
			default: 0
		}
	});

	var englishAnswers = new schema({
		quiz_id: {
			type: schema.ObjectId,
			ref: 'englishQuiz'
		},
		rightAnswer: String
	});

	var schema = {
		englishQuiz: mongoose.model('englishQuiz', englishQuiz, 'englishQuiz'),
		englishAnswer: mongoose.model('englishAnswer', englishAnswers, 'englishAnswer')
	};
	return schema;
};