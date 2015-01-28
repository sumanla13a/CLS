'use strict';

module.exports = function(router) {
	require('./users')(router);
	require('./quizes')(router);
    router.get('/partials/:urlName', function(req, res) {
        res.render('partials/'+req.params.urlName);
    });
}
