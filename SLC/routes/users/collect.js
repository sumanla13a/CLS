'use strict';

var collect = {
	register: function(req, res, next) {
		req.registerRequest = {
			name: {
				fname: req.body.fname,
				lname: req.body.lname,
			},
			username: req.body.username,
			email: req.body.email,
			password: req.body.password
		};
		//todo: add validation here
		return next();
	},

	login: function(req, res, next) {
		req.loginRequest = {
			username: req.body.username, //can be email and username both
			password: req.body.password
		};
		//todo: add validation here
		return next();

	}
};

module.exports = collect;