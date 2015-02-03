'use strict';

module.exports = function(mongoose) {
    var schema = mongoose.Schema;
    var courseContent = new schema({
        title: String,
        content: [{subTitle: String, paragraph: [String]}],
        created_at: {
            type: Date,
            default: Date.now
        }
    });
    /*all courses will have a separate collections and we retrieve it from there*/
    var subjects = {
        english: mongoose.model('englishCourseContent', courseContent, 'englishCourseContent'),
        math: mongoose.model('mathCourseContent', courseContent, 'mathCourseContent'),
        science: mongoose.model('scienceCourseContent', courseContent, 'scienceCourseContent')
    };

    return subjects;
}