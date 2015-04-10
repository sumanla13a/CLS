'use strict'
var bcrypt = require('bcrypt');

module.exports = function(mongoose) {
	var schema = mongoose.Schema;
	var students = new schema({
		name: {
			fname: String,
			lname: String
		},
		username: String,
		email: {
			type: String,
			unique: true
		},
		password: String,
		created_at: {
			type: Date,
			default: Date.now
		}
	});
	students.pre('save', function(next) {
		/*Checking if the password has a special character, a capital letter, an small letter and a digit*/
		if(/[\@\#\$\%\^\&\*\(\)\_\+\!]/.test(this.password) && /[a-z]/.test(this.password) && /[0-9]/.test(this.password) && /[A-Z]/.test(this.password)) {
			var that = this;
			var passwordRecieved = function(err, hashPassword) {
				that.password = hashPassword;
				next();
			}
			encrypt(this.password, passwordRecieved);
		} else {
			console.log('here');
			next(new Error('Password Strength not strong'));
		}
	})
	return mongoose.model('studentTable', students, 'studentTable');	
}

function encrypt(password, callback) {
	bcrypt.genSalt(10, function(err, salt) { //generating salt
		if(err) return cb(err);
		bcrypt.hash(password, salt, callback); //calling callback here sends the error and hash that it generates to the function declaration.
	})
}