var quizApp = angular.module('quizApp', ['allServices']);

quizApp.controller('quizController', ['$scope', 'useQuizService', function (scope, useQuizService) {
    scope.quiz = {};
    scope.quiz.number = 0;
    function getQuestion(idQ){
        scope.questions = useQuizService.getQuiz({id: idQ}, function(){
            scope.quiz.idQuestion = scope.questions.questions._id;
            scope.quiz.question = scope.questions.questions.question;
            scope.quiz.answers = scope.questions.questions.answers;
            ++scope.quiz.number;
        });
    }
    getQuestion(0);
    scope.quiz.score = 0;
    var count = 0;
    scope.answerSelected = function(index, quizId) {
        var answerChosen = {answer: index};
        scope.answerCheck = useQuizService.checkAnswer({id: quizId}, answerChosen, function(){
            scope.quiz.score = scope.quiz.score + scope.answerCheck.point;
            if(scope.answerCheck.point) {
                alert('correct');
            } else {
                alert('Wrong');
            }
            ++count;
            if(count == 6) {
                if(scope.quiz.score > 5) alert('Nice job but you still need to learn hard')
                else alert('You are a little behind the course. Please try hard to catch up')
            } else
                getQuestion(quizId);
        });
    };
}]);