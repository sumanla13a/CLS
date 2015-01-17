'use strict'
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

	return mongoose.model('studentTable', students, 'studentTable');	
}