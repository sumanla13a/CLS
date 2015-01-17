'use strict';
var mongoose = require('mongoose');

var config = require('../config');
mongoose.connect(config.db.host);

var db = mongoose.connection;

db.on('error', console.error);

module.exports/*var a */= {
	student: require('./student')(mongoose)
};


if(require.main === module) {
	var newStudent = new a.student.student;
	newStudent.name = {
		fname: 'Asbina',
		lname: 'karki'
	};
	newStudent.email = 'asbina@love.com';
	newStudent.username = 'sumanki';
	newStudent.password = 'budi';
	newStudent.save(function (err, res) {
		console.log(res);
		console.log('a');
		console.log(err);
	})
}