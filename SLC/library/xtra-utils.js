'use strict';

var check = {
	required: function(object, reqParams){
		var missingParams = [];
		reqParams.forEach(function(param){
			if(!object[param] && object[param]) missingParams.push[param];
		});
		var err;
		if(missingParams.length) {
			err = 'Missing Params ' + missingParams.join(',');
		}
		return err;
	}
};

module.exports = check;