'use strict';

module.exports = function(router) {
	console.log('here');
	require('./users')(router);
}
