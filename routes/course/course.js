'use strict';

var courseSubject = require('../../models').courses.course;

var course = {
    getCourse: function(req, res, next){
        courseSubject.findOne(function(err, result) {
            if(err || !result) {
                return next(err || new Error('Could not fetch any course content'));
            } else {
                res.json({
                    title: result.title,
                    content: result.content
                });
            }
        })
    }
};

module.exports = course;