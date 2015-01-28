'use strict';

module.exports = function(mongoose) {
    var schema = mongoose.Schema;
    var courseContent = new schema({
        title: String,
        content: String,
        created_at: {
            type: Date,
            default: Date.now
        }
    });

    return mongoose.model('courseContent', courseContent, 'courseContent');
}