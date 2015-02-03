var util = require('util');

module.exports = {
	redirect: function(req, res, next) {
		res.render('error');
	},

	error: function(err, req, res, next) {
        if (!err) err = new Error('an error has occurred');
        var code = err.status || 500;

        util.log(util.format('Error [%s]: %s', req.url, err.message));
        if (code !== 404 && code !== 403) {
            // not logging traces for 404 and 403 errors
            util.log(util.inspect(err.stack));//shows the trace of when and where the error occured
        }

        if ('ETIMEDOUT' === err.code || 'ENOTFOUND' === err.code) {
            err.message = 'Error connecting upstream servers';
        }

        if ('POST' === req.method) {
            if (err.status === 403) {
                err.errorDetails = 'Session and/or token expired.';
            }
        }

        if (req.xhr || req.isapi || req.jsonDataOnError) {
            console.log('here');
            res.json({
                result: 'failure',
                code: code || 1,
                success: 0,
                error: err.message,
                message: err.errorDetails || err.message
            });
        } else {
            mw.menu(req, res, function (e) {
                if (e) console.log(e);

                res.locals.error = err.message;
                res.status(code).render(req.errorview || 'error');
            });
        }
	}
};
