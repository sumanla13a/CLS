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
		return next();
	}
};

module.exports = collect;