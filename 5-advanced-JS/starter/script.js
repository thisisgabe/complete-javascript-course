//function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';




//when new is created, a new empty oobject is created
//then function is called
//regular function call, this points to global
//but, when using new, a new scope (empty object) is created and we use this to use it




// instantiation
var john = new Person('john', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');


john.calculateAge();
jane.calculateAge();
mark.calculateAge();


// Object.create

var personProto = {
    calculateAge: function () {
        console.log(2018-this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer'}
});
*/
/*
// primitives vs objects

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// they copy the data, they do not create a reference to it
// for primitives

var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

// for objects, we create a new reference that points to a new reference, same object in memory
// functions

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

// we do not pass the object ot the functin, but only the reference

change(age, obj);

console.log(age);
console.log(obj.city);
*/

/*
// passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// callback functions, functions we pass into functions and callback later (callback = called later)

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }
    return -1;
    
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

/*
// functions returning functions

function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        };
    }
    else if (job === 'teacher') {
        return function(name) {
            console.log('What subject did you teach, ' + name + '?');
        };
    }
    else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        };
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('Gabe');
designerQuestion('Gabe');

interviewQuestion('teacher')('Ye'); 

// first variable we pass goes to interview qestion, but since it returns a function, 
// we can use another () to pass another variable to the funciton that is returned
*/

/*
// immediately invoked function expressions (iife)

function game() {
    var score = Math.random() * 10;
    console.log(score>=5);
}

game();

(function () {
    var score = Math.random() * 10;
    console.log(score>=5);
})();

//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score>=5 - goodLuck);
})(5);

// create a new scope hidden from outside scope,
// obtain dta privacy, dont interfere with variables in the global scope
// not reusable, just for data privacy
*/

/*
// closures

function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

//retirement(66)(1990);

/*function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        };
    }
    else if (job === 'teacher') {
        return function(name) {
            console.log('What subject did you teach, ' + name + '?');
        };
    }
    else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        };
    }
}
*/
/*
function interviewQuestion(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        }
        else if (job === 'teacher') {
            console.log('What subject did you teach, ' + name + '?');
        }
        else {
                console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/

/*
// bind, call and apply

var john = { 
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }
        else if (style === 'friendly') {
            console.log('Hey what\'s up? I\'m ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

// AKA currying (create a function based on another function with some preset variables)


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// callback functions, functions we pass into functions and callback later (callback = called later)

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


var quiz = function() {
    var Question = function (question, answers, correctanswer) {
        this.question = question;
        this.answers = answers;
        this.correctanswer = correctanswer;
    };
    
    Question.prototype.printQuestion = function() {
        console.log(this.question);
        for (var index = 0; index < this.answers.length; index++) {
            console.log((index+1) + '. ' + this.answers[index]);
        }
    };
    
    Question.prototype.checkAnswer = function(ans) {
        return ans === this.correctanswer ? console.log('Correct!') : console.log('No, loser!');
    };
    
    var randomQuestionNumber = function(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    var question1 = new Question('who is the king of the north?', ['jon snow', 'ned staark', 'the bolton bastard'], 1);
    var question2 = new Question('what is white and black and red all over?', ['a newspaper', 'a murdered zebra', 'zebra cakes with ketchup on it'], 2);
    
    var questions = [question1, question2];
    
    var questionNumber = randomQuestionNumber(1, 2) - 1;
    questions[questionNumber].printQuestion();
    
    var answer = prompt('What is the correct answer?');
    questions[questionNumber].checkAnswer(Number(answer));
};

question1 = "cool";

quiz();

console.log(question1);
