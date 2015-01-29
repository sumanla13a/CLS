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
    var newQuiz = new a.quizes.english.englishQuiz;
    var answer = new a.quizes.english.englishAnswer;
    var student = new a.student.student;
    var course = new a.courses.course;

    /*course.title = 'Articles';
    course.content = 'There are two types of articles. Indefinite articles ( a/an ) and  \
                        Definite article ( the ).\
                        \
                        The indefinite article ( a/an ) \
                        We can use it only with countable singular nouns. A/an is a short form of one or a dog. \
                        For example: a dog, a car, NOT: a dogs!\
                        \
                        Golden rules for indefinite articles\
                        Never use a countable singular noun without an article.(NOT: I saw __ kangaroo in the zoo. CORRECT: a kangaroo)\
                        Never use plural nouns with indefinite articles. (NOT: I saw a kangaroos in the zoo. CORRECT: Ø kangaroos).\
                        Use \'a\' before nouns beginning with consonants (for example: a book, a cup, a picture). \
                        Use \'an\' before nouns beginning with vowels (for example: an apple, an orange, an egg).\
                        We use an indefinite article when we describe people\'s professions. For example: My brother is an engineer; His sister is a doctor.\
                        If pronunciation starts with “ब्यन्जन बर्न” in Devnagari script (like क, ख, ग …), then use \'a\' as an article. e.g He is a European (यूरोपियन)  tourist.; He is a one (वन) eyed man.; etc.\
                        If pronunciation starts with “स्वोर बर्न” in Devnagari script (like अ, आ …),then use \'an\' as an article. e.g Its an honour (अनर) meeting you.; I am an SLC  एस.एल.सी)  graduate.; etc.\
                        \
                        \
                        Definite articles ( the )\
                        We use \'the\' with both countable and uncountable nouns, both singular and plural forms. We use \'the\' when everybody knows which noun we are referring to.\
                        For example: Will you, please, answer the phone?.\
                        \
                        Golden Rules for definite article\
                        We use the with OF The roof of the house is phrases.For example: The beginning of the month was very difficult. Or: the roof of the house.\
                        We use the when we talk about inventions and musical instruments: Who invented the telephone? The guitar is my favorite instrument. \
                        We use the with theatres, cinemas, hotels, galleries, the Palace theatre; the QFX Cinema; the Mountain View hotel etc.\
                        We use the when we talk about republics and kingdoms. \
                        For example: the Czech Republic , the United Kingdom, etc. \
                        We use the when we use plural names: I like to watch the Simpsons. She lives in the States.\
                        \
                        \
                        Zero Articles\
                        When we do not use any articles at all we\'ll refer it as zero articles.We do not use indefinite articles with uncountable nouns (examples of uncountable nouns: water, sand, money, rice etc.) So, we do NOT say: I eat a rice every day. CORRECT: I eat rice every day. We do not use any articles when we talk about things in general. For example: People like Ø music.\
                        \
                        \
                        Be Helpful for quiz\
                        \
                        Put in a/an, the or Ø where necessary: \
                        1. I want __an__ apple from that basket. 2. __The__ church on the corner is progressive. 3. Miss Lin speaks __Ø__ Chinese. 4. I borrowed __a__ pencil from your pile of pencils and pens. 5. One of the students said, "_The___ professor is late today." 6. I bought _an___ umbrella to go out in the rain. 7. My daughter is learning to play __the__ violin at her school. 8. Please give me __the__ cake that is on the table. 9. I lived on __the___ Main Street when I first came to town. 10. Belgrade is __the__ capital of __Ø__ Serbia. 11. Our neighbors have __a__ cat and __a__ dog. __The__ dog is very friendly but __the__ cat doesn’\t like company.';
 //add contents from here.
    course.save(function(err, result) {
        console.log(err);
        console.log('apple');
        console.log(result);
    });*/
  /*newQuiz.question = 'I am ___ good boy.';
    newQuiz.answers = [{answer: 'a'}, {answer: 'an'}, {answer: 'the'}, {answer: 'none'}];
    newQuiz.status = 1;
    newQuiz.save(function (err, res) {
        console.log(res);
        console.log(err);
        answer.quiz_id = res._id;
        answer.rightAnswer = 1;
        answer.save(function(error, result) {
            console.log('answer');
            console.log(result);
        })
    })
*/
/*  newQuiz.question = 'I love it, __________';
    newQuiz.answers = [{answer: 'don\'t I ?'}, {answer: 'isn\'t I ?'}, {answer: 'am I ?'}, {answer: 'do I ?'}];
    newQuiz.status = 1;
    newQuiz.save(function (err, res) {
        console.log(res);
        console.log(err);
        answer.quiz_id = res._id;
        answer.rightAnswer = 1;
        answer.save(function(error, result) {
            console.log('answer');
            console.log(result);
        })
    })
*/
    /*newQuiz.question = 'You are going to pass, _________';
    newQuiz.answers = [{answer: 'are you ?'}, {answer: 'aren\'t you ?'}, {answer: 'will you ?'}, {answer: 'may you ?'}];
    newQuiz.status = 1;
    newQuiz.save(function (err, res) {
        console.log(res);
        console.log(err);
        answer.quiz_id = res._id;
        answer.rightAnswer = 2;
        answer.save(function(error, result) {
            console.log('answer');
            console.log(result);
        })
    })*/
}