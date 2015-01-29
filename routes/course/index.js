'use strict';

var course = require('./course');
var mw = require('../mw');

module.exports = function(router) {
    router.get('/getcoursecontent', course.getCourse, mw.error);
}