'use strict';
var student = require('../../models').student.student;

var user = {
	index: function(req, res, next) {
		res.render('index');
	},

	checkIfUserExists: function(req, res, next) {
		console.log('here');
		var newStudent = new student;
		student.findOne({email: req.registerRequest.email}, checkUserExistenceCb);
		function checkUserExistenceCb (err, result) {
			var error = '';
			if(result && result.email) {
				error = new Error('User already exists');
			}
			return next(error);
		}
	},

	register: function(req, res, next) {
		console.log(req.registerRequest);
		
		var newStudent = new student;
		var reqData = req.registerRequest;
		newStudent.name = reqData.name;
		newStudent.username = reqData.username;
		newStudent.email = reqData.email;
		newStudent.password = reqData.password;

		newStudent.save(savedNewStudent);
		function savedNewStudent(err, result) {
			console.log(result);
			console.log(err);
			res.json({
				result:1
			})
		}
	}
};

module.exports = user;