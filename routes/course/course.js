'use strict';

var courseSubject = require('../../models').courses.course;

var course = {
    getCourse: function(req, res, next){
        // req.jsonDataOnError = 1;
        var subject = req.params.sub;
        courseSubject[subject].findOne(function(err, result) {
            if(err || !result) {
                return next(err || new Error('Could not fetch any course content'));
            } else {
                res.json({
                    title: result.title,
                    content: result.content,
                    success: 1
                });
            }
        })
    }
};

module.exports = course;