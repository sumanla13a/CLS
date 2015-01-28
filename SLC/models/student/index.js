
module.exports = function (mongoose) {
	var students = {
		student: require('./student')(mongoose)
	}
	return students;
}