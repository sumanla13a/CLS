'use strict';

var bcrypt = require('bcrypt');
var util = require('util');

var student = require('../../models').student.student;

var user = {
	index: function(req, res, next) {
		res.render('index');
	},

	checkIfUserExists: function(req, res, next) {
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

	checkIfUserNameExists: function(req, res, next) {
		student.findOne({email: req.body.username}, usernameExistenceCb);
		function usernameExistenceCb(err, result) {
			var error = '';
			if(result && result.username) {
				res.json({
					exists: 1
				});
			} else {
				res.json({
					exists: 0
				});
			}
		}
	},

	register: function(req, res, next) {
		var newStudent = new student;
		var reqData = req.registerRequest;
		newStudent.name = reqData.name;
		newStudent.username = reqData.username;
		newStudent.email = reqData.email;
		newStudent.password = reqData.password;
		encrypt(newStudent.password, encryptedData);
		function encryptedData(err, hash) {
			newStudent.password = hash;
			newStudent.save(savedNewStudent);
		}
		function savedNewStudent(err, result) {
			res.json({
				result:1
			});
		}
	},

	login: function(req, res, next) {
		var loginRequest = req.loginRequest;

		student.findOne({email: req.loginRequest.username}, loginCheck);
		function loginCheck(err, documents) {
			if(err) return next(err);
			if(documents === null || Object.keys(documents).length === 0) {
				req.resData = {
					success: 0,
					message: 'Username does not exist'
				};
				return next();
			}
			bcrypt.compare(loginRequest.password, documents.password, checkAuthentication);
			function checkAuthentication(error, result) {
				if(error || !result){
					req.resData = {
						status: 0,
						message: 'Username/password does not match'
					};
					return next();
				} else {
					delete documents.password;
					req.session.user = documents;
				    req.resData = {
						status: 1,
						user : documents
					};
					return next();
				}
			}
		}
	},

	logout: function(req, res, next) {
		if(req.session.user) {
			req.session.destroy();
			//redirect to somewhere
		}
	}
};


function encrypt(password, callback) {
	bcrypt.genSalt(10, function(err, salt) { //generating salt
		if(err) return cb(err);
		bcrypt.hash(password, salt, callback); //calling callback here sends the error and hash that it generates to the function declaration.
	})
}
module.exports = user;