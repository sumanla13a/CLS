'use strict';

module.exports = function(mongoose) {
	var quiz = {
		english: require('./english')(mongoose)
	};
	return quiz;
}
