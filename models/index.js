'use strict';
var mongoose = require('mongoose');

var config = require('../config');
mongoose.connect(config.db.host);

var db = mongoose.connection;

db.on('error', console.error);
var a;
module.exports= a = {
    student: require('./student')(mongoose),
    quizes: require('./quizes')(mongoose),
    courses: require('./course')(mongoose)
};

//-----------------------------TestCodes--------------------------
if(require.main === module) {
    var user = require('./user')(mongoose);
    var instrument = require('./instrument')(mongoose);
    var sheets = require('./sheet')(mongoose);  
    var instru = new instrument;
    var us = new user;
    var sheet = new sheets;

    sheet.name ='sum';

    sheet.instrument = mongoose.Types.ObjectId('4edd40c86762e0fb12000003');
    var ObjectId = mongoose.Types.ObjectId;
    var id = new ObjectId();
    console.log(id);
    /*sheet.sheetFileId = 'an';
    sheet.save(function(err, resu) {
        console.log(err);
        console.log(resu);
        sheets.find({instrument: mongoose.Types.ObjectId('4edd40c86762e0fb12000003')}, function(err, res) {
            console.log(res);
        })
    })*/
    // instru.name = 'Suman';
    /*instrument.findOne(function(err, response) {
        if(err) {
            console.log(err);
        } else {
            var obj = "54fda37c835f272e1c1a863e"
                us.name = 'sum';
                us.email= 'sum@sum.com';
                us.password= 'suman';
                us.instrument= obj;
                console.log(us.instrument)
                us.salt= 'app';
                us.provider= 'apple';
            us.save(function (err, result) {
                console.log(err);
            })

        }
    })*/
}