'use strict';

var util = require('util');

var english = require('../../models').quizes.english;

var engQuiz = {
    addQuestions: function(req, res, next) {
    //todo: only logged in person can do this. Each module will have 15 questions. status of quiz will be 0 i.e inactive untill all 15 questions are added there
    //find a better logic for this
    },


    //getting quizes one by one
    /*for initial question:> a question with _id greater than 0 is selected*/
    /*afterwards _id will be linked with all questions and id greater than that will be used to get the next id*/
    //Needs more logic and time
    getQuiz: function(req, res, next){
        var quizRequest = req.reqQuiz;
        if(quizRequest.id == 0) {
            english.englishQuiz.findOne(recievedQuiz);
            console.log('why here');
        } else {
            english.englishQuiz.findOne({_id: {$gt: quizRequest.id}}, recievedQuiz);
            console.log('here');
        }
        function recievedQuiz(err, result) {
            if(err || !result) {
                return next(err || new Error('It can\'t be right. The quiz is not found'));
            } else {
                res.json({
                    questions: result
                })
            }
        }
    },

    //gets answer for the given answer
    /*uses the _id of quizes collection to refer to the answer of answers collection*/
    //currently checks the entire answer. needs to be changed to check for index only
    getAnswer: function(req, res, next) {
        var reqAnswer = req.reqAnswer;
        english.englishAnswer.findOne({quiz_id: reqAnswer.id}, checkAnswer);
        function checkAnswer(err, result) {
            var point;
            if(err || !result) {
                return next(err || new Error('Something went wrong. Sorry for the inconvienience'));
            }
            if(reqAnswer.answer == result.rightAnswer) {
                point = 1;
            } else {
                point = 0;
            }
            res.json({
                point: point
            });
        }
    }
};

module.exports = engQuiz;