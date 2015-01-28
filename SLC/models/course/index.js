'use strict';

module.exports = function(mongoose) {
    var course = {
        course: require('./course')(mongoose)
    };
    return course;
}