var quizApp = angular.module('quizApp', ['allServices']);

quizApp.controller('quizController', ['$scope', 'useQuizService', function (scope, useQuizService) {
    
    scope.questions = useQuizService.getQuiz({id: 0}, function(){
        scope.idQuestion = scope.questions.questions._id;
        scope.question = scope.questions.questions.question;
        scope.answers = scope.questions.questions.answers;
    });
    scope.score = 0;
    scope.answerSelected = function(index, quizId) {
        var answerChosen = {answer: index};
        scope.answerCheck = useQuizService.checkAnswer({id: quizId}, answerChosen, function(){
            scope.score = scope.score + scope.answerCheck.point;
            if(scope.answerCheck.point) {
                alert('correct');
            } else {
                alert('wronggg');
            }
        });
    };

/*    scope.question = scope.questions.questions.question;
    scope.answer = scope.questions.answers;
    console.log(scope.questions);*/
    // alert('here')   
    /*scope.question = 'Where are you from?';
    scope.answers = ['Kathmandu', 'Pokhara', 'Lalitpur', 'Bhaktapur'];
    scope.numbers = 1;
    scope.score = 0;
    scope.answerSelected = function (index) {
        if(index === 3) {
            scope.score = 1000;
            alert('correct');
        } else {
            scope.score = 0;
            alert('wrong');
        }
    }*/
}]);