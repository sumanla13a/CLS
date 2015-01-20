'use strict';

module.exports = function(router) {
	require('./users')(router);
	require('./quizes')(router);
}
